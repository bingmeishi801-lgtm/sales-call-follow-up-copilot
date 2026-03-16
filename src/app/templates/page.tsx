import type { Metadata } from "next";
import { SeoHubPage } from "@/components/seo-hub-page";

export const metadata: Metadata = {
  title: "Sales Templates Pages | Sales Call Follow-up Copilot",
  description: "Browse templates for sales follow-up emails, discovery call notes, and CRM notes.",
};

export default function TemplatesHubPage() {
  return <SeoHubPage category="templates" />;
}
