"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { createSupabaseBrowserClient } from "@/lib/supabase-client";

type SignInButtonProps = {
  dark?: boolean;
  onAuthChange?: (userEmail: string | null) => void;
};

function buttonStyle(dark: boolean, variant: "primary" | "secondary") {
  if (variant === "primary") {
    return dark
      ? "border-cyan-300/40 bg-cyan-400 text-slate-950 hover:bg-cyan-300"
      : "border-cyan-300 bg-cyan-500 text-slate-950 hover:bg-cyan-400";
  }

  return dark
    ? "border-white/15 text-white hover:bg-white/10"
    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100";
}

export function SignInButton({ dark = false, onAuthChange }: SignInButtonProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<"google" | "signout" | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
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

  async function handleSignOut() {
    setLoading("signout");
    setMessage(null);

    try {
      const supabase = createSupabaseBrowserClient();

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
    } catch {
      setMessage("Could not sign out right now.");
    } finally {
      setLoading(null);
    }
  }

  async function handleGoogleSignIn() {
    setLoading("google");
    setMessage(null);
    void trackEvent("sign_in_clicked", { method: "google" });

    try {
      const supabase = createSupabaseBrowserClient();
      if (!supabase) {
        setMessage("Auth not configured yet. Add Supabase env vars first.");
        return;
      }

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/app`,
          queryParams: {
            access_type: "offline",
            prompt: "select_account",
          },
        },
      });

      if (error) {
        setMessage(error.message);
        return;
      }
    } catch {
      setMessage("Google sign-in is not ready yet. Please finish the OAuth setup in Supabase.");
    } finally {
      setLoading(null);
    }
  }

  if (userEmail) {
    return (
      <div className="space-y-2">
        <button
          onClick={() => void handleSignOut()}
          className={`inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition ${buttonStyle(dark, "secondary")}`}
        >
          {loading === "signout" ? "Signing out..." : "Sign out"}
        </button>
        <p className={`max-w-xs text-xs ${dark ? "text-emerald-300" : "text-emerald-600"}`}>{userEmail}</p>
        {message ? <p className={`max-w-xs text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>{message}</p> : null}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => void handleGoogleSignIn()}
          className={`inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition ${buttonStyle(dark, "primary")}`}
        >
          {loading === "google" ? "Opening Google..." : "Continue with Google"}
        </button>
      </div>
      {message ? <p className={`max-w-sm text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>{message}</p> : null}
    </div>
  );
}
