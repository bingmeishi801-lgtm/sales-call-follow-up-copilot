"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type WaitlistFormProps = {
  source: string;
  compact?: boolean;
  dark?: boolean;
};

export function WaitlistForm({ source, compact = false, dark = false }: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setMessage(data.message || "You’re on the waitlist.");
      setEmail("");
      setName("");
      void trackEvent("waitlist_submit", { source });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = dark
    ? "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-400"
    : "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-cyan-500";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      {compact ? (
        <div className="grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email"
            className={inputClass}
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Joining..." : "Join waitlist"}
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-3 md:grid-cols-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name (optional)"
              className={inputClass}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
              dark ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300" : "bg-slate-950 text-white hover:bg-slate-800"
            }`}
          >
            {loading ? "Joining..." : "Join the waitlist"}
          </button>
        </>
      )}

      {message ? <p className={`text-sm ${dark ? "text-emerald-300" : "text-emerald-700"}`}>{message}</p> : null}
      {error ? <p className={`text-sm ${dark ? "text-red-300" : "text-red-600"}`}>{error}</p> : null}
    </form>
  );
}
