import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type EventRow = { event: string; created_at: string };

export async function GET(request: NextRequest) {
  try {
    const supabase = createSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ error: "Analytics storage is not configured." }, { status: 501 });
    }

    const daysRaw = Number(request.nextUrl.searchParams.get("days") || 1);
    const days = Number.isFinite(daysRaw) && daysRaw > 0 ? Math.min(daysRaw, 30) : 1;
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

    const { data, error } = await supabase
      .from("analytics_events")
      .select("event, created_at")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(5000);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const rows = (data || []) as EventRow[];
    const counts: Record<string, number> = {};
    for (const row of rows) {
      counts[row.event] = (counts[row.event] || 0) + 1;
    }

    return NextResponse.json({
      days,
      since,
      total: rows.length,
      counts,
      focus: {
        generate_success: counts.generate_success || 0,
        copy_follow_up_email: counts.copy_follow_up_email || 0,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load analytics summary.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
