export type AnalyticsEventName =
  | "page_view"
  | "generate_clicked"
  | "generate_success"
  | "generate_failed"
  | "copy_summary"
  | "copy_pain_points"
  | "copy_objections"
  | "copy_next_steps"
  | "copy_follow_up_email"
  | "copy_crm_note"
  | "waitlist_submit"
  | "sign_in_clicked"
  | "sign_in_success"
  | "history_saved"
  | "history_save_failed"
  | "hubspot_push_clicked"
  | "hubspot_push_success"
  | "hubspot_push_failed";

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
