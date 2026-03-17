"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SignInButton } from "@/components/sign-in-button";
import { WaitlistForm } from "@/components/waitlist-form";
import { trackEvent } from "@/lib/analytics";
import { createSupabaseBrowserClient } from "@/lib/supabase-client";

type CallType = "discovery" | "demo" | "follow-up";

type GenerateResponse = {
  summary: string;
  pain_points: string[];
  objections: string[];
  next_steps: string[];
  follow_up_email: string;
  crm_note: string;
};

type HistoryItem = {
  id: string;
  call_type: string;
  transcript: string;
  summary: string;
  pain_points: string[];
  objections: string[];
  next_steps: string[];
  follow_up_email: string;
  crm_note: string;
  created_at: string;
};

type UsageStatus = {
  isAuthenticated: boolean;
  limit: number;
  used: number;
  remaining: number;
  resetDay: string;
  message: string;
};

const USAGE_STATUS_STORAGE_KEY = "sales-call-follow-up-usage-status";

const defaultTranscript = `Rep: Thanks for making the time today. I’d love to understand how your sales team currently handles post-call follow-up.
Prospect: Right now it’s mostly manual. Reps write their own recap emails and update HubSpot after the call.
Rep: What’s the biggest challenge with that process?
Prospect: It takes too long, and the notes are inconsistent. Managers can’t always tell what happened in the call.
Rep: Are follow-up emails going out quickly enough?
Prospect: Not always. Sometimes reps wait until the next day, and then details get lost.
Rep: Any concerns around adopting a tool like this?
Prospect: We’d want to make sure the outputs are accurate and not generic. We also don’t want another complicated setup.
Rep: Makes sense. If we could generate summary, pain points, next steps, and a CRM-ready note from your transcript, would that be useful?
Prospect: Yes, especially if the rep can edit and copy it quickly.
Rep: Great. As a next step, I can send over a short demo and pricing overview.
Prospect: That works. Let’s review it this week.`;

