import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type WaitlistEntry = {
  email: string;
  name?: string;
  createdAt: string;
  source?: string;
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "waitlist.json");

async function loadEntries(): Promise<WaitlistEntry[]> {
  try {
    const raw = await readFile(dataFile, "utf8");
    return JSON.parse(raw) as WaitlistEntry[];
  } catch {
    return [];
  }
}

async function fallbackSave(entry: WaitlistEntry) {
  await mkdir(dataDir, { recursive: true });
  const entries = await loadEntries();
  const exists = entries.some((item) => item.email === entry.email);
  if (!exists) {
    entries.push(entry);
    await writeFile(dataFile, JSON.stringify(entries, null, 2), "utf8");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: string; name?: string; source?: string };
    const email = body.email?.trim().toLowerCase() || "";
    const name = body.name?.trim() || "";
    const source = body.source?.trim() || "unknown";

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const entry = { email, name: name || undefined, source, createdAt: new Date().toISOString() };
    const supabase = createSupabaseServerClient();

    if (supabase) {
      const { error } = await supabase.from("waitlist").upsert(
        {
          email: entry.email,
          name: entry.name ?? null,
          source: entry.source ?? null,
        },
        { onConflict: "email" },
      );

      if (!error) {
        return NextResponse.json({ ok: true, message: "You’re on the waitlist.", provider: "supabase" });
      }
    }

    await fallbackSave(entry);
    return NextResponse.json({ ok: true, message: "You’re on the waitlist.", provider: "fallback" });
  } catch {
    return NextResponse.json({ ok: true, message: "Thanks — we saved your interest.", provider: "fallback" });
  }
}
