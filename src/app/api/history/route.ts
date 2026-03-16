import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type GeneratePayload = {
  callType: string;
  transcript: string;
  summary: string;
  pain_points: string[];
  objections: string[];
  next_steps: string[];
  follow_up_email: string;
  crm_note: string;
};

function createSupabaseAnonClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function getUserFromRequest(request: NextRequest) {
  const authHeader = request.headers.get("authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!token) return null;

  const supabaseAnon = createSupabaseAnonClient();
  if (!supabaseAnon) return null;

  const { data, error } = await supabaseAnon.auth.getUser(token);
  if (error || !data.user) return null;
  return data.user;
}

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ items: [] });
    }

    const { data, error } = await supabase
      .from("generation_history")
      .select("id, call_type, transcript, summary, pain_points, objections, next_steps, follow_up_email, crm_note, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(20);

    if (error) {
      return NextResponse.json({ items: [] });
    }

    return NextResponse.json({ items: data ?? [] });
  } catch {
    return NextResponse.json({ items: [] });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 500 });
    }

    const body = (await request.json()) as GeneratePayload;
    const { error } = await supabase.from("generation_history").insert({
      user_id: user.id,
      user_email: user.email ?? null,
      call_type: body.callType,
      transcript: body.transcript,
      summary: body.summary,
      pain_points: body.pain_points,
      objections: body.objections,
      next_steps: body.next_steps,
      follow_up_email: body.follow_up_email,
      crm_note: body.crm_note,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to save history" }, { status: 500 });
  }
}