export default function AppPage() {
  const [transcript, setTranscript] = useState(defaultTranscript);
  const [callType, setCallType] = useState<CallType>("discovery");
  const [data, setData] = useState<GenerateResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [activeHistoryId, setActiveHistoryId] = useState<string | null>(null);
  const [usageStatus, setUsageStatus] = useState<UsageStatus | null>(null);
  const [usageLoading, setUsageLoading] = useState(false);

  useEffect(() => {
    void trackEvent("page_view", { page: "app" });
    const cachedUsage = window.localStorage.getItem(USAGE_STATUS_STORAGE_KEY);
    if (cachedUsage) {
      setUsageStatus(JSON.parse(cachedUsage) as UsageStatus);
    }
  }, []);

  async function fetchUsageStatus() {
    try {
      setUsageLoading(true);

      const headers: HeadersInit = {};

      if (userEmail) {
        const supabase = createSupabaseBrowserClient();
        if (supabase) {
          const { data: authData } = await supabase.auth.getSession();
          const token = authData.session?.access_token;
          if (token) {
            headers.Authorization = `Bearer ${token}`;
          }
        }
      }

      const response = await fetch("/api/usage", { headers });
      const json = (await response.json()) as UsageStatus;
      setUsageStatus(json);
      window.localStorage.setItem(USAGE_STATUS_STORAGE_KEY, JSON.stringify(json));
    } catch {
      // noop
    } finally {
      setUsageLoading(false);
    }
  }

  async function fetchHistory() {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;
    const { data: authData } = await supabase.auth.getSession();
    const token = authData.session?.access_token;
    if (!token) {
      setHistory([]);
      return;
    }

    try {
      setHistoryLoading(true);
      const res = await fetch("/api/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      setHistory(json.items || []);
    } finally {
      setHistoryLoading(false);
    }
  }

  useEffect(() => {
    void fetchUsageStatus();

    if (userEmail) {
      void fetchHistory();
    } else {
      setHistory([]);
      setActiveHistoryId(null);
    }
  }, [userEmail]);

  const sections = useMemo(() => {
    if (!data) return [];

    return [
      { key: "summary", title: "Call Summary", content: data.summary },
      { key: "pain_points", title: "Key Pain Points", content: data.pain_points.join("\n") },
      { key: "objections", title: "Objections", content: data.objections.join("\n") },
      { key: "next_steps", title: "Next Steps", content: data.next_steps.join("\n") },
      { key: "follow_up_email", title: "Follow-up Email", content: data.follow_up_email },
      { key: "crm_note", title: "CRM Note", content: data.crm_note },
    ];
  }, [data]);

  async function saveHistory(payload: GenerateResponse) {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const { data: authData } = await supabase.auth.getSession();
    const token = authData.session?.access_token;
    if (!token) return;

    const response = await fetch("/api/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        callType,
        transcript,
        ...payload,
      }),
    });

    if (!response.ok) {
      const json = await response.json().catch(() => ({}));
      void trackEvent("history_save_failed", { reason: json.error || "request_failed", callType });
      throw new Error(json.error || "Failed to save history.");
    }

    void trackEvent("history_saved", { callType });
    await fetchHistory();
  }

  async function handleGenerate() {
    setError(null);
    setCopied(null);
    setActiveHistoryId(null);

    if (!transcript.trim()) {
      setError("Please paste a transcript first.");
      return;
    }

    if (transcript.trim().length < 300) {
      setError("Transcript is too short to generate useful follow-up content.");
      return;
    }

    try {
      setLoading(true);
      void trackEvent("generate_clicked", { callType });

      const headers: HeadersInit = { "Content-Type": "application/json" };
      if (userEmail) {
        const supabase = createSupabaseBrowserClient();
        if (supabase) {
          const { data: authData } = await supabase.auth.getSession();
          const token = authData.session?.access_token;
          if (token) {
            headers.Authorization = `Bearer ${token}`;
          }
        }
      }

      const response = await fetch("/api/generate", {
        method: "POST",
        headers,
        body: JSON.stringify({ transcript, callType }),
      });

      const result = await response.json();

      if (!response.ok) {
        void trackEvent("generate_failed", { callType, reason: result.error || "request_failed" });
        throw new Error(result.error || "Something went wrong.");
      }

      setData(result);
      void trackEvent("generate_success", { callType });
      if (userEmail) {
        await saveHistory(result);
      }
      await fetchUsageStatus();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy(title: string, content: string, key: string) {
    await navigator.clipboard.writeText(content);
    setCopied(title);

    if (key === "summary") void trackEvent("copy_summary");
    if (key === "pain_points") void trackEvent("copy_pain_points");
    if (key === "objections") void trackEvent("copy_objections");
    if (key === "next_steps") void trackEvent("copy_next_steps");
    if (key === "follow_up_email") void trackEvent("copy_follow_up_email");
    if (key === "crm_note") void trackEvent("copy_crm_note");

    window.setTimeout(() => setCopied(null), 1600);
  }

  async function handleCopyAll() {
    if (!data) return;
    const content = [
      `Call Summary\n${data.summary}`,
      `Key Pain Points\n${data.pain_points.join("\n")}`,
      `Objections\n${data.objections.join("\n")}`,
      `Next Steps\n${data.next_steps.join("\n")}`,
      `Follow-up Email\n${data.follow_up_email}`,
      `CRM Note\n${data.crm_note}`,
    ].join("\n\n");
    await navigator.clipboard.writeText(content);
    setCopied("All outputs");
    window.setTimeout(() => setCopied(null), 1600);
  }

  async function deleteHistoryItem(item: HistoryItem) {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;
    const { data: authData } = await supabase.auth.getSession();
    const token = authData.session?.access_token;
    if (!token) return;

    await fetch("/api/history", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: item.id }),
    });
    if (activeHistoryId === item.id) {
      setActiveHistoryId(null);
    }
    await fetchHistory();
  }

  async function clearAllHistory() {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;
    const { data: authData } = await supabase.auth.getSession();
    const token = authData.session?.access_token;
    if (!token) return;

    await fetch("/api/history", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ clearAll: true }),
    });
    setHistory([]);
    setActiveHistoryId(null);
  }

  function loadHistoryItem(item: HistoryItem) {
    setCallType((item.call_type as CallType) || "discovery");
    setTranscript(item.transcript);
    setData({
      summary: item.summary,
      pain_points: item.pain_points || [],
      objections: item.objections || [],
      next_steps: item.next_steps || [],
      follow_up_email: item.follow_up_email,
      crm_note: item.crm_note,
    });
    setActiveHistoryId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const historySubtitle = "Recent generations saved to Supabase";

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Sales Call Follow-up Copilot</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Generate post-call assets your sales team can use immediately
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
              Paste a transcript, choose the call type, and generate summaries, objections, next steps, follow-up emails, and CRM notes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <SignInButton dark onAuthChange={setUserEmail} />
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Marketing page
            </Link>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[430px_minmax(0,1fr)]">
          <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-cyan-200">Input</p>
                  <p className="text-xs text-slate-400">Designed for discovery, demo, and follow-up calls</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {userEmail ? "History enabled" : "Demo-ready"}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Call Type</label>
                <select
                  value={callType}
                  onChange={(e) => setCallType(e.target.value as CallType)}
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
                >
                  <option value="discovery">Discovery Call</option>
                  <option value="demo">Demo Call</option>
                  <option value="follow-up">Follow-up Call</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Transcript</label>
                <textarea
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  className="min-h-[320px] w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-4 text-sm leading-7 text-white outline-none transition focus:border-cyan-400"
                  placeholder="Paste your sales call transcript here..."
                />
                <p className="mt-2 text-xs text-slate-400">
                  Tip: give the model a detailed transcript for better pain points, objections, and next steps.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleGenerate}
                  disabled={loading || (!!usageStatus && usageStatus.remaining <= 0)}
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Generating your follow-up assets..." : "Generate outputs"}
                </button>
                <button
                  onClick={handleCopyAll}
                  disabled={!data}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {copied === "All outputs" ? "Copied all" : "Copy all"}
                </button>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white">Daily usage</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {usageLoading
                        ? "Checking remaining generations..."
                        : usageStatus?.message || "Guest users get 2/day. Logged-in users get 10/day."}
                    </p>
                  </div>
                  {usageStatus ? (
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200">
                      {usageStatus.remaining} / {usageStatus.limit} left
                    </div>
                  ) : null}
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="rounded-full border border-white/10 px-3 py-1">Guest: 2/day</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Signed in: 10/day</span>
                </div>
              </div>
              {userEmail ? (
                <p className="text-xs text-emerald-300">
                  {`Signed in as ${userEmail}. New generations will be saved to Supabase.`}
                </p>
              ) : null}
              {error ? (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              ) : null}
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <p className="text-sm font-medium text-white">Get updates for the production version</p>
                <p className="mt-1 text-xs leading-6 text-slate-400">Join the waitlist for login, analytics, CRM sync, and improved AI output quality.</p>
                <div className="mt-3">
                  <WaitlistForm source="app" compact dark />
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            {userEmail ? (
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-white">Saved history</h2>
                    <p className="text-xs text-slate-400">{historySubtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => void fetchHistory()}
                      className="rounded-xl border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:bg-white/10"
                    >
                      Refresh
                    </button>
                    <button
                      onClick={() => void clearAllHistory()}
                      disabled={history.length === 0}
                      className="rounded-xl border border-red-400/20 px-3 py-2 text-xs text-red-200 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Clear all
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  {historyLoading ? <p className="text-sm text-slate-400">Loading history...</p> : null}
                  {!historyLoading && history.length === 0 ? <p className="text-sm text-slate-400">No saved generations yet.</p> : null}
                  {history.map((item) => {
                    const isActive = activeHistoryId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`rounded-2xl border p-4 text-left transition ${
                          isActive
                            ? "border-cyan-400/50 bg-cyan-400/10"
                            : "border-white/10 bg-slate-950/70 hover:border-cyan-400/40 hover:bg-slate-950"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <button onClick={() => loadHistoryItem(item)} className="flex-1 text-left">
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-sm font-medium text-white capitalize">{item.call_type} call</span>
                              <span className="text-xs text-slate-400">{new Date(item.created_at).toLocaleString()}</span>
                            </div>
                            <p className="mt-2 line-clamp-2 text-sm text-slate-300">{item.summary}</p>
                          </button>
                          <button
                            onClick={() => void deleteHistoryItem(item)}
                            className="rounded-lg border border-white/10 px-2 py-1 text-xs text-slate-300 transition hover:bg-white/10"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {!data && !loading ? (
              <div className="rounded-[28px] border border-dashed border-white/15 bg-white/5 px-8 py-16 text-center text-slate-300 backdrop-blur">
                <h2 className="text-2xl font-semibold text-white">Your outputs will show up here</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  This view is optimized for fast copy-and-paste into email, CRM, and internal sales workflows.
                </p>
              </div>
            ) : null}

            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="animate-pulse rounded-[28px] border border-white/10 bg-white/5 p-6">
                    <div className="h-5 w-40 rounded bg-white/10" />
                    <div className="mt-4 h-4 w-full rounded bg-white/10" />
                    <div className="mt-3 h-4 w-11/12 rounded bg-white/10" />
                    <div className="mt-3 h-4 w-4/5 rounded bg-white/10" />
                  </div>
                ))
              : null}

            {sections.map((section) => (
              <div key={section.key} className="rounded-[28px] border border-white/10 bg-white p-6 text-slate-900 shadow-xl shadow-black/10">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                    <p className="mt-1 text-xs text-slate-500">Structured for immediate copy into your sales workflow</p>
                  </div>
                  <button
                    onClick={() => handleCopy(section.title, section.content, section.key)}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    {copied === section.title ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre className="mt-4 whitespace-pre-wrap break-words font-sans text-sm leading-7 text-slate-700">
                  {section.content}
                </pre>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
