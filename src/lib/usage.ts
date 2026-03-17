import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

const GUEST_LIMIT = 2;
const AUTH_LIMIT = 10;
const USAGE_COOKIE = "sales_usage";
const USAGE_TIMEZONE = "Asia/Shanghai";
const DAY_MS = 24 * 60 * 60 * 1000;

type GuestUsagePayload = {
  day: string;
  count: number;
};

export type UsageStatus = {
  isAuthenticated: boolean;
  limit: number;
  used: number;
  remaining: number;
  resetDay: string;
  message: string;
};

function getCookieSecret() {
  return process.env.USAGE_COOKIE_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "local-dev-usage-secret";
}

function signValue(value: string) {
  return crypto.createHmac("sha256", getCookieSecret()).update(value).digest("hex");
}

function getShanghaiDayKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: USAGE_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

function parseGuestCookie(raw: string | undefined): GuestUsagePayload {
  if (!raw) {
    return { day: getShanghaiDayKey(), count: 0 };
  }

  const [encoded, signature] = raw.split(".");
  if (!encoded || !signature) {
    return { day: getShanghaiDayKey(), count: 0 };
  }

  const expected = signValue(encoded);
  if (signature !== expected) {
    return { day: getShanghaiDayKey(), count: 0 };
  }

  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as GuestUsagePayload;
    if (!payload.day || typeof payload.count !== "number") {
      return { day: getShanghaiDayKey(), count: 0 };
    }
    if (payload.day !== getShanghaiDayKey()) {
      return { day: getShanghaiDayKey(), count: 0 };
    }
    return { day: payload.day, count: payload.count };
  } catch {
    return { day: getShanghaiDayKey(), count: 0 };
  }
}

function serializeGuestCookie(payload: GuestUsagePayload) {
  const encoded = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  return `${encoded}.${signValue(encoded)}`;
}

function getTodayRangeInShanghai() {
  const dayKey = getShanghaiDayKey();
  const [year, month, day] = dayKey.split("-").map(Number);
  const start = new Date(Date.UTC(year, month - 1, day, 0, 0, 0) - 8 * 60 * 60 * 1000);
  const end = new Date(start.getTime() + DAY_MS);
  return { startIso: start.toISOString(), endIso: end.toISOString(), dayKey };
}

export async function getAuthenticatedUsage(userId: string): Promise<UsageStatus> {
  const supabase = createSupabaseServerClient();
  const { startIso, endIso, dayKey } = getTodayRangeInShanghai();

  if (!supabase) {
    return {
      isAuthenticated: true,
      limit: AUTH_LIMIT,
      used: 0,
      remaining: AUTH_LIMIT,
      resetDay: dayKey,
      message: `${AUTH_LIMIT} generations available today after login.`,
    };
  }

  const { count } = await supabase
    .from("generation_history")
    .select("id", { head: true, count: "exact" })
    .eq("user_id", userId)
    .gte("created_at", startIso)
    .lt("created_at", endIso);

  const used = count ?? 0;
  return {
    isAuthenticated: true,
    limit: AUTH_LIMIT,
    used,
    remaining: Math.max(AUTH_LIMIT - used, 0),
    resetDay: dayKey,
    message:
      used >= AUTH_LIMIT
        ? "Daily limit reached. Come back tomorrow."
        : `${Math.max(AUTH_LIMIT - used, 0)} of ${AUTH_LIMIT} logged-in generations left today.`,
  };
}

export function getGuestUsage(request: NextRequest): UsageStatus {
  const payload = parseGuestCookie(request.cookies.get(USAGE_COOKIE)?.value);
  return {
    isAuthenticated: false,
    limit: GUEST_LIMIT,
    used: payload.count,
    remaining: Math.max(GUEST_LIMIT - payload.count, 0),
    resetDay: payload.day,
    message:
      payload.count >= GUEST_LIMIT
        ? "Guest limit reached. Sign in for more generations or come back tomorrow."
        : `${Math.max(GUEST_LIMIT - payload.count, 0)} of ${GUEST_LIMIT} guest generations left today.`,
  };
}

export function applyGuestUsageCookie(response: NextResponse, request: NextRequest, nextUsedCount: number) {
  const payload = parseGuestCookie(request.cookies.get(USAGE_COOKIE)?.value);
  const serialized = serializeGuestCookie({
    day: payload.day === getShanghaiDayKey() ? payload.day : getShanghaiDayKey(),
    count: nextUsedCount,
  });

  response.cookies.set({
    name: USAGE_COOKIE,
    value: serialized,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: DAY_MS / 1000,
  });
}
