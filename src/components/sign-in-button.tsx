"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type SignInButtonProps = {
  dark?: boolean;
};

export function SignInButton({ dark = false }: SignInButtonProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    setMessage(null);
    void trackEvent("sign_in_clicked");

    try {
      const response = await fetch("/api/auth/status");
      const data = await response.json();
      if (data.configured) {
        setMessage("Auth is configured, but UI sign-in flow is still pending. Next step: wire Supabase Auth.");
      } else {
        setMessage("Auth not configured yet. Add Supabase env vars to enable sign in.");
      }
    } catch {
      setMessage("Auth not configured yet.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition ${
          dark
            ? "border-white/15 text-white hover:bg-white/10"
            : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
        }`}
      >
        {loading ? "Checking..." : "Sign in"}
      </button>
      {message ? <p className={`max-w-xs text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>{message}</p> : null}
    </div>
  );
}
