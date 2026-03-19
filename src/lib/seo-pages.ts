export type SeoPageCategory = "tools" | "templates" | "guides";
export type SeoTopic =
  | "sales-call"
  | "follow-up"
  | "crm-notes"
  | "discovery-call"
  | "objections"
  | "recap"
  | "summary";

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
  topic: SeoTopic;
  featured?: boolean;
  batch?: 1 | 2 | 3 | 4 | 5;
};

const baseSeoPages: SeoPage[] = [
  {
    slug: "sales-follow-up-email-generator",
    category: "tools",
    topic: "follow-up",
    batch: 1,
    featured: true,
    keyword: "sales follow up email generator",
    title: "Sales Follow Up Email Generator | Write Faster After Every Call",
    description:
      "Generate a sales follow up email from your call transcript without rewriting everything by hand. Turn buyer notes into a clear next-step email in minutes.",
    heroTitle: "Write the sales follow-up email while the buyer conversation still feels fresh",
    heroDescription:
      "Paste your call transcript, pull out the buyer's priorities, and turn the conversation into a follow-up email that is clear, specific, and ready to send.",
    intro:
      "Most post-call emails fail for the same reason: they are either too generic to feel useful or too messy to send quickly. A strong sales follow-up email should remind the buyer that you listened, reflect what mattered in the conversation, and make the next step easy to understand. This page is for founders, AEs, and lean teams who want to send better follow-up without losing another 15 minutes after every call.",
    benefits: [
      "Turn raw transcript detail into a buyer-ready email instead of staring at a blank compose window.",
      "Keep follow-up quality consistent across founder-led sales, AEs, and SDR workflows.",
      "Capture agreed next steps before they get lost across notes, tabs, and memory.",
    ],
    audiences: ["Founder-led sales teams", "Small B2B sales teams", "Consultants running discovery calls"],
    faqs: [
      {
        question: "What should a sales follow-up email include?",
        answer:
          "At minimum, it should recap the buyer's priorities, confirm what was discussed, and make the next action obvious. The best follow-up emails sound specific and useful, not like generic templates.",
      },
      {
        question: "Can I use this after a discovery call or demo?",
        answer:
          "Yes. It works especially well after discovery calls, demos, and qualification calls where you need to turn a long conversation into a short external message quickly.",
      },
    ],
    relatedSlugs: ["sales-follow-up-email-template", "how-to-write-a-sales-follow-up-email", "sales-call-summary-tool", "follow-up-email-format", "follow-up-email-tips-after-sales-call"],
  },
  {
    slug: "crm-note-generator",
    category: "tools",
    topic: "crm-notes",
    batch: 1,
    featured: true,
    keyword: "crm note generator",
    title: "CRM Note Generator | Convert Sales Calls Into Structured Notes",
    description:
      "Use a CRM note generator to turn sales call transcripts into structured notes your team can paste into HubSpot or any CRM without rewriting every detail manually.",
    heroTitle: "Generate CRM notes without turning post-call admin into a second job",
    heroDescription:
      "Create CRM-ready notes from discovery calls, demos, and follow-up calls while keeping pipeline records clean and consistent.",
    intro:
      "CRM hygiene usually breaks in the same place: right after the call, when everyone is busy and nobody wants to manually log what happened. A useful CRM note generator should not just summarize the meeting. It should help your team capture deal context in a format that is structured enough for pipeline review, handoff, and forecasting. This page is for teams that care about keeping the CRM useful instead of letting details rot in memory or Slack.",
    benefits: [
      "Create CRM notes with a repeatable structure your team can actually reuse.",
      "Reduce the time reps spend rewriting the same deal context after every call.",
      "Give managers and founders cleaner visibility into what buyers actually said.",
    ],
    audiences: ["HubSpot users", "Revenue teams with strict CRM hygiene", "Founders updating CRM themselves"],
    faqs: [
      {
        question: "Why are structured CRM notes important?",
        answer:
          "Structured notes make forecasting, handoff, and rep review much easier because the important details are logged in the same shape every time instead of hiding in random free text.",
      },
      {
        question: "Does this replace my CRM?",
        answer: "No. It helps you generate cleaner notes faster so your CRM stays updated without forcing reps to do manual admin twice.",
      },
    ],
    relatedSlugs: ["crm-notes-template", "how-to-write-crm-notes-after-a-sales-call", "discovery-call-summary-generator", "crm-notes-example", "how-to-write-crm-notes-for-sales-calls"],
  },
  {
    slug: "discovery-call-summary-generator",
    category: "tools",
    topic: "discovery-call",
    batch: 1,
    featured: true,
    keyword: "discovery call summary generator",
    title: "Discovery Call Summary Generator | Summarize Buyer Calls Fast",
    description:
      "Generate a discovery call summary from your transcript, including buyer pain points, current workflow, objections, and next steps your team can actually use.",
    heroTitle: "Turn messy discovery calls into actionable qualification notes",
    heroDescription:
      "Use one transcript to generate a discovery call summary that captures pain points, current process, blockers, and follow-up actions clearly.",
    intro:
      "Discovery calls are where the real buying context shows up: what is broken, why it matters now, who is involved, and where the deal might stall. The problem is that this information usually gets buried inside long transcripts or fuzzy notes. This page is for teams that want a faster way to turn discovery conversations into qualification-ready summaries that can actually guide follow-up, handoff, and deal progression.",
    benefits: [
      "Surface buyer pain points and current workflow without rereading the full transcript.",
      "Package qualification context for founders, managers, and handoffs.",
      "Reduce the time between discovery call ending and useful follow-up happening.",
    ],
    audiences: ["Account executives", "Sales managers", "Agencies running client qualification calls"],
    faqs: [
      {
        question: "What makes a good discovery call summary?",
        answer:
          "A strong summary should capture goals, current workflow, pain points, blockers, stakeholders, and next steps. The point is to preserve qualification signal, not just create a shorter transcript.",
      },
      {
        question: "Can I use this for internal call reviews?",
        answer:
          "Yes. It works well for coaching, internal recap, and handoff prep because it makes discovery information easier to review than raw call notes.",
      },
    ],
    relatedSlugs: ["how-to-summarize-a-discovery-call", "sales-call-summary-tool", "crm-note-generator", "discovery-call-template-format", "discovery-call-best-practices-for-notes"],
  },
  {
    slug: "sales-call-summary-tool",
    category: "tools",
    topic: "summary",
    batch: 1,
    featured: true,
    keyword: "sales call summary tool",
    title: "Sales Call Summary Tool | From Transcript to Follow-Up Assets",
    description:
      "Use a sales call summary tool to turn transcripts into summaries, follow-up emails, CRM notes, pain points, objections, and next steps without rebuilding everything manually.",
    heroTitle: "A sales call summary tool built for signal, not just shorter text",
    heroDescription:
      "Go beyond generic summaries and generate the exact post-call assets sales teams need to move from conversation to action quickly.",
    intro:
      "Lots of AI tools can summarize a call. Much fewer help you extract the parts that actually matter after the meeting ends. A useful sales call summary tool should reduce transcript noise, keep the high-signal details, and make the next action obvious. This page is for teams that want summaries to feed real post-call execution instead of becoming one more paragraph nobody reuses.",
    benefits: [
      "Generate a summary plus follow-up outputs from one workflow instead of reworking the transcript several times.",
      "Support email, CRM, recap, and internal alignment in one place.",
      "Reduce lag between the call ending and the next action actually happening.",
    ],
    audiences: ["Sales teams handling multiple calls a day", "Founder-led GTM motions", "Operators testing AI-assisted workflows"],
    faqs: [
      {
        question: "How is a sales call summary tool different from a generic AI summarizer?",
        answer:
          "A purpose-built sales summary tool is designed around what happens after the call, including follow-up emails, CRM notes, objections, and next steps, not just a broad recap.",
      },
      {
        question: "Can this help even if my transcript is messy?",
        answer:
          "Yes. Cleaner transcripts help, but even rough notes can usually be turned into a useful summary if the tool is focused on extracting the signal that drives follow-up.",
      },
    ],
    relatedSlugs: ["discovery-call-summary-generator", "sales-follow-up-email-generator", "crm-note-generator", "call-summary-format", "how-to-write-a-call-summary-after-a-sales-call"],
  },
  {
    slug: "sales-call-recap-generator",
    category: "tools",
    topic: "recap",
    batch: 2,
    featured: true,
    keyword: "sales call recap generator",
    title: "Sales Call Recap Generator | Create Fast Buyer Recaps After Calls",
    description:
      "Generate a sales call recap with key points, buyer priorities, blockers, and next steps from one transcript so your team can align faster.",
    heroTitle: "Generate a sales call recap people will actually read and reuse",
    heroDescription:
      "Turn a raw sales transcript into a concise recap you can send, save, or share internally right after the call ends.",
    intro:
      "A recap is often the fastest way to keep internal alignment and buyer momentum alive after a call. The problem is that most recaps are either too vague to help or too long to skim. This page is for teams that want a repeatable way to turn a conversation into a short, usable recap that makes the next move clearer for both buyers and teammates.",
    benefits: [
      "Package the most important call context into a short format that is actually reusable.",
      "Help buyers and teammates align on what happened and what happens next.",
      "Reduce time spent manually rewriting the same notes after every call.",
    ],
    audiences: ["AEs handling multiple demos", "Founders doing sales themselves", "Teams sharing call takeaways internally"],
    faqs: [
      {
        question: "What should a sales call recap include?",
        answer:
          "A useful recap should capture the buyer's priorities, important context, blockers, and agreed next steps. It should be short enough to scan and specific enough to be useful.",
      },
      {
        question: "Is a recap different from a call summary?",
        answer:
          "Yes. They overlap, but a recap usually focuses more on alignment and what happens next, while a summary can be broader and more descriptive.",
      },
    ],
    relatedSlugs: ["sales-call-summary-tool", "sales-call-recap-template", "how-to-write-a-sales-call-recap", "sales-recap-template-example", "sales-call-recap-best-practices"],
  },
  {
    slug: "sales-objection-tracker-ai",
    category: "tools",
    topic: "objections",
    batch: 2,
    keyword: "sales objection tracker ai",
    title: "Sales Objection Tracker AI | Capture Objections From Call Transcripts",
    description:
      "Use AI to extract and organize sales objections from discovery calls, demos, and follow-up calls so teams can improve response quality and coaching.",
    heroTitle: "Track objections automatically instead of losing them inside generic notes",
    heroDescription:
      "Pull out recurring objections, hesitation points, and deal blockers from transcripts without manually reviewing every line.",
    intro:
      "Objections are usually the moments that decide whether a deal moves or stalls, but they often get buried inside general call notes. A useful objection tracker should isolate the exact points buyers pushed back on and make them easier to review, coach, and respond to. This page is for teams that want clearer objection visibility across discovery calls, demos, and follow-up conversations.",
    benefits: [
      "Spot repeated objections across calls before they turn into a hidden pattern.",
      "Create cleaner handoffs for managers, founders, and the next rep touchpoint.",
      "Support better messaging, enablement, and next-step prep with real buyer language.",
    ],
    audiences: ["Sales managers", "Founders refining messaging", "RevOps teams reviewing call quality"],
    faqs: [
      {
        question: "Why track objections separately from a summary?",
        answer:
          "Because objections often drive the deal more than the general recap. Isolating them makes it easier to coach reps, improve messaging, and prepare the next response.",
      },
      {
        question: "Can this work for pricing objections and timeline objections?",
        answer:
          "Yes. The goal is to pull out high-signal concerns whether they are about price, timing, integrations, risk, or internal buy-in.",
      },
    ],
    relatedSlugs: ["objection-handling-template", "how-to-document-sales-objections-after-a-call", "discovery-call-summary-generator", "objection-response-template", "how-to-handle-sales-objections-after-a-call"],
  },
  {
    slug: "follow-up-email-ai-tool",
    category: "tools",
    topic: "follow-up",
    batch: 2,
    keyword: "follow up email ai tool",
    title: "Follow Up Email AI Tool | Generate Better Post-Call Emails Fast",
    description:
      "Use an AI follow up email tool to turn call notes or transcripts into clear, personalized post-call emails without rewriting every detail yourself.",
    heroTitle: "An AI follow-up email tool that helps you move while the deal is still warm",
    heroDescription:
      "Generate a faster first draft for post-call emails while keeping buyer priorities, commitments, and next steps visible.",
    intro:
      "Writing follow-up emails manually after every call creates drag, especially for lean teams juggling several conversations at once. People searching this keyword usually do not want theory. They want software that can turn raw call detail into a sendable message fast. This page is for teams that need AI help with buyer communication, not just another generic writing template.",
    benefits: [
      "Save time on repetitive post-call writing without defaulting to generic copy.",
      "Keep buyer-specific details in the message instead of sending vague recap language.",
      "Support consistent follow-up quality across reps, founders, and consultants.",
    ],
    audiences: ["SMB sales teams", "Founder sellers", "Consultants who need polished recaps fast"],
    faqs: [
      {
        question: "Is this different from a template?",
        answer:
          "Yes. A template gives you a structure, while an AI tool uses transcript details to generate a draft that reflects the actual conversation.",
      },
      {
        question: "Can I edit the output before sending?",
        answer:
          "Absolutely. The best workflow is to generate the draft first, then quickly review tone, details, and next steps before you send it to the buyer.",
      },
    ],
    relatedSlugs: ["sales-follow-up-email-generator", "sales-follow-up-email-template", "how-to-write-a-sales-follow-up-email", "follow-up-email-format", "follow-up-email-tips-after-sales-call"],
  },
  {
    slug: "crm-note-ai-software",
    category: "tools",
    topic: "crm-notes",
    batch: 2,
    keyword: "crm note ai software",
    title: "CRM Note AI Software | Faster Post-Call Logging for Sales Teams",
    description:
      "CRM note AI software helps sales teams convert transcripts into structured CRM-ready updates with less manual admin and better pipeline hygiene.",
    heroTitle: "AI software for CRM notes when your team wants speed without messy records",
    heroDescription:
      "Generate structured notes for HubSpot and other CRM workflows from call transcripts, then move straight into review, handoff, or follow-up.",
    intro:
      "Teams rarely need more generic AI output. They need software that makes CRM hygiene easier while keeping deal context trustworthy. This page is built for high-intent visitors comparing tools that can reduce post-call logging time without turning pipeline notes into low-quality fluff.",
    benefits: [
      "Speed up CRM updates without sacrificing the detail your team actually needs later.",
      "Create a repeatable note structure managers can review quickly.",
      "Reduce missed context between calls, CRM logging, and pipeline reviews.",
    ],
    audiences: ["RevOps-conscious teams", "AEs using HubSpot", "Founders who update CRM personally"],
    faqs: [
      {
        question: "What makes CRM note software useful?",
        answer:
          "The best tools capture deal context in a consistent, scannable format and help the team log notes immediately instead of letting the CRM update slip by for hours.",
      },
      {
        question: "Can I use this if I already have call recording software?",
        answer:
          "Yes. Recording tools capture the conversation. This kind of software helps turn that conversation into a CRM-ready output your team can actually review and reuse.",
      },
    ],
    relatedSlugs: ["crm-note-generator", "crm-notes-template", "how-to-write-crm-notes-after-a-sales-call", "crm-notes-example", "how-to-write-crm-notes-for-sales-calls"],
  },
  {
    slug: "discovery-call-notes-ai",
    category: "tools",
    topic: "discovery-call",
    batch: 2,
    keyword: "discovery call notes ai",
    title: "Discovery Call Notes AI | Turn Buyer Calls Into Structured Notes",
    description:
      "Use AI to convert discovery calls into structured notes covering goals, pain points, objections, stakeholders, and next steps without losing qualification detail.",
    heroTitle: "AI discovery call notes that stay useful after the meeting ends",
    heroDescription:
      "Create a cleaner discovery notes draft from one transcript and stop losing buyer detail between qualification, handoff, and follow-up.",
    intro:
      "Discovery calls generate context that is hard to reconstruct later: current workflow, hidden pains, internal blockers, and who actually influences the decision. This page is for teams looking for AI help with turning a buyer conversation into reusable notes that support qualification, CRM updates, and the next conversation instead of disappearing into raw transcript noise.",
    benefits: [
      "Capture important discovery context while it is still fresh and high signal.",
      "Improve handoff quality across founders, reps, and managers.",
      "Use one transcript to support CRM, recap, follow-up, and qualification tasks.",
    ],
    audiences: ["AEs running qualification calls", "Founders validating demand", "Sales teams building note discipline"],
    faqs: [
      {
        question: "What should discovery notes include?",
        answer:
          "They should include the current process, pain points, goals, blockers, stakeholders, and what both sides agreed to do next, especially the details that affect qualification.",
      },
      {
        question: "Why use AI for discovery notes?",
        answer:
          "It helps create a strong first draft quickly, which matters when you have several calls to process and limited time to manually clean up every qualification note.",
      },
    ],
    relatedSlugs: ["discovery-call-summary-generator", "discovery-call-notes-template", "how-to-summarize-a-discovery-call", "discovery-call-template-format", "discovery-call-best-practices-for-notes"],
  },
  {
    slug: "follow-up-meeting-recap-ai",
    category: "tools",
    topic: "follow-up",
    batch: 3,
    featured: true,
    keyword: "follow up meeting recap ai",
    title: "Follow Up Meeting Recap AI | Turn Calls Into Buyer Recaps Fast",
    description:
      "Use AI to turn a sales conversation into a clean follow up meeting recap with key points, commitments, and next steps buyers can understand quickly.",
    heroTitle: "AI follow-up meeting recap for teams that need clearer post-call communication",
    heroDescription:
      "Generate a concise recap from your call transcript so buyers and teammates leave with the same understanding of what happens next.",
    intro:
      "Many follow-up workflows break because the recap is either written too late or written too vaguely. A useful follow-up meeting recap should reduce confusion, preserve commitments, and help everyone leave the conversation with the same understanding. This page targets teams searching for AI help with recap creation, especially after discovery, demo, and solution calls.",
    benefits: [
      "Convert call transcripts into recap copy faster without losing the important context.",
      "Keep commitments and next steps visible right after the meeting.",
      "Support both buyer-facing communication and internal alignment from the same source material.",
    ],
    audiences: ["Account executives", "Customer-facing founders", "Teams running multi-stakeholder deals"],
    faqs: [
      {
        question: "What is the difference between a recap and a follow-up email?",
        answer:
          "A recap focuses on what happened and what comes next, while a follow-up email may also include persuasion, resources, and broader communication context.",
      },
      {
        question: "Can recap AI still sound personal?",
        answer:
          "Yes. The best workflow is to generate the structure from the transcript first, then lightly edit the tone and buyer-specific details before sending.",
      },
    ],
    relatedSlugs: ["sales-call-recap-generator", "follow-up-email-format", "follow-up-email-tips-after-sales-call", "sales-follow-up-email-generator"],
  },
  {
    slug: "crm-notes-ai-generator",
    category: "tools",
    topic: "crm-notes",
    batch: 3,
    featured: true,
    keyword: "crm notes ai generator",
    title: "CRM Notes AI Generator | Create Structured Sales Notes in Seconds",
    description:
      "Generate structured CRM notes from call transcripts with AI so reps can log updates faster, keep pipeline context clean, and reduce missed details.",
    heroTitle: "A CRM notes AI generator for teams that care about speed and pipeline hygiene",
    heroDescription:
      "Turn a sales call transcript into CRM-ready notes covering context, pain points, objections, and next steps without manual rewriting.",
    intro:
      "This keyword comes from people who already know they want AI help but still care about note quality, structure, and CRM usability. A CRM notes AI generator should do more than compress text. It should help teams log deal context in a format that improves review, handoff, and forecasting. This page fits the CRM-notes cluster for visitors who want faster logging without losing discipline.",
    benefits: [
      "Generate a first draft that reps can review quickly instead of starting from scratch.",
      "Improve consistency across CRM updates and reduce note quality drift.",
      "Reduce lost context between the meeting, the CRM update, and the next pipeline review.",
    ],
    audiences: ["AEs logging every call", "Revenue teams improving note quality", "Founders running lean sales ops"],
    faqs: [
      {
        question: "Should AI-generated CRM notes still be reviewed?",
        answer:
          "Yes. AI should create the draft fast, while the rep confirms accuracy, edits important nuance, and makes sure the CRM record reflects the real deal context.",
      },
      {
        question: "Can this help with HubSpot and Salesforce workflows?",
        answer:
          "Yes. The output is designed to be copied into whichever CRM system your team already uses, especially when you want structured notes instead of random text blocks.",
      },
    ],
    relatedSlugs: ["crm-note-generator", "crm-notes-example", "how-to-write-crm-notes-for-sales-calls", "crm-notes-template"],
  },
  {
    slug: "discovery-call-summary-ai-tool",
    category: "tools",
    topic: "discovery-call",
    batch: 3,
    featured: true,
    keyword: "discovery call summary ai tool",
    title: "Discovery Call Summary AI Tool | Capture Buyer Context Faster",
    description:
      "Use an AI tool to generate discovery call summaries with buyer goals, pain points, objections, stakeholders, and next steps.",
    heroTitle: "An AI tool for discovery call summaries that sales teams can actually reuse",
    heroDescription:
      "Summarize discovery calls into a reusable draft for CRM updates, handoffs, recap emails, and next-step planning.",
    intro:
      "This page goes after software-intent discovery summary queries. It reinforces the product positioning as more than a generic transcript summarizer by tying summaries directly to downstream sales work.",
    benefits: [
      "Create faster post-call summaries for internal teams.",
      "Preserve high-signal buyer context before it fades.",
      "Support recap, CRM, and follow-up workflows from one transcript.",
    ],
    audiences: ["AEs", "Sales managers", "Founders running customer discovery"],
    faqs: [
      {
        question: "What should a discovery summary AI tool extract?",
        answer:
          "It should capture current process, goals, pain points, objections, stakeholders, buying timeline, and the agreed next step.",
      },
      {
        question: "Is this only for early-stage discovery calls?",
        answer:
          "No. It also works well for qualification calls, solution reviews, and any buyer conversation where context needs to be reused quickly.",
      },
    ],
    relatedSlugs: ["discovery-call-summary-generator", "discovery-call-template-format", "discovery-call-best-practices-for-notes", "how-to-summarize-a-discovery-call"],
  },
  {
    slug: "objection-handling-ai-tool",
    category: "tools",
    topic: "objections",
    batch: 3,
    keyword: "objection handling ai tool",
    title: "Objection Handling AI Tool | Organize Buyer Pushback After Calls",
    description:
      "Use an objection handling AI tool to extract buyer pushback, identify likely root concerns, and plan stronger follow-up responses.",
    heroTitle: "An AI tool for objection handling that starts with real call evidence",
    heroDescription:
      "Turn raw transcript moments into structured objection notes your team can use for coaching, messaging, and deal strategy.",
    intro:
      "Buyers rarely state objections in a neat format. This page targets visitors who want software help identifying and structuring objection data from sales conversations rather than relying on memory.",
    benefits: [
      "Turn vague pushback into a structured objection log.",
      "Help reps prep stronger follow-up responses.",
      "Create a reusable signal source for sales coaching and messaging updates.",
    ],
    audiences: ["Sales managers", "Enablement leads", "Founders refining pitch and positioning"],
    faqs: [
      {
        question: "Can AI understand hidden objections?",
        answer:
          "It can often surface likely concerns and hesitation patterns from the transcript, but teams should still review important strategic calls manually.",
      },
      {
        question: "Does objection handling start after the call?",
        answer:
          "The response begins during the call, but clean objection documentation after the call makes next-step messaging much stronger.",
      },
    ],
    relatedSlugs: ["sales-objection-tracker-ai", "objection-response-template", "how-to-handle-sales-objections-after-a-call", "objection-handling-template"],
  },
  {
    slug: "sales-call-recap-software",
    category: "tools",
    topic: "recap",
    batch: 3,
    keyword: "sales call recap software",
    title: "Sales Call Recap Software | Faster Recaps for Teams and Buyers",
    description:
      "Use sales call recap software to turn transcripts into concise recaps with key takeaways, blockers, and next steps.",
    heroTitle: "Sales call recap software for teams that want cleaner communication after every meeting",
    heroDescription:
      "Generate a recap draft from your transcript so follow-up happens faster and internal alignment stays tight.",
    intro:
      "This software-intent page sits between recap education and product evaluation. It helps capture searchers who are ready to compare tools for recap generation, especially when manual post-call writing is slowing the team down.",
    benefits: [
      "Shorten the gap between call end and recap delivery.",
      "Make buyer and team alignment easier to maintain.",
      "Create reusable recap structure without extra manual admin.",
    ],
    audiences: ["Sales teams sending frequent recaps", "Founders handling complex deals", "Customer-facing operators"],
    faqs: [
      {
        question: "What makes recap software useful?",
        answer:
          "Useful recap software makes the output concise, specific, and easy to reuse in follow-up emails, shared docs, and CRM notes.",
      },
      {
        question: "Should recap software replace human review?",
        answer:
          "No. It should remove most of the blank-page work, then leave a short review step before sharing the recap externally.",
      },
    ],
    relatedSlugs: ["sales-call-recap-generator", "sales-recap-template-example", "sales-call-recap-best-practices", "sales-call-recap-template"],
  },
  {
    slug: "call-summary-generator-ai",
    category: "tools",
    topic: "summary",
    batch: 3,
    keyword: "call summary generator ai",
    title: "Call Summary Generator AI | Turn Sales Calls Into Actionable Summaries",
    description:
      "Generate action-ready call summaries with AI, including main takeaways, objections, next steps, and follow-up context.",
    heroTitle: "A call summary generator AI for teams that need more than generic notes",
    heroDescription:
      "Use AI to turn raw conversations into concise summaries that feed CRM updates, follow-up messages, and internal handoffs.",
    intro:
      "Generic call-summary searches often still carry strong commercial intent. This page captures that search behavior while reinforcing the product's core differentiation: summaries that connect directly to follow-up execution.",
    benefits: [
      "Create summaries faster from messy transcripts.",
      "Keep the most important takeaways visible for the team.",
      "Bridge summary intent into recap, CRM, and follow-up workflows.",
    ],
    audiences: ["AEs", "Sales leaders", "Founders juggling many buyer calls"],
    faqs: [
      {
        question: "What should an AI call summary include?",
        answer:
          "At minimum, it should include the main context, buyer priorities, concerns, open questions, and the next agreed action.",
      },
      {
        question: "Can a call summary generator support internal handoffs?",
        answer:
          "Yes. A structured summary is one of the fastest ways to help another teammate understand the conversation without reading the full transcript.",
      },
    ],
    relatedSlugs: ["sales-call-summary-tool", "call-summary-format", "how-to-write-a-call-summary-after-a-sales-call", "sales-call-summary-best-practices"],
  },
  {
    slug: "sales-follow-up-email-template",
    category: "templates",
    topic: "follow-up",
    batch: 1,
    featured: true,
    keyword: "sales follow up email template",
    title: "Sales Follow Up Email Template | Simple Post-Call Structure",
    description:
      "Use this sales follow up email template to recap the conversation, confirm priorities, and keep momentum after discovery calls and demos without sounding generic.",
    heroTitle: "A practical sales follow up email template you can adapt fast",
    heroDescription:
      "Start with a proven structure, then tailor the details using the transcript from your latest sales call.",
    intro:
      "Templates save time, but only if they still sound human. A useful sales follow-up email template should give you structure without making every buyer message feel copied and pasted. This page gives you a practical post-call format so you can move faster, keep priorities clear, and still sound like you listened during the conversation.",
    benefits: [
      "Use a repeatable structure across the team without forcing identical wording.",
      "Reduce time spent drafting follow-up from scratch after every call.",
      "Keep next steps visible, specific, and easy for the buyer to react to.",
    ],
    audiences: ["Solo founders", "Early-stage sales hires", "Teams standardizing outbound and follow-up"],
    faqs: [
      {
        question: "When should I use a template instead of a generator?",
        answer:
          "Templates are useful when you want a repeatable structure with more manual control. A generator becomes useful when you want the actual call details woven into that structure automatically.",
      },
      {
        question: "How long should a follow-up email be?",
        answer:
          "Usually short to medium length works best: a clear recap, buyer priorities, and next steps without turning the email into a long meeting transcript.",
      },
    ],
    relatedSlugs: ["sales-follow-up-email-generator", "how-to-write-a-sales-follow-up-email", "discovery-call-notes-template", "follow-up-email-format", "follow-up-email-tips-after-sales-call"],
  },
  {
    slug: "discovery-call-notes-template",
    category: "templates",
    topic: "discovery-call",
    batch: 1,
    featured: true,
    keyword: "discovery call notes template",
    title: "Discovery Call Notes Template | Capture the Right Sales Details",
    description:
      "Use this discovery call notes template to capture pains, budget context, current workflow, objections, and next steps after every buyer conversation in a reusable format.",
    heroTitle: "A discovery call notes template built for real sales conversations",
    heroDescription:
      "Keep your team aligned with a simple note structure that helps reps capture the details that matter after every discovery call.",
    intro:
      "If discovery notes are inconsistent, deal quality gets harder to judge. A clean notes template gives reps a reliable structure, helps managers review opportunities faster, and makes qualification signal easier to compare across calls. This page is for teams that want discovery notes to be useful in CRM updates, internal handoff, and follow-up planning instead of living as random free text.",
    benefits: [
      "Capture consistent details across every discovery call instead of relying on memory.",
      "Make internal reviews and handoffs easier once the call is over.",
      "Create a better starting point for CRM updates, recaps, and qualification notes.",
    ],
    audiences: ["Sales reps", "Managers doing pipeline reviews", "Founders validating demand"],
    faqs: [
      {
        question: "What should discovery call notes cover?",
        answer:
          "They should cover the buyer's current situation, pain points, goals, blockers, stakeholders, timing, and the agreed next step so the team can evaluate qualification clearly.",
      },
      {
        question: "Can notes templates help with coaching?",
        answer:
          "Yes. When reps use the same structure, managers can compare calls more easily, spot missing information, and coach around qualification quality.",
      },
    ],
    relatedSlugs: ["crm-notes-template", "discovery-call-summary-generator", "how-to-summarize-a-discovery-call", "discovery-call-template-format", "discovery-call-best-practices-for-notes"],
  },
  {
    slug: "crm-notes-template",
    category: "templates",
    topic: "crm-notes",
    batch: 1,
    featured: true,
    keyword: "crm notes template",
    title: "CRM Notes Template | Standardize Post-Call Updates",
    description:
      "Use a CRM notes template to standardize call updates, buyer pain points, and next steps so your pipeline stays clear, consistent, and searchable.",
    heroTitle: "A CRM notes template that keeps pipeline updates consistent",
    heroDescription:
      "Use a simple structure for post-call notes so reps log the details leadership actually needs.",
    intro:
      "The best CRM notes are short, structured, and still useful later. A strong template should make it easier for reps to log what matters without adding more admin drag, while also helping managers review opportunities faster. This page is built for teams that want a reliable default format for call updates instead of hoping everyone writes notes the same way.",
    benefits: [
      "Improve CRM hygiene without adding unnecessary extra admin burden.",
      "Create notes that are easier to scan during pipeline reviews and handoffs.",
      "Help teammates understand an opportunity quickly without rereading the full transcript.",
    ],
    audiences: ["Revenue teams", "RevOps-minded startups", "Consultants managing multiple accounts"],
    faqs: [
      {
        question: "What are the most important fields in CRM notes?",
        answer:
          "Pain points, decision criteria, current workflow, objections, stakeholders, timing, and next steps are usually the highest-value details to capture because they drive follow-up and pipeline review.",
      },
      {
        question: "Should CRM notes be long-form?",
        answer:
          "Usually no. Clear structure beats long paragraphs because teams need to scan updates quickly and still understand what changed in the deal.",
      },
    ],
    relatedSlugs: ["crm-note-generator", "how-to-write-crm-notes-after-a-sales-call", "sales-call-summary-tool", "crm-notes-example", "how-to-write-crm-notes-for-sales-calls"],
  },
  {
    slug: "sales-call-recap-template",
    category: "templates",
    topic: "recap",
    batch: 2,
    featured: true,
    keyword: "sales call recap template",
    title: "Sales Call Recap Template | A Clear Format for Post-Call Recaps",
    description:
      "Use this sales call recap template to organize buyer context, takeaways, blockers, and next steps after discovery calls or demos in a format people will actually read.",
    heroTitle: "A sales call recap template you can reuse after every important conversation",
    heroDescription:
      "Start with a clear recap structure, then fill it with call-specific detail from your transcript or notes.",
    intro:
      "A strong recap helps both internal teams and buyers remember what mattered. The best recap templates keep the message short, useful, and easy to act on instead of turning into a second transcript. This page is for teams that want a repeatable structure for post-call alignment without improvising after every conversation.",
    benefits: [
      "Keep recaps concise and easy to scan even when the conversation was complex.",
      "Reduce missed follow-up details after important calls.",
      "Create a stronger bridge from conversation to action and next-step clarity.",
    ],
    audiences: ["AEs", "Customer-facing founders", "Teams that share post-call recaps internally"],
    faqs: [
      {
        question: "When should I use a recap template?",
        answer:
          "Use it when you want a consistent structure for communicating what happened and what comes next after a call, especially when the recap needs to be shared quickly.",
      },
      {
        question: "Should a recap include objections?",
        answer:
          "Yes, especially when those objections affect follow-up strategy, internal alignment, or next-meeting prep.",
      },
    ],
    relatedSlugs: ["sales-call-recap-generator", "how-to-write-a-sales-call-recap", "sales-call-summary-tool", "sales-recap-template-example", "sales-call-recap-best-practices"],
  },
  {
    slug: "objection-handling-template",
    category: "templates",
    topic: "objections",
    batch: 2,
    keyword: "objection handling template",
    title: "Objection Handling Template | Capture Buyer Pushback After Sales Calls",
    description:
      "Use an objection handling template to organize buyer objections, likely root causes, response angles, and next-step follow-up more clearly.",
    heroTitle: "A practical objection handling template for post-call review",
    heroDescription:
      "Turn messy call feedback into a simple structure your team can use for coaching, messaging, and deal strategy.",
    intro:
      "After a call, objections often get remembered loosely and responded to inconsistently. A good objection handling template should help you separate the exact pushback from the deeper concern behind it, then turn that into a better response plan. This page is for teams that want a practical format for logging objections instead of treating them as vague memory.",
    benefits: [
      "Keep recurring objections visible across deals instead of letting them disappear inside generic notes.",
      "Support coaching and messaging refinement using clearer patterns.",
      "Create better prep for the next buyer conversation.",
    ],
    audiences: ["Sales managers", "Founders refining positioning", "Reps handling complex objections"],
    faqs: [
      {
        question: "What should go into an objection handling template?",
        answer:
          "The objection itself, what triggered it, the likely root concern, your response angle, and the next follow-up action are usually the most useful fields.",
      },
      {
        question: "Can this be used after discovery calls?",
        answer:
          "Yes. Discovery calls are often where the most valuable objections first appear, so a clear template helps preserve that signal early.",
      },
    ],
    relatedSlugs: ["sales-objection-tracker-ai", "how-to-document-sales-objections-after-a-call", "discovery-call-summary-generator", "objection-response-template", "how-to-handle-sales-objections-after-a-call"],
  },
  {
    slug: "crm-note-format",
    category: "templates",
    topic: "crm-notes",
    batch: 2,
    keyword: "crm note format",
    title: "CRM Note Format | A Simple Structure for Better Sales Updates",
    description:
      "Learn a practical CRM note format for logging call context, pain points, decision criteria, objections, and next steps.",
    heroTitle: "A CRM note format that makes updates easier to scan later",
    heroDescription:
      "Use a repeatable structure for CRM notes so every post-call update is concise, useful, and consistent.",
    intro:
      "Sometimes the issue is not whether reps take notes, but whether anyone can understand them later. This page targets people searching for the right note format before they adopt a tool or generator.",
    benefits: [
      "Make notes more useful during deal reviews.",
      "Reduce random freeform logging across the team.",
      "Create a better input format for AI-generated CRM notes too.",
    ],
    audiences: ["AEs", "RevOps teams", "Founders building sales process from scratch"],
    faqs: [
      {
        question: "What is the best CRM note format?",
        answer:
          "The best format is short, structured, and consistent. It should highlight pain points, goals, objections, stakeholders, timing, and next steps clearly.",
      },
      {
        question: "Should I use headings or bullets?",
        answer:
          "Usually yes. Bullets and clear sections make notes much easier to scan than one long paragraph.",
      },
    ],
    relatedSlugs: ["crm-notes-template", "crm-note-generator", "how-to-write-crm-notes-after-a-sales-call", "crm-notes-example", "how-to-write-crm-notes-for-sales-calls"],
  },
  {
    slug: "discovery-call-summary-example",
    category: "templates",
    topic: "summary",
    batch: 2,
    keyword: "discovery call summary example",
    title: "Discovery Call Summary Example | What a Good Post-Call Summary Looks Like",
    description:
      "Review a discovery call summary example to see how buyer goals, pain points, objections, and next steps can be captured clearly.",
    heroTitle: "A discovery call summary example teams can model and reuse",
    heroDescription:
      "Use a concrete example to understand what a useful post-call summary should actually include.",
    intro:
      "Example-driven searches usually come from people trying to sanity-check their structure fast. This page helps them see what good looks like before moving into a template or AI workflow.",
    benefits: [
      "Show teams what strong summary quality looks like.",
      "Create a benchmark for manual or AI-generated summaries.",
      "Bridge educational intent into a more scalable workflow.",
    ],
    audiences: ["Reps learning post-call workflow", "Founders training first sales hires", "Teams improving note quality"],
    faqs: [
      {
        question: "Why look for an example instead of a template?",
        answer:
          "Examples make the expected level of specificity more obvious. Templates give you the structure, but examples show the quality bar.",
      },
      {
        question: "Should examples include next steps?",
        answer:
          "Yes. A strong summary should always make the next action and buyer context easy to understand.",
      },
    ],
    relatedSlugs: ["how-to-summarize-a-discovery-call", "discovery-call-notes-template", "discovery-call-summary-generator", "call-summary-format", "how-to-write-a-call-summary-after-a-sales-call"],
  },
  {
    slug: "follow-up-email-format",
    category: "templates",
    topic: "follow-up",
    batch: 3,
    featured: true,
    keyword: "follow up email format",
    title: "Follow Up Email Format | A Clear Structure for Sales Follow-Up",
    description:
      "Use a simple follow up email format after sales calls to recap buyer priorities, confirm next steps, and keep the conversation moving.",
    heroTitle: "A follow-up email format that keeps post-call writing clean and easy",
    heroDescription:
      "Start with a simple structure for recap, action items, and the next step instead of drafting every follow-up from scratch.",
    intro:
      "Some searchers want the structure before they want automation. This page targets format-intent searches and acts as a strong bridge into both the template cluster and the product workflow.",
    benefits: [
      "Give reps a reliable follow-up shape to reuse.",
      "Make buyer priorities and next actions easier to surface.",
      "Create a strong entry page into follow-up tools and guides.",
    ],
    audiences: ["SDRs", "AEs", "Founders writing their own follow-up emails"],
    faqs: [
      {
        question: "What sections should a follow-up email format include?",
        answer:
          "A short thank-you, the core recap, the buyer's priorities or blockers, and a clear next step are usually enough.",
      },
      {
        question: "Should follow-up email format change by call type?",
        answer:
          "Yes. Discovery, demo, and pricing calls often need slightly different emphasis, but the structure can stay largely the same.",
      },
    ],
    relatedSlugs: ["sales-follow-up-email-template", "sales-follow-up-email-generator", "follow-up-email-tips-after-sales-call", "follow-up-meeting-recap-ai"],
  },
  {
    slug: "crm-notes-example",
    category: "templates",
    topic: "crm-notes",
    batch: 3,
    featured: true,
    keyword: "crm notes example",
    title: "CRM Notes Example | What Good Sales Call Notes Look Like",
    description:
      "Review a CRM notes example to see how buyer context, pain points, objections, and next steps can be logged clearly after a sales call.",
    heroTitle: "A CRM notes example that shows the right level of detail",
    heroDescription:
      "Use a concrete example to understand what clean, useful post-call CRM notes should actually capture.",
    intro:
      "Example-intent keywords are useful because they help visitors self-educate quickly, then move naturally into templates or generators. This page strengthens the CRM-notes cluster with a strong mid-funnel entry point.",
    benefits: [
      "Show teams what good CRM note quality looks like.",
      "Create a benchmark for both manual notes and AI-generated drafts.",
      "Bridge readers into templates, formats, and tools.",
    ],
    audiences: ["New reps", "Founders building basic sales process", "Managers improving note quality"],
    faqs: [
      {
        question: "What makes a CRM notes example useful?",
        answer:
          "It should show enough specificity that a reader can understand the buyer situation, objection areas, and next step without seeing the full transcript.",
      },
      {
        question: "Should CRM note examples be short or detailed?",
        answer:
          "Usually concise but specific works best. The note should stay scannable while still preserving the decision-relevant details.",
      },
    ],
    relatedSlugs: ["crm-notes-template", "crm-notes-ai-generator", "how-to-write-crm-notes-for-sales-calls", "crm-note-format"],
  },
  {
    slug: "discovery-call-template-format",
    category: "templates",
    topic: "discovery-call",
    batch: 3,
    featured: true,
    keyword: "discovery call template format",
    title: "Discovery Call Template Format | Structure Notes and Summaries Better",
    description:
      "Use a discovery call template format to capture buyer situation, pain points, stakeholders, objections, and next steps consistently.",
    heroTitle: "A discovery call template format that keeps post-call notes organized",
    heroDescription:
      "Use a simple structure to capture the details from discovery calls that matter for qualification, follow-up, and internal review.",
    intro:
      "This page covers format-intent discovery searches and gives the cluster a stronger bridge between educational content and AI-tool content. It is useful for people trying to standardize discovery workflows before scaling them.",
    benefits: [
      "Standardize discovery call capture across the team.",
      "Make follow-up and handoff faster after every call.",
      "Create a better structure for AI-assisted summaries and notes.",
    ],
    audiences: ["AEs", "Sales managers", "Founders doing customer discovery"],
    faqs: [
      {
        question: "What should a discovery call template format include?",
        answer:
          "Include the current process, goals, pain points, stakeholders, objections, timeline, and the next agreed step.",
      },
      {
        question: "Is format different from a template?",
        answer:
          "They overlap, but format-focused searches usually want the shape and sections first, while a template may provide more direct fill-in wording.",
      },
    ],
    relatedSlugs: ["discovery-call-notes-template", "discovery-call-summary-ai-tool", "discovery-call-best-practices-for-notes", "how-to-summarize-a-discovery-call"],
  },
  {
    slug: "objection-response-template",
    category: "templates",
    topic: "objections",
    batch: 3,
    keyword: "objection response template",
    title: "Objection Response Template | Structure Better Follow-Up to Buyer Pushback",
    description:
      "Use an objection response template to capture the buyer concern, likely root issue, response angle, and next follow-up action.",
    heroTitle: "An objection response template that helps teams turn pushback into cleaner follow-up",
    heroDescription:
      "Use a simple structure to document the objection, frame your response, and prepare the next conversation with more confidence.",
    intro:
      "Not every objection should be handled off the cuff. This page targets visitors who want a repeatable way to respond after the call and feeds naturally into objection-documentation and AI-tool pages.",
    benefits: [
      "Standardize how reps document and respond to objections.",
      "Help teams separate surface pushback from root concern.",
      "Improve follow-up prep for the next conversation.",
    ],
    audiences: ["AEs", "Sales enablement teams", "Founders refining objection handling"],
    faqs: [
      {
        question: "What should an objection response template include?",
        answer:
          "The buyer concern, likely underlying issue, your response angle, proof or context to send, and the next follow-up step are the most useful parts.",
      },
      {
        question: "Is this the same as a call script?",
        answer:
          "No. This is more useful after the call, when the team is documenting the objection and planning how to respond next.",
      },
    ],
    relatedSlugs: ["objection-handling-template", "objection-handling-ai-tool", "how-to-handle-sales-objections-after-a-call", "sales-objection-tracker-ai"],
  },
  {
    slug: "sales-recap-template-example",
    category: "templates",
    topic: "recap",
    batch: 3,
    keyword: "sales recap template example",
    title: "Sales Recap Template Example | Model a Better Post-Call Recap",
    description:
      "Review a sales recap template example to see how key takeaways, blockers, and next steps can be organized after a sales call.",
    heroTitle: "A sales recap template example that shows what a useful recap really looks like",
    heroDescription:
      "Use a real-world recap example to benchmark your own post-call communication and tighten the way your team summarizes conversations.",
    intro:
      "Example-driven recap searches are a nice mid-funnel SEO entry point. This page helps visitors see what good looks like, then moves them into templates, best-practice guides, and recap software pages.",
    benefits: [
      "Show the level of detail a recap should include.",
      "Help teams improve recap clarity and consistency.",
      "Bridge recap education into recap tools and templates.",
    ],
    audiences: ["Reps sending recaps", "Founders closing early deals", "Managers reviewing communication quality"],
    faqs: [
      {
        question: "Why use an example for sales recaps?",
        answer:
          "Examples make the quality standard obvious. They show how short, specific, and action-oriented a recap should be.",
      },
      {
        question: "Should recap examples include next steps and blockers?",
        answer:
          "Yes. Those are often the highest-signal parts of the recap because they determine what happens after the call.",
      },
    ],
    relatedSlugs: ["sales-call-recap-template", "sales-call-recap-software", "sales-call-recap-best-practices", "sales-call-recap-generator"],
  },
  {
    slug: "call-summary-format",
    category: "templates",
    topic: "summary",
    batch: 3,
    keyword: "call summary format",
    title: "Call Summary Format | A Better Structure for Sales Call Summaries",
    description:
      "Use a call summary format to organize takeaways, buyer priorities, objections, and next steps into a concise post-call summary.",
    heroTitle: "A call summary format that makes summaries easier to read and reuse",
    heroDescription:
      "Use a structured summary format so teams can move from transcript to action without getting lost in long notes.",
    intro:
      "Format-intent summary searches are useful because they sit between education and tooling. This page gives the summary cluster another strong internal-linking node and supports broader call-summary keyword coverage.",
    benefits: [
      "Give summaries a repeatable shape that scales across the team.",
      "Make post-call notes more readable during reviews and handoffs.",
      "Create better input structure for AI-generated summaries too.",
    ],
    audiences: ["AEs", "Sales leaders", "Operators managing high call volume"],
    faqs: [
      {
        question: "What is the best format for a sales call summary?",
        answer:
          "Usually a short context section, key takeaways, buyer needs or objections, and a clear next-step section works best.",
      },
      {
        question: "Should call summary format vary by team?",
        answer:
          "Yes, but the core structure should stay consistent enough that anyone on the team can scan and understand the note quickly.",
      },
    ],
    relatedSlugs: ["sales-call-summary-tool", "call-summary-generator-ai", "how-to-write-a-call-summary-after-a-sales-call", "discovery-call-summary-example"],
  },
  {
    slug: "how-to-write-a-sales-follow-up-email",
    category: "guides",
    topic: "follow-up",
    batch: 1,
    featured: true,
    keyword: "how to write a sales follow up email",
    title: "How to Write a Sales Follow Up Email After a Call",
    description:
      "Learn how to write a sales follow up email that feels personal, confirms next steps, and keeps the opportunity moving after a buyer conversation.",
    heroTitle: "How to write a sales follow up email without sounding generic",
    heroDescription:
      "Use a simple structure to recap the conversation, reinforce what matters, and make the next step obvious.",
    intro:
      "The best sales follow-up emails are specific, timely, and easy to act on. Most weak follow-ups fail because they either sound too generic or make the buyer work too hard to remember what matters. If your team is losing momentum after calls, improving this one workflow can have an outsized effect on reply rates and deal movement.",
    benefits: [
      "Learn a repeatable structure reps can follow quickly after a call.",
      "Avoid vague recap emails that do not move the deal forward.",
      "Connect follow-up writing to the actual transcript instead of memory alone.",
    ],
    audiences: ["Reps learning sales basics", "Founders doing customer calls", "Anyone cleaning up a manual follow-up process"],
    faqs: [
      {
        question: "How soon should I send a sales follow-up email?",
        answer:
          "Ideally the same day, while the context is still fresh for both sides. Faster follow-up usually means better detail and stronger buyer momentum.",
      },
      {
        question: "Should I include all call details?",
        answer:
          "No. Focus on the buyer's priorities, what you discussed, and the next step. The point is to be useful and clear, not exhaustive.",
      },
    ],
    relatedSlugs: ["sales-follow-up-email-template", "sales-follow-up-email-generator", "sales-call-summary-tool", "follow-up-email-format", "follow-up-email-tips-after-sales-call"],
  },
  {
    slug: "how-to-summarize-a-discovery-call",
    category: "guides",
    topic: "discovery-call",
    batch: 1,
    featured: true,
    keyword: "how to summarize a discovery call",
    title: "How to Summarize a Discovery Call for Faster Follow-Up",
    description:
      "Learn how to summarize a discovery call by capturing buyer context, pain points, objections, and next steps in a format your team can reuse.",
    heroTitle: "How to summarize a discovery call in a way your team will actually use",
    heroDescription:
      "A useful discovery summary should make the buyer situation obvious and help the next action happen faster.",
    intro:
      "Summaries are only helpful when they are specific enough to be reused. Discovery conversations usually contain the raw material for qualification: current workflow, pain points, blockers, stakeholders, and urgency. This guide focuses on how to turn that messy conversation into a clean summary that supports CRM updates, internal handoff, and the next follow-up step.",
    benefits: [
      "Spot the highest-signal parts of the call quickly instead of re-reading everything.",
      "Create summaries that support email, CRM, and internal sharing.",
      "Avoid generic notes that hide the buyer's real intent and blockers.",
    ],
    audiences: ["AEs", "Revenue leaders", "Startups testing qualification calls"],
    faqs: [
      {
        question: "What should a discovery summary prioritize?",
        answer:
          "It should prioritize the buyer's current process, pain points, desired outcomes, concerns, stakeholders, and next step instead of turning into a play-by-play transcript.",
      },
      {
        question: "Can AI help summarize a discovery call?",
        answer:
          "Yes, especially when you want a first draft quickly. AI is useful when it helps you extract qualification signal and then turn it into something the team can actually use.",
      },
    ],
    relatedSlugs: ["discovery-call-summary-generator", "discovery-call-notes-template", "sales-call-summary-tool", "discovery-call-template-format", "discovery-call-best-practices-for-notes"],
  },
  {
    slug: "how-to-write-crm-notes-after-a-sales-call",
    category: "guides",
    topic: "crm-notes",
    batch: 1,
    featured: true,
    keyword: "how to write crm notes after a sales call",
    title: "How to Write CRM Notes After a Sales Call",
    description:
      "Learn how to write CRM notes after a sales call so buyer context, pain points, and next steps are easy to review later.",
    heroTitle: "How to write CRM notes after a sales call without wasting time",
    heroDescription:
      "Use a simple framework for turning conversations into clear CRM updates your whole team can understand.",
    intro:
      "Good CRM notes make the deal easier to inspect, not harder. The goal is not to save every sentence from the conversation. The goal is to capture the few details that matter for follow-up, pipeline review, and handoff. This guide shows how to keep post-call updates concise, structured, and still useful when someone revisits the opportunity later.",
    benefits: [
      "Make CRM notes faster to write and easier to scan later.",
      "Log high-value details consistently across the team instead of relying on memory.",
      "Create better records for deal reviews, handoff, and forecasting.",
    ],
    audiences: ["Founders and closers", "AEs working in HubSpot", "Teams improving CRM discipline"],
    faqs: [
      {
        question: "What mistakes should I avoid in CRM notes?",
        answer:
          "Avoid vague summaries, overlong paragraphs, and missing next steps. Notes should make it easy for anyone to understand the current opportunity state quickly.",
      },
      {
        question: "Do CRM notes need buyer quotes?",
        answer:
          "Not always, but a few important phrases or objections can be very useful when they affect positioning, deal strategy, or future follow-up.",
      },
    ],
    relatedSlugs: ["crm-note-generator", "crm-notes-template", "how-to-summarize-a-discovery-call", "crm-notes-example", "how-to-write-crm-notes-for-sales-calls"],
  },
  {
    slug: "how-to-write-a-sales-call-recap",
    category: "guides",
    topic: "recap",
    batch: 2,
    featured: true,
    keyword: "how to write a sales call recap",
    title: "How to Write a Sales Call Recap That Drives Next Steps",
    description:
      "Learn how to write a sales call recap that highlights buyer priorities, blockers, and next steps without sounding bloated or generic.",
    heroTitle: "How to write a sales call recap people actually read",
    heroDescription:
      "Use a simple recap framework to turn any call into a useful summary for buyers or internal teams.",
    intro:
      "A recap should reduce confusion, not add more text. The best sales call recaps help the reader understand what matters, what changed, and what needs to happen next in under a minute. This guide is for teams that want a tighter way to communicate the outcome of a call instead of sending bloated post-meeting notes nobody acts on.",
    benefits: [
      "Make recaps shorter, clearer, and more useful.",
      "Clarify next steps before momentum fades after the meeting.",
      "Connect recap writing to a repeatable workflow instead of ad hoc memory.",
    ],
    audiences: ["AEs", "Founders", "Anyone sending post-call recap emails or notes"],
    faqs: [
      {
        question: "Who should receive a sales call recap?",
        answer:
          "Often both the buyer and internal teammates benefit, but the exact format may differ depending on the audience, deal stage, and whether the recap is external or internal.",
      },
      {
        question: "How long should a call recap be?",
        answer:
          "Long enough to capture the real signal, short enough that the reader can understand it quickly. Most strong recaps are more compact than people expect.",
      },
    ],
    relatedSlugs: ["sales-call-recap-template", "sales-call-recap-generator", "sales-follow-up-email-generator", "sales-recap-template-example", "sales-call-recap-best-practices"],
  },
  {
    slug: "how-to-document-sales-objections-after-a-call",
    category: "guides",
    topic: "objections",
    batch: 2,
    keyword: "how to document sales objections after a call",
    title: "How to Document Sales Objections After a Call",
    description:
      "Learn how to document sales objections after a call so the team can improve messaging, prep better follow-up, and coach more effectively.",
    heroTitle: "How to document sales objections without losing the real buyer signal",
    heroDescription:
      "Use a structured approach to capture objections, the context behind them, and what should happen next.",
    intro:
      "Objections are one of the most valuable parts of a sales conversation, but they often get reduced to a vague memory or a lazy one-line note. The useful part is not only what the buyer objected to, but why it came up and how it should affect the next response. This guide is for teams that want to log objections clearly enough to improve follow-up, coaching, and message refinement.",
    benefits: [
      "Make objections easier to review and compare later.",
      "Support coaching and positioning improvements with better source detail.",
      "Preserve the context behind pushback, not just the surface wording.",
    ],
    audiences: ["Sales leaders", "Founders iterating on messaging", "AEs managing complex deals"],
    faqs: [
      {
        question: "What makes objection notes useful?",
        answer:
          "Useful objection notes capture the exact concern, why it came up, how the rep responded, and what future follow-up should address next.",
      },
      {
        question: "Should objections live in the CRM note or separately?",
        answer:
          "They can live in both, but a clearly marked objection section makes them much easier to analyze across calls and easier to use for coaching.",
      },
    ],
    relatedSlugs: ["sales-objection-tracker-ai", "objection-handling-template", "crm-note-generator", "objection-response-template", "how-to-handle-sales-objections-after-a-call"],
  },
  {
    slug: "sales-call-summary-best-practices",
    category: "guides",
    topic: "summary",
    batch: 2,
    keyword: "sales call summary best practices",
    title: "Sales Call Summary Best Practices | How to Create Better Post-Call Summaries",
    description:
      "Learn sales call summary best practices for capturing buyer context, keeping summaries concise, and turning conversations into action.",
    heroTitle: "Sales call summary best practices for teams that want usable notes",
    heroDescription:
      "Create better post-call summaries by focusing on high-signal context, clear structure, and action-ready outputs.",
    intro:
      "Most weak summaries fail for the same reasons: they are too vague, too long, or disconnected from what needs to happen next. This guide helps teams improve summary quality with repeatable best practices.",
    benefits: [
      "Improve summary clarity without making notes longer.",
      "Standardize what good looks like across the team.",
      "Create stronger handoffs into CRM, email, and next-call prep.",
    ],
    audiences: ["Sales teams", "Managers reviewing call quality", "Founders building sales process"],
    faqs: [
      {
        question: "What is the biggest mistake in call summaries?",
        answer:
          "The biggest mistake is writing a generic recap that misses the buyer's actual priorities, blockers, and next step.",
      },
      {
        question: "Should summaries be standardized?",
        answer:
          "Yes. Standardization makes summaries easier to review, compare, and reuse across the team.",
      },
    ],
    relatedSlugs: ["sales-call-summary-tool", "discovery-call-summary-generator", "discovery-call-summary-example", "call-summary-format", "how-to-write-a-call-summary-after-a-sales-call"],
  },
  {
    slug: "follow-up-email-best-practices",
    category: "guides",
    topic: "follow-up",
    batch: 2,
    keyword: "follow up email best practices after sales call",
    title: "Follow Up Email Best Practices After a Sales Call",
    description:
      "Review follow up email best practices after a sales call so your recap is timely, specific, and more likely to move the deal forward.",
    heroTitle: "Follow-up email best practices that keep post-call momentum alive",
    heroDescription:
      "Write better follow-up emails by making them faster, clearer, and more tied to what the buyer actually said.",
    intro:
      "A follow-up email should never feel like an afterthought. This guide focuses on the practical habits that make post-call follow-up more effective without adding extra admin work.",
    benefits: [
      "Send stronger emails with less rewrite time.",
      "Keep buyer priorities and next steps more visible.",
      "Create a bridge from education-focused readers into the product workflow.",
    ],
    audiences: ["SDRs", "AEs", "Founders closing early deals"],
    faqs: [
      {
        question: "What is the best time to send a follow-up email?",
        answer:
          "The same day is usually best because both sides still remember the exact conversation context.",
      },
      {
        question: "Should I attach extra resources in the first follow-up?",
        answer:
          "Only if they are directly relevant. Too many links or documents can dilute the main next step.",
      },
    ],
    relatedSlugs: ["how-to-write-a-sales-follow-up-email", "sales-follow-up-email-template", "follow-up-email-ai-tool", "follow-up-email-format", "follow-up-meeting-recap-ai"],
  },
  {
    slug: "follow-up-email-tips-after-sales-call",
    category: "guides",
    topic: "follow-up",
    batch: 3,
    featured: true,
    keyword: "follow up email tips after sales call",
    title: "Follow Up Email Tips After Sales Call | Write Cleaner Post-Call Emails",
    description:
      "Learn follow up email tips after a sales call so your recap is clearer, more specific, and easier for buyers to act on.",
    heroTitle: "Follow-up email tips for teams that want faster, sharper post-call emails",
    heroDescription:
      "Use practical tips to tighten your recap, clarify next steps, and make every sales follow-up more useful.",
    intro:
      "Tips-intent queries are lightweight, practical, and often high-volume. This page strengthens the follow-up cluster with a clear educational entry point that naturally routes readers into templates and AI tools.",
    benefits: [
      "Improve follow-up quality without increasing writing time.",
      "Make buyer priorities and commitments more obvious.",
      "Bridge quick advice searches into templates, formats, and generators.",
    ],
    audiences: ["SDRs", "AEs", "Founders sending post-call emails"],
    faqs: [
      {
        question: "What is the biggest mistake in follow-up emails?",
        answer:
          "The biggest mistake is sending vague generic copy that does not reflect what the buyer actually cared about on the call.",
      },
      {
        question: "How many tips should a rep actually remember?",
        answer:
          "A few high-value habits matter most: send fast, stay specific, confirm next steps clearly, and avoid unnecessary fluff.",
      },
    ],
    relatedSlugs: ["how-to-write-a-sales-follow-up-email", "follow-up-email-format", "follow-up-meeting-recap-ai", "sales-follow-up-email-template"],
  },
  {
    slug: "how-to-write-crm-notes-for-sales-calls",
    category: "guides",
    topic: "crm-notes",
    batch: 3,
    featured: true,
    keyword: "how to write crm notes for sales calls",
    title: "How to Write CRM Notes for Sales Calls | Keep Context Clear and Usable",
    description:
      "Learn how to write CRM notes for sales calls so your updates stay concise, specific, and useful during reviews and follow-up.",
    heroTitle: "How to write CRM notes for sales calls without creating messy updates",
    heroDescription:
      "Use a clean framework to log the details from sales conversations that matter most for pipeline visibility and next-step execution.",
    intro:
      "This guide expands the CRM-notes cluster with a closely related how-to keyword variation that still carries distinct search demand. It links cleanly into examples, templates, formats, and AI-generator pages.",
    benefits: [
      "Improve CRM-note quality across the team.",
      "Make pipeline reviews faster and less ambiguous.",
      "Create stronger bridges into note templates and AI generators.",
    ],
    audiences: ["AEs", "Sales managers", "Founders updating CRM manually"],
    faqs: [
      {
        question: "What should sales-call CRM notes emphasize most?",
        answer:
          "They should emphasize buyer goals, current workflow, key pain points, objections, stakeholders, timing, and the next agreed action.",
      },
      {
        question: "Should CRM notes be written immediately after the call?",
        answer:
          "Yes, whenever possible. Writing them while the conversation is fresh usually improves both accuracy and specificity.",
      },
    ],
    relatedSlugs: ["how-to-write-crm-notes-after-a-sales-call", "crm-notes-example", "crm-notes-ai-generator", "crm-note-format"],
  },
  {
    slug: "discovery-call-best-practices-for-notes",
    category: "guides",
    topic: "discovery-call",
    batch: 3,
    featured: true,
    keyword: "discovery call best practices for notes",
    title: "Discovery Call Best Practices for Notes | Capture Better Buyer Signal",
    description:
      "Learn discovery call best practices for notes so your team captures buyer pains, objections, stakeholders, and next steps more consistently.",
    heroTitle: "Discovery call note best practices for teams that want cleaner post-call detail",
    heroDescription:
      "Use practical note-taking and summarization best practices to keep discovery insights useful after the meeting ends.",
    intro:
      "Best-practices pages are useful because they are educational without being too broad. This keyword expands discovery coverage while reinforcing the pathway into structured templates and summary tools.",
    benefits: [
      "Improve note quality across reps and managers.",
      "Capture more useful buyer signal from discovery calls.",
      "Support cleaner transitions into CRM, recap, and summary workflows.",
    ],
    audiences: ["AEs", "Sales leaders", "Founders doing customer discovery"],
    faqs: [
      {
        question: "What is the biggest note-taking mistake in discovery calls?",
        answer:
          "The biggest mistake is capturing generic conversation flow while missing the buyer's real pains, constraints, and next-step commitments.",
      },
      {
        question: "Should note best practices change with deal stage?",
        answer:
          "Yes, but early calls almost always need strong capture of pain points, current process, stakeholders, and qualification signal.",
      },
    ],
    relatedSlugs: ["how-to-summarize-a-discovery-call", "discovery-call-template-format", "discovery-call-summary-ai-tool", "discovery-call-notes-template"],
  },
  {
    slug: "how-to-handle-sales-objections-after-a-call",
    category: "guides",
    topic: "objections",
    batch: 3,
    keyword: "how to handle sales objections after a call",
    title: "How to Handle Sales Objections After a Call | Turn Pushback Into Better Follow-Up",
    description:
      "Learn how to handle sales objections after a call so your team can respond with better context, cleaner messaging, and stronger next steps.",
    heroTitle: "How to handle sales objections after a call without relying on memory alone",
    heroDescription:
      "Use a structured follow-up workflow to review objections, identify the real concern, and prepare a stronger next conversation.",
    intro:
      "Objection handling does not end when the call ends. This guide expands the objections cluster with a practical how-to page that links naturally into templates, trackers, and AI-driven objection tools.",
    benefits: [
      "Help reps respond more thoughtfully after buyer pushback.",
      "Preserve context behind objections before it gets lost.",
      "Improve linkage between objection logging and follow-up strategy.",
    ],
    audiences: ["AEs", "Sales managers", "Founders refining messaging"],
    faqs: [
      {
        question: "What should happen right after an objection-heavy call?",
        answer:
          "The team should document the exact objection, note the likely root concern, decide what proof or clarification to send, and define the next follow-up step.",
      },
      {
        question: "Can objection handling after the call improve win rate?",
        answer:
          "Yes. Better post-call handling can tighten messaging, prevent weak follow-up, and help the team address the real blocker rather than the surface wording.",
      },
    ],
    relatedSlugs: ["how-to-document-sales-objections-after-a-call", "objection-response-template", "objection-handling-ai-tool", "sales-objection-tracker-ai"],
  },
  {
    slug: "sales-call-recap-best-practices",
    category: "guides",
    topic: "recap",
    batch: 3,
    keyword: "sales call recap best practices",
    title: "Sales Call Recap Best Practices | Write Better Post-Call Recaps",
    description:
      "Learn sales call recap best practices so your recaps stay specific, concise, and useful for buyers and internal teams.",
    heroTitle: "Sales call recap best practices for teams that want clear next-step communication",
    heroDescription:
      "Use practical recap habits to make post-call communication tighter, more specific, and easier to act on.",
    intro:
      "Recap quality can quietly influence deal momentum. This best-practices page expands recap coverage and acts as a clean bridge into recap templates, examples, and software-intent pages.",
    benefits: [
      "Improve clarity of buyer-facing and internal recaps.",
      "Reduce bloated post-call writing.",
      "Strengthen linkage between recap content and next-step execution.",
    ],
    audiences: ["AEs", "Founders", "Teams sharing recap emails internally and externally"],
    faqs: [
      {
        question: "What makes a sales recap strong?",
        answer:
          "A strong recap is specific, short, and action-oriented. It highlights the buyer context, important blockers, and the next step clearly.",
      },
      {
        question: "Should recap best practices differ for internal versus external readers?",
        answer:
          "Yes. Internal recaps can include more deal detail, while buyer-facing recaps should stay concise and focused on shared understanding and next actions.",
      },
    ],
    relatedSlugs: ["how-to-write-a-sales-call-recap", "sales-recap-template-example", "sales-call-recap-software", "sales-call-recap-template"],
  },
  {
    slug: "how-to-write-a-call-summary-after-a-sales-call",
    category: "guides",
    topic: "summary",
    batch: 3,
    keyword: "how to write a call summary after a sales call",
    title: "How to Write a Call Summary After a Sales Call | Make Notes Action-Ready",
    description:
      "Learn how to write a call summary after a sales call so the key takeaways, objections, and next steps are easy to reuse.",
    heroTitle: "How to write a call summary after a sales call without producing generic notes",
    heroDescription:
      "Use a simple structure to turn a conversation into a concise summary that helps with CRM updates, follow-up, and internal handoff.",
    intro:
      "This page broadens the summary cluster with a more conversational how-to keyword. It works well as a practical educational page that can route readers into summary formats, examples, and AI tools.",
    benefits: [
      "Teach teams how to create more useful summaries fast.",
      "Reduce weak generic summaries that hide the real signal.",
      "Create a natural bridge into summary tools, formats, and examples.",
    ],
    audiences: ["AEs", "Sales managers", "Founders juggling many customer calls"],
    faqs: [
      {
        question: "What should a post-sales-call summary include?",
        answer:
          "It should include the core context, buyer goals, objections or blockers, open questions, and the next agreed action.",
      },
      {
        question: "How detailed should the summary be?",
        answer:
          "Specific enough to be useful later, but still short enough that another teammate can understand it quickly without reading the transcript.",
      },
    ],
    relatedSlugs: ["sales-call-summary-best-practices", "call-summary-format", "call-summary-generator-ai", "discovery-call-summary-example"],
  },
];


