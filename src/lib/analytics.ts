export type AnalyticsEventName =
  | "page_view"
  | "generate_clicked"
  | "generate_success"
  | "generate_failed"
  | "copy_follow_up_email"
  | "copy_crm_note"
  | "waitlist_submit"
  | "sign_in_clicked";

export async function trackEvent(event: AnalyticsEventName, properties?: Record<string, unknown>) {
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, properties }),
      keepalive: true,
    });
  } catch {
    // best effort only
  }
}
