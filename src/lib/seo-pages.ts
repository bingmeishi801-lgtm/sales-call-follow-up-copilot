export type SeoPageCategory = "tools" | "templates" | "guides";

export type SeoPage = {
  slug: string;
  category: SeoPageCategory;
  keyword: string;
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  benefits: string[];
  audiences: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedSlugs: string[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "sales-follow-up-email-generator",
    category: "tools",
    keyword: "sales follow up email generator",
    title: "Sales Follow Up Email Generator | Write Faster After Every Call",
    description:
      "Generate a clear sales follow up email from your call transcript in seconds. Turn raw conversations into polished next-step emails that are easy to send.",
    heroTitle: "Sales follow up email generator for reps who need to move fast",
    heroDescription:
      "Paste your call transcript, generate a polished follow-up email, and keep momentum while the deal is still warm.",
    intro:
      "A good follow-up email does three jobs at once: it proves you listened, confirms next steps, and keeps the deal moving. This page is built for teams that want a faster way to turn sales conversations into clean, professional follow-up copy.",
    benefits: [
      "Turn transcript details into a usable email draft instead of starting from a blank page.",
      "Keep messaging consistent across founders, AEs, and SDRs.",
      "Capture action items before they disappear into scattered notes.",
    ],
    audiences: ["Founder-led sales teams", "Small B2B sales teams", "Consultants running discovery calls"],
    faqs: [
      {
        question: "What should a sales follow-up email include?",
        answer:
          "At minimum, it should recap the context, confirm the buyer's priorities, and outline next steps. A strong follow-up email also sounds natural instead of robotic.",
      },
      {
        question: "Can I use this after a discovery call or demo?",
        answer:
          "Yes. The app works well for discovery calls, demos, and general follow-up conversations where you need a quick recap email.",
      },
    ],
    relatedSlugs: ["sales-follow-up-email-template", "how-to-write-a-sales-follow-up-email", "sales-call-summary-tool"],
  },
  {
    slug: "crm-note-generator",
    category: "tools",
    keyword: "crm note generator",
    title: "CRM Note Generator | Convert Sales Calls Into Structured Notes",
    description:
      "Use a CRM note generator to turn call transcripts into clean, structured notes your team can paste into HubSpot or any CRM workflow.",
    heroTitle: "Generate CRM notes without doing manual post-call admin",
    heroDescription:
      "Create concise CRM-ready notes from discovery calls, demos, and follow-up calls in seconds.",
    intro:
      "Manual CRM updates are one of the easiest things for busy reps to postpone. A CRM note generator helps you standardize what gets logged after a call, so your pipeline stays usable instead of messy.",
    benefits: [
      "Create repeatable CRM notes with consistent structure.",
      "Reduce time spent rewriting the same context after every meeting.",
      "Give managers better visibility into real buyer conversations.",
    ],
    audiences: ["HubSpot users", "Revenue teams with strict CRM hygiene", "Founders updating CRM themselves"],
    faqs: [
      {
        question: "Why are structured CRM notes important?",
        answer:
          "Structured notes make it easier to review deal progress, coach reps, and understand what was actually discussed without replaying the whole call.",
      },
      {
        question: "Does this replace my CRM?",
        answer:
          "No. It helps you create better notes faster, then copy them into your CRM workflow.",
      },
    ],
    relatedSlugs: ["crm-notes-template", "how-to-write-crm-notes-after-a-sales-call", "discovery-call-summary-generator"],
  },
  {
    slug: "discovery-call-summary-generator",
    category: "tools",
    keyword: "discovery call summary generator",
    title: "Discovery Call Summary Generator | Summarize Buyer Calls Fast",
    description:
      "Generate a discovery call summary from your transcript, including pain points, objections, and next steps your team can actually use.",
    heroTitle: "Summarize discovery calls into actionable sales notes",
    heroDescription:
      "Use one transcript to generate a clear discovery call summary, key pain points, objections, and follow-up actions.",
    intro:
      "Discovery calls create a lot of useful information, but raw transcripts are slow to reuse. This landing page is for teams that want an easier way to convert buyer conversations into something clear, shareable, and usable.",
    benefits: [
      "Highlight buyer pain points without rereading the full transcript.",
      "Package context for founders, managers, and handoffs.",
      "Reduce the time between call ending and follow-up happening.",
    ],
    audiences: ["Account executives", "Sales managers", "Agencies running client qualification calls"],
    faqs: [
      {
        question: "What makes a good discovery call summary?",
        answer:
          "A useful summary should capture goals, current workflow, pain points, objections, and agreed next steps instead of vague generic bullets.",
      },
      {
        question: "Can I use this for internal call reviews?",
        answer:
          "Yes. It works for quick internal recaps, coaching notes, and handoff prep as well as buyer-facing follow-up.",
      },
    ],
    relatedSlugs: ["how-to-summarize-a-discovery-call", "sales-call-summary-tool", "crm-note-generator"],
  },
  {
    slug: "sales-follow-up-email-template",
    category: "templates",
    keyword: "sales follow up email template",
    title: "Sales Follow Up Email Template | Simple Post-Call Structure",
    description:
      "Use this sales follow up email template to recap the conversation, confirm priorities, and keep momentum after discovery calls and demos.",
    heroTitle: "A practical sales follow up email template you can adapt fast",
    heroDescription:
      "Start with a proven structure, then tailor the details using the transcript from your latest sales call.",
    intro:
      "Templates save time, but only if they still sound like a human. This page gives you a straightforward structure for post-call follow-up so you can send something polished without reinventing the format every time.",
    benefits: [
      "Use a repeatable structure across the team.",
      "Reduce time spent drafting follow-up from scratch.",
      "Keep next steps visible and specific.",
    ],
    audiences: ["Solo founders", "Early-stage sales hires", "Teams standardizing outbound and follow-up"],
    faqs: [
      {
        question: "When should I use a template instead of a generator?",
        answer:
          "Templates are useful when you want a repeatable structure. A generator becomes useful when you want the call details woven into that structure automatically.",
      },
      {
        question: "How long should a follow-up email be?",
        answer:
          "Usually short to medium length works best: clear recap, buyer priorities, and next steps without writing a novel.",
      },
    ],
    relatedSlugs: ["sales-follow-up-email-generator", "how-to-write-a-sales-follow-up-email", "discovery-call-notes-template"],
  },
  {
    slug: "discovery-call-notes-template",
    category: "templates",
    keyword: "discovery call notes template",
    title: "Discovery Call Notes Template | Capture the Right Sales Details",
    description:
      "Use this discovery call notes template to capture pains, budget context, current workflow, objections, and next steps after every buyer conversation.",
    heroTitle: "A discovery call notes template built for real sales conversations",
    heroDescription:
      "Keep your team aligned with a simple note structure that helps reps capture the details that matter after every discovery call.",
    intro:
      "If discovery notes are inconsistent, deal quality gets harder to judge. A clean notes template gives reps a reliable structure and helps managers review opportunities faster.",
    benefits: [
      "Capture consistent details across every discovery call.",
      "Make internal reviews and handoffs easier.",
      "Create a better starting point for CRM updates and recap emails.",
    ],
    audiences: ["Sales reps", "Managers doing pipeline reviews", "Founders validating demand"],
    faqs: [
      {
        question: "What should discovery call notes cover?",
        answer:
          "They should cover the buyer's current situation, pain points, goals, blockers, stakeholders, timing, and the agreed next step.",
      },
      {
        question: "Can notes templates help with coaching?",
        answer:
          "Yes. When reps use the same structure, managers can more easily compare calls and spot missing information.",
      },
    ],
    relatedSlugs: ["crm-notes-template", "discovery-call-summary-generator", "how-to-summarize-a-discovery-call"],
  },
  {
    slug: "crm-notes-template",
    category: "templates",
    keyword: "crm notes template",
    title: "CRM Notes Template | Standardize Post-Call Updates",
    description:
      "Use a CRM notes template to standardize call updates, buyer pain points, and next steps so your pipeline stays clear and searchable.",
    heroTitle: "A CRM notes template that keeps pipeline updates consistent",
    heroDescription:
      "Use a simple structure for post-call notes so reps log the details leadership actually needs.",
    intro:
      "The best CRM notes are short, structured, and useful later. This page is built for teams that want a reliable format for call updates without turning note-taking into a second full-time job.",
    benefits: [
      "Improve CRM hygiene without adding extra admin burden.",
      "Create notes that are easier to scan during pipeline reviews.",
      "Help other teammates understand an opportunity quickly.",
    ],
    audiences: ["Revenue teams", "RevOps-minded startups", "Consultants managing multiple accounts"],
    faqs: [
      {
        question: "What are the most important fields in CRM notes?",
        answer:
          "Pain points, decision criteria, current workflow, objections, stakeholders, timing, and next steps are usually the highest-value details to capture.",
      },
      {
        question: "Should CRM notes be long-form?",
        answer:
          "Not usually. Clear structure beats long paragraphs because teams need to scan updates quickly.",
      },
    ],
    relatedSlugs: ["crm-note-generator", "how-to-write-crm-notes-after-a-sales-call", "sales-call-summary-tool"],
  },
  {
    slug: "how-to-write-a-sales-follow-up-email",
    category: "guides",
    keyword: "how to write a sales follow up email",
    title: "How to Write a Sales Follow Up Email After a Call",
    description:
      "Learn how to write a sales follow up email that feels personal, confirms next steps, and keeps the opportunity moving after a buyer conversation.",
    heroTitle: "How to write a sales follow up email without sounding generic",
    heroDescription:
      "Use a simple structure to recap the conversation, reinforce what matters, and make the next step obvious.",
    intro:
      "The best sales follow-up emails are specific, timely, and easy to act on. If your team is losing momentum after calls, tightening this one workflow can have an outsized effect on conversion.",
    benefits: [
      "Learn a repeatable structure reps can follow quickly.",
      "Avoid vague recap emails that do not move the deal forward.",
      "Connect follow-up writing to the actual transcript instead of memory alone.",
    ],
    audiences: ["Reps learning sales basics", "Founders doing customer calls", "Anyone cleaning up a manual follow-up process"],
    faqs: [
      {
        question: "How soon should I send a sales follow-up email?",
        answer:
          "Ideally the same day, while the context is fresh for both sides. Faster follow-up usually means better detail and stronger momentum.",
      },
      {
        question: "Should I include all call details?",
        answer:
          "No. Focus on the buyer's priorities, what you discussed, and the next step. Keep it useful, not exhaustive.",
      },
    ],
    relatedSlugs: ["sales-follow-up-email-template", "sales-follow-up-email-generator", "sales-call-summary-tool"],
  },
  {
    slug: "how-to-summarize-a-discovery-call",
    category: "guides",
    keyword: "how to summarize a discovery call",
    title: "How to Summarize a Discovery Call for Faster Follow-Up",
    description:
      "Learn how to summarize a discovery call by capturing buyer context, pain points, objections, and next steps in a format your team can reuse.",
    heroTitle: "How to summarize a discovery call in a way your team will actually use",
    heroDescription:
      "A useful discovery summary should make the buyer situation obvious and help the next action happen faster.",
    intro:
      "Summaries are only helpful when they are specific enough to be reused. This guide focuses on how to turn a messy conversation into a clean recap that helps with CRM updates, internal handoffs, and follow-up.",
    benefits: [
      "Spot the highest-signal parts of the call quickly.",
      "Create summaries that support email, CRM, and internal sharing.",
      "Avoid generic notes that hide real buyer intent.",
    ],
    audiences: ["AEs", "Revenue leaders", "Startups testing qualification calls"],
    faqs: [
      {
        question: "What should a discovery summary prioritize?",
        answer:
          "It should prioritize the buyer's current process, pain points, desired outcomes, concerns, and next step rather than a play-by-play transcript.",
      },
      {
        question: "Can AI help summarize a discovery call?",
        answer:
          "Yes, especially when you want a first draft that can be reviewed and pasted into a sales workflow quickly.",
      },
    ],
    relatedSlugs: ["discovery-call-summary-generator", "discovery-call-notes-template", "sales-call-summary-tool"],
  },
  {
    slug: "how-to-write-crm-notes-after-a-sales-call",
    category: "guides",
    keyword: "how to write crm notes after a sales call",
    title: "How to Write CRM Notes After a Sales Call",
    description:
      "Learn how to write CRM notes after a sales call so buyer context, pain points, and next steps are easy to review later.",
    heroTitle: "How to write CRM notes after a sales call without wasting time",
    heroDescription:
      "Use a simple framework for turning conversations into clear CRM updates your whole team can understand.",
    intro:
      "Good CRM notes make the deal easier to inspect, not harder. This guide shows how to keep post-call updates concise, structured, and useful for future follow-up, management review, and team handoff.",
    benefits: [
      "Make CRM notes faster to write and easier to scan.",
      "Log high-value details consistently across the team.",
      "Create better records for deal reviews and forecasting.",
    ],
    audiences: ["Founders and closers", "AEs working in HubSpot", "Teams improving CRM discipline"],
    faqs: [
      {
        question: "What mistakes should I avoid in CRM notes?",
        answer:
          "Avoid vague summaries, overlong paragraphs, and skipping next steps. Notes should make it easy for anyone to understand the current opportunity state.",
      },
      {
        question: "Do CRM notes need buyer quotes?",
        answer:
          "Not always, but key phrases and specific objections can be very useful when they affect messaging or deal strategy.",
      },
    ],
    relatedSlugs: ["crm-note-generator", "crm-notes-template", "how-to-summarize-a-discovery-call"],
  },
  {
    slug: "sales-call-summary-tool",
    category: "tools",
    keyword: "sales call summary tool",
    title: "Sales Call Summary Tool | From Transcript to Follow-Up Assets",
    description:
      "Use a sales call summary tool to turn transcripts into summaries, follow-up emails, CRM notes, pain points, objections, and next steps.",
    heroTitle: "A sales call summary tool built for post-call execution",
    heroDescription:
      "Go beyond generic summaries and generate the exact post-call assets sales teams need to keep deals moving.",
    intro:
      "Many tools can summarize a call. Fewer tools help you do the actual work that comes next. This page is for teams that want to turn transcripts into a practical post-call workflow rather than one more block of text.",
    benefits: [
      "Generate summary plus follow-up outputs from one workflow.",
      "Support email, CRM, and internal alignment in one place.",
      "Reduce lag between a call ending and action happening.",
    ],
    audiences: ["Sales teams handling multiple calls a day", "Founder-led GTM motions", "Operators testing AI-assisted workflows"],
    faqs: [
      {
        question: "How is a sales call summary tool different from a generic AI summarizer?",
        answer:
          "A purpose-built tool focuses on sales outputs like follow-up emails, CRM notes, objections, and next steps instead of only giving you a broad recap.",
      },
      {
        question: "Can this help even if my transcript is messy?",
        answer:
          "Yes. Cleaner transcripts help, but even rough call notes can usually be converted into a useful draft for follow-up work.",
      },
    ],
    relatedSlugs: ["discovery-call-summary-generator", "sales-follow-up-email-generator", "crm-note-generator"],
  },
];

export const seoPageMap = Object.fromEntries(seoPages.map((page) => [page.slug, page])) as Record<string, SeoPage>;

export const categoryMeta: Record<SeoPageCategory, { title: string; description: string; intro: string }> = {
  tools: {
    title: "Sales Tools Pages",
    description:
      "Browse sales call follow-up tools for summaries, CRM notes, and post-call email generation.",
    intro:
      "These pages focus on tool-style keywords where visitors want a faster way to turn raw sales conversations into usable outputs.",
  },
  templates: {
    title: "Sales Templates Pages",
    description:
      "Explore templates for follow-up emails, discovery notes, and CRM note structure.",
    intro:
      "These pages target template-driven searches from people who want structure first and automation second.",
  },
  guides: {
    title: "Sales Guides Pages",
    description:
      "Read practical guides on writing follow-up emails, summarizing discovery calls, and documenting CRM notes.",
    intro:
      "These pages answer educational queries and naturally feed readers into the product when they are ready for speed.",
  },
};

export function getPagesByCategory(category: SeoPageCategory) {
  return seoPages.filter((page) => page.category === category);
}