const topicDefinitions = {
  "follow-up": {
    label: "follow-up",
    noun: "sales follow up",
    asset: "follow-up email and recap",
    adjacent: "demo follow-up and post-call follow-up",
    audience: ["AEs", "Founder-led sales teams", "SDRs sending fast post-call follow-up"],
    seedSlugs: ["sales-follow-up-email-generator", "sales-follow-up-email-template", "how-to-write-a-sales-follow-up-email", "follow-up-email-format", "follow-up-email-tips-after-sales-call"],
  },
  "recap": {
    label: "recap",
    noun: "sales recap",
    asset: "recap and next-step note",
    adjacent: "meeting recap and post-call recap",
    audience: ["AEs", "Founders", "Teams sending recap emails after calls"],
    seedSlugs: ["sales-call-recap-generator", "sales-call-recap-template", "how-to-write-a-sales-call-recap", "sales-call-recap-best-practices", "sales-recap-template-example"],
  },
  "crm-notes": {
    label: "crm notes",
    noun: "CRM notes",
    asset: "CRM update and call note",
    adjacent: "post-call notes and qualification notes",
    audience: ["HubSpot users", "Revenue teams", "Founders updating CRM manually"],
    seedSlugs: ["crm-note-generator", "crm-notes-template", "how-to-write-crm-notes-after-a-sales-call", "crm-notes-example", "crm-note-format"],
  },
  "discovery-call": {
    label: "discovery call",
    noun: "discovery call summary",
    asset: "discovery summary and qualification note",
    adjacent: "qualification notes and buyer discovery recap",
    audience: ["AEs running discovery", "Sales managers", "Founders doing customer discovery"],
    seedSlugs: ["discovery-call-summary-generator", "discovery-call-notes-template", "how-to-summarize-a-discovery-call", "discovery-call-best-practices-for-notes", "discovery-call-template-format"],
  },
  objections: {
    label: "buyer objections",
    noun: "buyer objections",
    asset: "objection log and response prep",
    adjacent: "pricing objections and buyer objection follow-up",
    audience: ["Sales managers", "Enablement leads", "Founders refining messaging"],
    seedSlugs: ["sales-objection-tracker-ai", "objection-handling-template", "how-to-document-sales-objections-after-a-call", "how-to-handle-sales-objections-after-a-call", "objection-response-template"],
  },
  summary: {
    label: "call summary",
    noun: "sales call summary",
    asset: "call summary and handoff note",
    adjacent: "meeting summary and call wrap-up",
    audience: ["AEs", "Sales leaders", "Operators handling many calls"],
    seedSlugs: ["sales-call-summary-tool", "call-summary-format", "sales-call-summary-best-practices", "how-to-write-a-call-summary-after-a-sales-call", "call-summary-generator-ai"],
  },
};

