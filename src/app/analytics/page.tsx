"use client";

import { useEffect, useState } from "react";

type SummaryResponse = {
  days: number;
  since: string;
  total: number;
  counts: Record<string, number>;
  focus: {
    generate_success: number;
    copy_follow_up_email: number;
  };
  error?: string;
};

export default function AnalyticsPage() {
  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SummaryResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`/api/analytics/summary?days=${days}`);
      const json = (await res.json()) as SummaryResponse;
      if (!res.ok) {
        throw new Error(json.error || "Failed to load analytics summary.");
      }
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load analytics summary.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, [days]);

  return (
    <main className="min-h-screen bg-[#020817] px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-3xl font-semibold">Analytics Summary</h1>
          <p className="mt-2 text-sm text-slate-300">Quick view for core MVP events, no log searching needed.</p>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm text-slate-300">Range</label>
          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm"
          >
            <option value={1}>Today (1 day)</option>
            <option value={7}>Last 7 days</option>
            <option value={14}>Last 14 days</option>
          </select>
          <button
            onClick={() => void load()}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
          >
            Refresh
          </button>
        </div>

        {error ? <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-red-200">{error}</div> : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-wide text-cyan-200">generate_success</p>
            <p className="mt-2 text-3xl font-semibold">{loading ? "..." : data?.focus.generate_success ?? 0}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-wide text-cyan-200">copy_follow_up_email</p>
            <p className="mt-2 text-3xl font-semibold">{loading ? "..." : data?.focus.copy_follow_up_email ?? 0}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-300">Total events in range: <span className="font-semibold text-white">{loading ? "..." : data?.total ?? 0}</span></p>
          <p className="mt-1 text-xs text-slate-400">Since: {data?.since ? new Date(data.since).toLocaleString() : "-"}</p>
        </div>
      </div>
    </main>
  );
}
