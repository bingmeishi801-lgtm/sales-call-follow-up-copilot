import type { Metadata } from "next";
import { SeoHubPage } from "@/components/seo-hub-page";

export const metadata: Metadata = {
  title: "Sales Guides Pages | Sales Call Follow-up Copilot",
  description: "Read guides on follow-up emails, discovery call summaries, and CRM note writing.",
};

export default function GuidesHubPage() {
  return <SeoHubPage category="guides" />;
}