const generatedPageBlueprints = {
  4: [
    { category: "tools", slugPattern: "{base}-ai-tool", keywordPattern: "{keywordBase} ai tool", titlePattern: "{TitleBase} AI Tool | Faster Post-Call Workflow", descriptionPattern: "Use an AI tool for {keywordBase} workflows so your team can turn transcripts into a clearer {asset} faster.", heroPattern: "An AI tool for {keywordBase} workflows that saves post-call time", introPattern: "This page targets software-intent searchers who want help with {label} work after the meeting, not another generic summarizer.", faqQ1: "What should a {keywordBase} AI tool do?", faqA1: "It should turn transcript detail into a structured {asset}, surface the most important signal, and make the next follow-up action easier.", faqQ2: "Where does this fit in a sales workflow?", faqA2: "It fits right after the call ends, when the rep needs a usable draft for email, CRM, or internal handoff while the details are still fresh.", featuredTopics: ["follow-up", "crm-notes", "summary"] },
    { category: "tools", slugPattern: "{adjacentSlug}-software", keywordPattern: "{adjacentKeyword} software", titlePattern: "{AdjacentTitle} Software | Turn Conversations Into Action Faster", descriptionPattern: "Evaluate software for {adjacentKeyword} workflows that can convert raw call detail into a usable {asset} without manual rewriting.", heroPattern: "Software for {adjacentKeyword} when manual post-call work keeps piling up", introPattern: "This software-intent page captures visitors comparing products that can speed up {adjacent} work and keep follow-up quality high.", faqQ1: "What makes {adjacentKeyword} software useful?", faqA1: "Useful software shortens the time from transcript to usable output and keeps the important buyer context visible for the next step.", faqQ2: "Is this only for large sales teams?", faqA2: "No. Founder-led teams and small revenue teams often benefit even more because they have less time for manual post-call admin.", featuredTopics: ["recap", "discovery-call", "objections"] },
    { category: "templates", slugPattern: "{adjacentSlug}-template", keywordPattern: "{adjacentKeyword} template", titlePattern: "{AdjacentTitle} Template | Reuse a Better Post-Call Structure", descriptionPattern: "Use a {adjacentKeyword} template to structure the most important details from the conversation and keep the next step obvious.", heroPattern: "A {adjacentKeyword} template your team can reuse after important calls", introPattern: "Template-intent visitors often want a fast structure before they commit to a tool. This page gives the cluster another clean bridge into product-intent pages.", faqQ1: "When should I use a {adjacentKeyword} template?", faqA1: "Use it when you want a repeatable structure for capturing what happened on the call and what should happen next.", faqQ2: "Can a template still work with AI?", faqA2: "Yes. A strong template becomes an even better output target for AI because it defines the exact sections the team cares about.", featuredTopics: ["follow-up", "recap", "discovery-call"] },
    { category: "guides", slugPattern: "{guideSlug}", keywordPattern: "{guideKeyword}", titlePattern: "{GuideTitle} | Sharpen Post-Call Execution", descriptionPattern: "Learn {guideKeyword} so your team can turn raw conversations into a clearer {asset} with less manual cleanup.", heroPattern: "{GuideTitle} without letting the useful details slip away", introPattern: "This guide expands the topical cluster with a practical educational page tied closely to {label} execution and follow-up quality.", faqQ1: "What matters most when improving {keywordBase}?", faqA1: "The biggest gains usually come from using a repeatable structure, capturing the real buyer signal, and defining the next action before the conversation fades from memory.", faqQ2: "Should this workflow connect to templates and tools?", faqA2: "Yes. Strong how-to content should naturally feed readers into the template and software pages that help them execute faster.", featuredTopics: ["crm-notes", "summary", "objections"] },
  ],
  5: [
    { category: "tools", slugPattern: "{generatorSlug}", keywordPattern: "{generatorKeyword}", titlePattern: "{GeneratorTitle} | Build Better Outputs From Sales Calls", descriptionPattern: "Use a {generatorKeyword} to turn transcripts into a structured {asset} with cleaner buyer context, blockers, and next steps.", heroPattern: "A {generatorKeyword} for teams that want faster, cleaner post-call outputs", introPattern: "This batch 5 tool page goes after visitors ready to evaluate a generator rather than browse generic advice. It stays tightly aligned with the current product workflow.", faqQ1: "Why use a {generatorKeyword} instead of writing manually?", faqA1: "Because it reduces blank-page work, keeps details from the transcript visible, and helps the team move faster without sacrificing structure.", faqQ2: "Can a generator still be reviewed by a rep?", faqA2: "Absolutely. The best workflow is generate first, then review the draft quickly before sending or logging it.", featuredTopics: ["follow-up", "recap", "discovery-call"] },
    { category: "templates", slugPattern: "{exampleSlug}", keywordPattern: "{exampleKeyword}", titlePattern: "{ExampleTitle} | See What Good Post-Call Output Looks Like", descriptionPattern: "Review a {exampleKeyword} to see how a strong {asset} can be structured after the conversation ends.", heroPattern: "A {exampleKeyword} that shows the right level of specificity", introPattern: "Example-intent searches are useful because they help visitors benchmark quality quickly, then move into templates and AI tools naturally.", faqQ1: "Why look for a {exampleKeyword}?", faqA1: "Examples make the quality bar obvious and show what should actually be captured, not just the section headings.", faqQ2: "Should examples be short or detailed?", faqA2: "Usually concise but specific works best so the note stays readable while preserving the decision-relevant details.", featuredTopics: ["crm-notes", "summary"] },
    { category: "templates", slugPattern: "{formatSlug}", keywordPattern: "{formatKeyword}", titlePattern: "{FormatTitle} | A Cleaner Structure for Sales Teams", descriptionPattern: "Use a {formatKeyword} to keep the most important buyer context, blockers, and next steps organized after each call.", heroPattern: "A {formatKeyword} that makes post-call outputs easier to scan", introPattern: "Format-intent pages give the cluster another way to capture visitors who want structure first and tooling second.", faqQ1: "What should a {formatKeyword} include?", faqA1: "It should include the core context, the important signal from the call, and the next agreed action in a format another teammate can scan quickly.", faqQ2: "Is format different from a template?", faqA2: "They overlap, but format-focused searches usually want the page shape and section logic first, while templates often provide more direct fill-in wording.", featuredTopics: ["follow-up", "objections", "discovery-call"] },
    { category: "guides", slugPattern: "{howToSlug}", keywordPattern: "{howToKeyword}", titlePattern: "{HowToTitle} | Make Post-Call Work More Reusable", descriptionPattern: "Learn {howToKeyword} so your team can capture the useful signal from the conversation and turn it into a better {asset}.", heroPattern: "{HowToTitle} without relying on fuzzy memory alone", introPattern: "This how-to page strengthens the cluster with a very close-intent educational entry point that can route readers into templates, formats, and tools.", faqQ1: "What is the biggest mistake in {keywordBase}?", faqA1: "The biggest mistake is writing a generic recap that misses the real buyer priorities, blockers, or next step.", faqQ2: "Should the process be standardized across the team?", faqA2: "Yes. Even light standardization makes it easier to compare notes, coach reps, and reuse context across the pipeline.", featuredTopics: ["recap", "crm-notes", "summary"] },
    { category: "guides", slugPattern: "{tipsSlug}", keywordPattern: "{tipsKeyword}", titlePattern: "{TipsTitle} | Keep Sales Follow-Up Sharper", descriptionPattern: "Review {tipsKeyword} so your team can write cleaner notes, recaps, and follow-up assets with less friction after each call.", heroPattern: "{TipsTitle} that make post-call execution cleaner and faster", introPattern: "Tips and best-practices pages are lightweight entry points that expand the cluster and improve internal distribution into higher-intent pages.", faqQ1: "What are the most useful {tipsKeyword}?", faqA1: "The most useful tips keep teams specific, fast, and action-oriented instead of turning post-call work into long vague notes.", faqQ2: "Do tips pages still help product discovery?", faqA2: "Yes. They often attract readers early, then route them toward the tool, template, and software pages when they want more speed.", featuredTopics: ["follow-up", "objections", "discovery-call"] },
  ],
};

