"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { createSupabaseBrowserClient } from "@/lib/supabase-client";

type SignInButtonProps = {
  dark?: boolean;
  onAuthChange?: (userEmail: string | null) => void;
};

const TEST_EMAIL = "test-mode@local.dev";

export function SignInButton({ dark = false, onAuthChange }: SignInButtonProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const testModeEmail = typeof window !== "undefined" ? window.localStorage.getItem("test-mode-email") : null;
    if (testModeEmail) {
      setUserEmail(testModeEmail);
      onAuthChange?.(testModeEmail);
      return;
    }

    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    supabase.auth.getUser().then(({ data }) => {
      const email = data.user?.email ?? null;
      setUserEmail(email);
      onAuthChange?.(email);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      const email = session?.user?.email ?? null;
      setUserEmail(email);
      onAuthChange?.(email);
    });

    return () => authListener.subscription.unsubscribe();
  }, [onAuthChange]);

  async function handleClick() {
    setLoading(true);
    setMessage(null);
    void trackEvent("sign_in_clicked");

    try {
      const isTestMode = userEmail === TEST_EMAIL;
      const supabase = createSupabaseBrowserClient();

      if (userEmail) {
        if (isTestMode) {
          window.localStorage.removeItem("test-mode-email");
          setUserEmail(null);
          onAuthChange?.(null);
          setMessage("Signed out of test mode.");
          return;
        }

        if (!supabase) {
          setMessage("Auth not configured yet.");
          return;
        }

        const { error } = await supabase.auth.signOut();
        if (error) {
          setMessage(error.message);
          return;
        }
        setMessage("Signed out.");
        return;
      }

      const mode = window.prompt(
        "Type 'test' for local test mode, or enter your email for a magic sign-in link:",
      );

      if (!mode) {
        setMessage("Sign-in canceled.");
        return;
      }

      if (mode.trim().toLowerCase() === "test") {
        window.localStorage.setItem("test-mode-email", TEST_EMAIL);
        setUserEmail(TEST_EMAIL);
        onAuthChange?.(TEST_EMAIL);
        setMessage("Test mode enabled. History will be saved locally for quick testing.");
        return;
      }

      if (!supabase) {
        setMessage("Auth not configured yet. Add Supabase env vars to enable sign in.");
        return;
      }

      const { error } = await supabase.auth.signInWithOtp({
        email: mode.trim(),
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
        {loading ? "Checking..." : userEmail ? "Sign out" : "Sign in"}
      </button>
      {userEmail ? (
        <p className={`max-w-xs text-xs ${dark ? "text-emerald-300" : "text-emerald-600"}`}>{userEmail}</p>
      ) : null}
      {message ? <p className={`max-w-xs text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>{message}</p> : null}
    </div>
  );
}
