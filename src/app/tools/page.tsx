import type { Metadata } from "next";
import { SeoHubPage } from "@/components/seo-hub-page";

export const metadata: Metadata = {
  title: "Sales Tools Pages | Sales Call Follow-up Copilot",
  description: "Browse tool pages for sales call summaries, follow-up emails, and CRM note generation.",
};

export default function ToolsHubPage() {
  return <SeoHubPage category="tools" />;
}