const topicVariantConfig = {
  "follow-up": {
    base: "follow-up-email",
    keywordBase: "follow up email",
    adjacentSlug: "demo-follow-up",
    adjacentKeyword: "demo follow up",
    adjacentTitle: "Demo Follow-Up",
    guideSlug: "post-call-follow-up-best-practices",
    guideKeyword: "post call follow up best practices",
    guideTitle: "Post-Call Follow-Up Best Practices",
    generatorSlug: "post-call-follow-up-generator",
    generatorKeyword: "post call follow up generator",
    generatorTitle: "Post-Call Follow-Up Generator",
    exampleSlug: "demo-follow-up-example",
    exampleKeyword: "demo follow up example",
    exampleTitle: "Demo Follow-Up Example",
    formatSlug: "post-call-follow-up-format",
    formatKeyword: "post call follow up format",
    formatTitle: "Post-Call Follow-Up Format",
    howToSlug: "how-to-write-a-demo-follow-up-email",
    howToKeyword: "how to write a demo follow up email",
    howToTitle: "How to Write a Demo Follow-Up Email",
    tipsSlug: "sales-follow-up-best-practices",
    tipsKeyword: "sales follow up best practices",
    tipsTitle: "Sales Follow-Up Best Practices",
  },
  "recap": {
    base: "meeting-recap",
    keywordBase: "meeting recap",
    adjacentSlug: "sales-recap",
    adjacentKeyword: "sales recap",
    adjacentTitle: "Sales Recap",
    guideSlug: "meeting-recap-best-practices",
    guideKeyword: "meeting recap best practices",
    guideTitle: "Meeting Recap Best Practices",
    generatorSlug: "sales-recap-generator",
    generatorKeyword: "sales recap generator",
    generatorTitle: "Sales Recap Generator",
    exampleSlug: "meeting-recap-example",
    exampleKeyword: "meeting recap example",
    exampleTitle: "Meeting Recap Example",
    formatSlug: "post-call-recap-format",
    formatKeyword: "post call recap format",
    formatTitle: "Post-Call Recap Format",
    howToSlug: "how-to-write-a-meeting-recap-after-a-sales-call",
    howToKeyword: "how to write a meeting recap after a sales call",
    howToTitle: "How to Write a Meeting Recap After a Sales Call",
    tipsSlug: "sales-recap-tips",
    tipsKeyword: "sales recap tips",
    tipsTitle: "Sales Recap Tips",
  },
  "crm-notes": {
    base: "post-call-notes",
    keywordBase: "post call notes",
    adjacentSlug: "qualification-notes",
    adjacentKeyword: "qualification notes",
    adjacentTitle: "Qualification Notes",
    guideSlug: "post-call-notes-best-practices",
    guideKeyword: "post call notes best practices",
    guideTitle: "Post-Call Notes Best Practices",
    generatorSlug: "qualification-notes-generator",
    generatorKeyword: "qualification notes generator",
    generatorTitle: "Qualification Notes Generator",
    exampleSlug: "post-call-notes-example",
    exampleKeyword: "post call notes example",
    exampleTitle: "Post-Call Notes Example",
    formatSlug: "qualification-notes-format",
    formatKeyword: "qualification notes format",
    formatTitle: "Qualification Notes Format",
    howToSlug: "how-to-write-post-call-notes-for-sales",
    howToKeyword: "how to write post call notes for sales",
    howToTitle: "How to Write Post-Call Notes for Sales",
    tipsSlug: "crm-note-best-practices-for-sales-teams",
    tipsKeyword: "crm note best practices for sales teams",
    tipsTitle: "CRM Note Best Practices for Sales Teams",
  },
  "discovery-call": {
    base: "qualification-call-summary",
    keywordBase: "qualification call summary",
    adjacentSlug: "buyer-discovery-notes",
    adjacentKeyword: "buyer discovery notes",
    adjacentTitle: "Buyer Discovery Notes",
    guideSlug: "qualification-call-best-practices",
    guideKeyword: "qualification call best practices",
    guideTitle: "Qualification Call Best Practices",
    generatorSlug: "qualification-call-summary-generator",
    generatorKeyword: "qualification call summary generator",
    generatorTitle: "Qualification Call Summary Generator",
    exampleSlug: "discovery-call-notes-example",
    exampleKeyword: "discovery call notes example",
    exampleTitle: "Discovery Call Notes Example",
    formatSlug: "qualification-call-notes-format",
    formatKeyword: "qualification call notes format",
    formatTitle: "Qualification Call Notes Format",
    howToSlug: "how-to-write-discovery-call-notes",
    howToKeyword: "how to write discovery call notes",
    howToTitle: "How to Write Discovery Call Notes",
    tipsSlug: "discovery-call-summary-tips",
    tipsKeyword: "discovery call summary tips",
    tipsTitle: "Discovery Call Summary Tips",
  },
  objections: {
    base: "buyer-objections",
    keywordBase: "buyer objections",
    adjacentSlug: "pricing-objections",
    adjacentKeyword: "pricing objections",
    adjacentTitle: "Pricing Objections",
    guideSlug: "buyer-objection-best-practices",
    guideKeyword: "buyer objection best practices",
    guideTitle: "Buyer Objection Best Practices",
    generatorSlug: "buyer-objection-generator",
    generatorKeyword: "buyer objection generator",
    generatorTitle: "Buyer Objection Generator",
    exampleSlug: "buyer-objection-example",
    exampleKeyword: "buyer objection example",
    exampleTitle: "Buyer Objection Example",
    formatSlug: "pricing-objection-response-format",
    formatKeyword: "pricing objection response format",
    formatTitle: "Pricing Objection Response Format",
    howToSlug: "how-to-document-buyer-objections-after-a-sales-call",
    howToKeyword: "how to document buyer objections after a sales call",
    howToTitle: "How to Document Buyer Objections After a Sales Call",
    tipsSlug: "sales-objection-follow-up-tips",
    tipsKeyword: "sales objection follow up tips",
    tipsTitle: "Sales Objection Follow-Up Tips",
  },
  summary: {
    base: "meeting-summary",
    keywordBase: "meeting summary",
    adjacentSlug: "sales-call-wrap-up",
    adjacentKeyword: "sales call wrap up",
    adjacentTitle: "Sales Call Wrap-Up",
    guideSlug: "call-summary-best-practices-for-sales-teams",
    guideKeyword: "call summary best practices for sales teams",
    guideTitle: "Call Summary Best Practices for Sales Teams",
    generatorSlug: "meeting-summary-generator-for-sales-calls",
    generatorKeyword: "meeting summary generator for sales calls",
    generatorTitle: "Meeting Summary Generator for Sales Calls",
    exampleSlug: "call-summary-example-for-sales-calls",
    exampleKeyword: "call summary example for sales calls",
    exampleTitle: "Call Summary Example for Sales Calls",
    formatSlug: "sales-call-wrap-up-format",
    formatKeyword: "sales call wrap up format",
    formatTitle: "Sales Call Wrap-Up Format",
    howToSlug: "how-to-write-a-sales-meeting-summary",
    howToKeyword: "how to write a sales meeting summary",
    howToTitle: "How to Write a Sales Meeting Summary",
    tipsSlug: "call-summary-tips-after-client-calls",
    tipsKeyword: "call summary tips after client calls",
    tipsTitle: "Call Summary Tips After Client Calls",
  },
};

