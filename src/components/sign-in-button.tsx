"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { createSupabaseBrowserClient } from "@/lib/supabase-client";

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
      const supabase = createSupabaseBrowserClient();
      if (!supabase) {
        setMessage("Auth not configured yet. Add Supabase env vars to enable sign in.");
        return;
      }

      const email = window.prompt("Enter your email for a magic sign-in link:");
      if (!email) {
        setMessage("Sign-in canceled.");
        return;
      }

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/app`,
        },
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage("Magic link sent. Check your inbox.");
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
