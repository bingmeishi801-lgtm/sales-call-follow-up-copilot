import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getUserFromRequest } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("[analytics]", JSON.stringify(body));

    const event = typeof body?.event === "string" ? body.event : null;
    const properties = body?.properties ?? null;

    if (!event) {
      return NextResponse.json({ ok: false, error: "Missing event" }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ ok: true, storage: "console_only" });
    }

    const user = await getUserFromRequest(request);

    const { error } = await supabase.from("analytics_events").insert({
      event,
      properties,
      user_id: user?.id ?? null,
      user_email: user?.email ?? null,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, storage: "supabase" });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