function titleCase(value: string) {
  return value
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function fill(template: string, vars: Record<string, string | string[]>) {
  return template.replace(/{(.*?)}/g, (_: string, key: string) => {
    const value = vars[key];
    return typeof value === "string" ? value : "";
  });
}

function buildGeneratedPages(batch: 4 | 5): SeoPage[] {
  const generatedTopics = Object.keys(topicDefinitions) as Array<"follow-up" | "recap" | "crm-notes" | "discovery-call" | "objections" | "summary">;
  return generatedTopics.flatMap((topicKey) => {
    const topic = topicDefinitions[topicKey];
    const variant = topicVariantConfig[topicKey];
    return generatedPageBlueprints[batch].map((blueprint) => {
      const vars = {
        ...topic,
        ...variant,
        TitleBase: titleCase(variant.keywordBase),
        AdjacentTitle: variant.adjacentTitle,
        GuideTitle: variant.guideTitle,
        GeneratorTitle: variant.generatorTitle,
        ExampleTitle: variant.exampleTitle,
        FormatTitle: variant.formatTitle,
        HowToTitle: variant.howToTitle,
        TipsTitle: variant.tipsTitle,
      };

      const slug = fill(blueprint.slugPattern, vars);
      const keyword = fill(blueprint.keywordPattern, vars);
      const title = fill(blueprint.titlePattern, vars);
      const description = fill(blueprint.descriptionPattern, vars);
      const heroTitle = fill(blueprint.heroPattern, vars);
      const heroDescription = "Turn transcript detail into a cleaner " + topic.asset + " for " + topic.adjacent + " work without wasting time on manual rewrites.";
      const intro = fill(blueprint.introPattern, vars);
      const featured = blueprint.featuredTopics.includes(topicKey);
      const relatedSlugs = [...topic.seedSlugs].slice(0, 5);

      return {
        slug,
        category: blueprint.category as SeoPageCategory,
        topic: topicKey as SeoTopic,
        batch,
        featured,
        keyword,
        title,
        description,
        heroTitle,
        heroDescription,
        intro,
        benefits: [
          "Turn raw transcript detail into a usable " + topic.asset + " faster.",
          "Keep " + topic.label + " workflows more consistent across the team.",
          "Create a cleaner path from the call into follow-up, CRM, and internal handoff.",
        ],
        audiences: topic.audience as string[],
        faqs: [
          { question: fill(blueprint.faqQ1, vars), answer: fill(blueprint.faqA1, vars) },
          { question: fill(blueprint.faqQ2, vars), answer: fill(blueprint.faqA2, vars) },
        ],
        relatedSlugs,
      };
    });
  });
}

const batch4Pages: SeoPage[] = buildGeneratedPages(4);
const batch5Pages: SeoPage[] = buildGeneratedPages(5);
export const seoPages: SeoPage[] = [...baseSeoPages, ...batch4Pages, ...batch5Pages];

export const seoPageMap = Object.fromEntries(seoPages.map((page) => [page.slug, page])) as Record<string, SeoPage>;

export const categoryMeta: Record<SeoPageCategory, { title: string; description: string; intro: string }> = {
  tools: {
    title: "Sales Tools Pages",
    description:
      "Browse sales call follow-up tools for summaries, CRM notes, recaps, objections, and post-call email generation.",
    intro:
      "These pages focus on tool-style keywords where visitors want a faster way to turn raw sales conversations into usable outputs.",
  },
  templates: {
    title: "Sales Templates Pages",
    description:
      "Explore templates for follow-up emails, discovery notes, CRM note structure, recaps, and objections.",
    intro:
      "These pages target template-driven searches from people who want structure first and automation second.",
  },
  guides: {
    title: "Sales Guides Pages",
    description:
      "Read practical guides on writing follow-up emails, documenting objections, summarizing calls, and structuring CRM notes.",
    intro:
      "These pages answer educational queries and naturally feed readers into the product when they are ready for speed.",
  },
};

export function getPagesByCategory(category: SeoPageCategory) {
  return seoPages.filter((page) => page.category === category);
}

export function getFeaturedPages() {
  return seoPages.filter((page) => page.featured);
}

export function getFeaturedPagesByCategory(category: SeoPageCategory, limit = 3) {
  return getFeaturedPages().filter((page) => page.category === category).slice(0, limit);
}

export function getPagesByTopic(topic: SeoTopic) {
  return seoPages.filter((page) => page.topic === topic);
}

export function getBatchPages(batch: 1 | 2 | 3 | 4 | 5) {
  return seoPages.filter((page) => page.batch === batch);
}

export function getBatchPagesByCategory(category: SeoPageCategory, batch: 1 | 2 | 3 | 4 | 5, limit?: number) {
  const pages = seoPages.filter((page) => page.category === category && page.batch === batch);
  return typeof limit === "number" ? pages.slice(0, limit) : pages;
}

export function getTopicJourney(page: SeoPage, limit = 3) {
  const categoryOrder: SeoPageCategory[] = ["tools", "templates", "guides"];
  return categoryOrder
    .filter((category) => category !== page.category)
    .map((category) =>
      seoPages.find((candidate) => candidate.slug !== page.slug && candidate.topic === page.topic && candidate.category === category),
    )
    .filter((candidate): candidate is SeoPage => Boolean(candidate))
    .slice(0, limit);
}

export function getRelatedPages(page: SeoPage, limit = 6) {
  const explicit = page.relatedSlugs.map((slug) => seoPageMap[slug]).filter(Boolean);
  const sameTopicCrossCategory = seoPages.filter(
    (candidate) => candidate.slug !== page.slug && candidate.topic === page.topic && candidate.category !== page.category,
  );
  const sameTopicSameCategory = seoPages.filter(
    (candidate) => candidate.slug !== page.slug && candidate.topic === page.topic && candidate.category === page.category,
  );
  const sameBatch = seoPages.filter(
    (candidate) => candidate.slug !== page.slug && candidate.batch === page.batch && candidate.topic !== page.topic,
  );
  const sameCategory = seoPages.filter(
    (candidate) => candidate.slug !== page.slug && candidate.category === page.category && candidate.topic !== page.topic,
  );

  const merged = [...explicit, ...sameTopicCrossCategory, ...sameTopicSameCategory, ...sameBatch, ...sameCategory];
  const unique = merged.filter((candidate, index) => merged.findIndex((item) => item.slug === candidate.slug) === index);

  return unique.slice(0, limit);
}
