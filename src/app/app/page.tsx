"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SignInButton } from "@/components/sign-in-button";
import { WaitlistForm } from "@/components/waitlist-form";
import { trackEvent } from "@/lib/analytics";

type CallType = "discovery" | "demo" | "follow-up";

type GenerateResponse = {
  summary: string;
  pain_points: string[];
  objections: string[];
  next_steps: string[];
  follow_up_email: string;
  crm_note: string;
};

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

  useEffect(() => {
    void trackEvent("page_view", { page: "app" });
  }, []);

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

  async function handleGenerate() {
    setError(null);
    setCopied(null);

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
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript, callType }),
      });

      const result = await response.json();

      if (!response.ok) {
        void trackEvent("generate_failed", { callType, reason: result.error || "request_failed" });
        throw new Error(result.error || "Something went wrong.");
      }

      setData(result);
      void trackEvent("generate_success", { callType });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy(title: string, content: string, key: string) {
    await navigator.clipboard.writeText(content);
    setCopied(title);
    if (key === "follow_up_email") void trackEvent("copy_follow_up_email");
    if (key === "crm_note") void trackEvent("copy_crm_note");
    window.setTimeout(() => setCopied(null), 1600);
  }

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
            <SignInButton dark />
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
                  Demo-ready
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
                  className="min-h-[430px] w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-4 text-sm leading-7 text-white outline-none transition focus:border-cyan-400"
                  placeholder="Paste your sales call transcript here..."
                />
                <p className="mt-2 text-xs text-slate-400">
                  Tip: give the model a detailed transcript for better pain points, objections, and next steps.
                </p>
              </div>
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Generating your follow-up assets..." : "Generate outputs"}
              </button>
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
