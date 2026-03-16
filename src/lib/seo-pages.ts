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
};

export const seoPages: SeoPage[] = [
  {
    slug: "sales-follow-up-email-generator",
    category: "tools",
    topic: "follow-up",
    featured: true,
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
    topic: "crm-notes",
    featured: true,
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
        answer: "No. It helps you create better notes faster, then copy them into your CRM workflow.",
      },
    ],
    relatedSlugs: ["crm-notes-template", "how-to-write-crm-notes-after-a-sales-call", "discovery-call-summary-generator"],
  },
  {
    slug: "discovery-call-summary-generator",
    category: "tools",
    topic: "discovery-call",
    featured: true,
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
    slug: "sales-call-summary-tool",
    category: "tools",
    topic: "summary",
    featured: true,
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
  {
    slug: "sales-call-recap-generator",
    category: "tools",
    topic: "recap",
    featured: true,
    keyword: "sales call recap generator",
    title: "Sales Call Recap Generator | Create Fast Buyer Recaps After Calls",
    description:
      "Generate a sales call recap with key points, buyer priorities, blockers, and next steps from one transcript.",
    heroTitle: "Generate a clean sales call recap without replaying the whole conversation",
    heroDescription:
      "Turn a raw sales transcript into a concise recap you can send, save, or share internally right after the call.",
    intro:
      "A recap is often the fastest way to keep internal alignment and buyer momentum alive. This page targets teams that want a repeatable workflow for turning a conversation into a usable recap immediately.",
    benefits: [
      "Package the most important call context into a short reusable format.",
      "Help buyers and teammates align on what happened and what happens next.",
      "Reduce time spent manually rewriting notes after every call.",
    ],
    audiences: ["AEs handling multiple demos", "Founders doing sales themselves", "Teams sharing call takeaways internally"],
    faqs: [
      {
        question: "What should a sales call recap include?",
        answer:
          "A useful recap should include buyer goals, important context, blockers or objections, and the agreed next steps rather than a full transcript rewrite.",
      },
      {
        question: "Is a recap different from a call summary?",
        answer:
          "They overlap, but a recap usually emphasizes clarity and next-step communication while a summary may be broader and more internal.",
      },
    ],
    relatedSlugs: ["sales-call-summary-tool", "sales-call-recap-template", "how-to-write-a-sales-call-recap"],
  },
  {
    slug: "sales-objection-tracker-ai",
    category: "tools",
    topic: "objections",
    keyword: "sales objection tracker ai",
    title: "Sales Objection Tracker AI | Capture Objections From Call Transcripts",
    description:
      "Use AI to extract and organize sales objections from discovery calls, demos, and follow-up calls so teams can improve messaging and coaching.",
    heroTitle: "Track objections automatically from every sales conversation",
    heroDescription:
      "Pull out recurring objections, hesitation points, and deal blockers from transcripts without manual note review.",
    intro:
      "Objections are often buried inside long transcripts and forgotten by the next meeting. This page is for teams that want a faster way to identify what buyers are pushing back on and turn that into better follow-up and enablement.",
    benefits: [
      "Spot repeated objections across calls faster.",
      "Create cleaner handoffs for managers and founders.",
      "Support better messaging, enablement, and next-step prep.",
    ],
    audiences: ["Sales managers", "Founders refining messaging", "RevOps teams reviewing call quality"],
    faqs: [
      {
        question: "Why track objections separately from a summary?",
        answer:
          "Because objections often drive the deal more than the general recap. Isolating them makes it easier to coach, respond, and update messaging.",
      },
      {
        question: "Can this work for pricing objections and timeline objections?",
        answer:
          "Yes. The goal is to pull out high-signal buyer concerns no matter whether they are about price, timing, integrations, or internal buy-in.",
      },
    ],
    relatedSlugs: ["objection-handling-template", "how-to-document-sales-objections-after-a-call", "discovery-call-summary-generator"],
  },
  {
    slug: "follow-up-email-ai-tool",
    category: "tools",
    topic: "follow-up",
    keyword: "follow up email ai tool",
    title: "Follow Up Email AI Tool | Generate Better Post-Call Emails Fast",
    description:
      "Use an AI follow up email tool to turn call notes or transcripts into clear, personalized post-call emails in seconds.",
    heroTitle: "An AI tool for follow-up emails that keeps sales momentum moving",
    heroDescription:
      "Generate a faster first draft for post-call emails while keeping buyer priorities and next steps visible.",
    intro:
      "Writing follow-up emails manually after every call creates drag, especially for lean teams. This page targets high-intent searches from people who want software help, not just advice.",
    benefits: [
      "Save time on repetitive post-call writing.",
      "Keep buyer-specific details in the message instead of sending generic copy.",
      "Support consistent follow-up across reps and founders.",
    ],
    audiences: ["SMB sales teams", "Founder sellers", "Consultants who need polished recaps fast"],
    faqs: [
      {
        question: "Is this different from a template?",
        answer:
          "Yes. A template gives you structure, while an AI tool uses transcript details to generate a more tailored draft automatically.",
      },
      {
        question: "Can I edit the output before sending?",
        answer:
          "Absolutely. The best workflow is generate first, then review and tailor for the buyer before you hit send.",
      },
    ],
    relatedSlugs: ["sales-follow-up-email-generator", "sales-follow-up-email-template", "how-to-write-a-sales-follow-up-email"],
  },
  {
    slug: "crm-note-ai-software",
    category: "tools",
    topic: "crm-notes",
    keyword: "crm note ai software",
    title: "CRM Note AI Software | Faster Post-Call Logging for Sales Teams",
    description:
      "CRM note AI software helps sales teams convert transcripts into structured CRM-ready updates with less manual admin.",
    heroTitle: "AI software for CRM notes when your team hates post-call admin",
    heroDescription:
      "Generate structured notes for HubSpot and other CRM workflows from call transcripts, then paste and move on.",
    intro:
      "Teams rarely need more generic AI output. They need software that makes CRM hygiene easier. This page is built for high-intent visitors comparing tools that can reduce post-call logging time.",
    benefits: [
      "Speed up CRM updates without sacrificing useful detail.",
      "Create a repeatable structure managers can review quickly.",
      "Reduce missed context between calls and pipeline reviews.",
    ],
    audiences: ["RevOps-conscious teams", "AEs using HubSpot", "Founders who update CRM personally"],
    faqs: [
      {
        question: "What makes CRM note software useful?",
        answer:
          "The best tools capture context in a consistent, scannable format and help the team log notes immediately instead of hours later.",
      },
      {
        question: "Can I use this if I already have call recording software?",
        answer:
          "Yes. Recording tools capture the conversation. This helps turn that conversation into a CRM-ready output your team can actually use.",
      },
    ],
    relatedSlugs: ["crm-note-generator", "crm-notes-template", "how-to-write-crm-notes-after-a-sales-call"],
  },
  {
    slug: "discovery-call-notes-ai",
    category: "tools",
    topic: "discovery-call",
    keyword: "discovery call notes ai",
    title: "Discovery Call Notes AI | Turn Buyer Calls Into Structured Notes",
    description:
      "Use AI to convert discovery calls into structured notes covering goals, pain points, objections, stakeholders, and next steps.",
    heroTitle: "AI discovery call notes that are actually useful after the meeting",
    heroDescription:
      "Create a cleaner discovery notes draft from one transcript and stop losing buyer detail between meetings.",
    intro:
      "Discovery calls generate context that is hard to recover later. This page is designed for teams looking for AI help with extracting the useful parts of a buyer conversation into a note format they can reuse.",
    benefits: [
      "Capture important discovery context while it is still fresh.",
      "Improve handoff quality across founders, reps, and managers.",
      "Use one transcript to support CRM, recap, and follow-up tasks.",
    ],
    audiences: ["AEs running qualification calls", "Founders validating demand", "Sales teams building note discipline"],
    faqs: [
      {
        question: "What should discovery notes include?",
        answer:
          "They should include the current process, pain points, goals, blockers, stakeholders, and what both sides agreed to do next.",
      },
      {
        question: "Why use AI for discovery notes?",
        answer:
          "It helps you create a solid first draft quickly, especially when you have multiple calls and limited time for manual cleanup.",
      },
    ],
    relatedSlugs: ["discovery-call-summary-generator", "discovery-call-notes-template", "how-to-summarize-a-discovery-call"],
  },
  {
    slug: "sales-follow-up-email-template",
    category: "templates",
    topic: "follow-up",
    featured: true,
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
    topic: "discovery-call",
    featured: true,
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
    topic: "crm-notes",
    featured: true,
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
    slug: "sales-call-recap-template",
    category: "templates",
    topic: "recap",
    featured: true,
    keyword: "sales call recap template",
    title: "Sales Call Recap Template | A Clear Format for Post-Call Recaps",
    description:
      "Use this sales call recap template to organize buyer context, takeaways, blockers, and next steps after discovery calls or demos.",
    heroTitle: "A sales call recap template you can reuse after every important conversation",
    heroDescription:
      "Start with a clear recap structure, then fill it with call-specific detail from your transcript or notes.",
    intro:
      "A strong recap helps both internal teams and buyers remember what mattered. This template page targets teams looking for a simple, repeatable structure instead of improvising after every call.",
    benefits: [
      "Keep recaps concise and easy to scan.",
      "Reduce missed follow-up details after important calls.",
      "Create a stronger bridge from conversation to action.",
    ],
    audiences: ["AEs", "Customer-facing founders", "Teams that share post-call recaps internally"],
    faqs: [
      {
        question: "When should I use a recap template?",
        answer:
          "Use it when you want a consistent structure for communicating what happened and what comes next after a call.",
      },
      {
        question: "Should a recap include objections?",
        answer:
          "Yes, especially when those objections affect follow-up strategy or next-meeting prep.",
      },
    ],
    relatedSlugs: ["sales-call-recap-generator", "how-to-write-a-sales-call-recap", "sales-call-summary-tool"],
  },
  {
    slug: "objection-handling-template",
    category: "templates",
    topic: "objections",
    keyword: "objection handling template",
    title: "Objection Handling Template | Capture Buyer Pushback After Sales Calls",
    description:
      "Use an objection handling template to organize buyer objections, root causes, suggested responses, and next-step follow-up.",
    heroTitle: "A practical objection handling template for post-call review",
    heroDescription:
      "Turn messy call feedback into a simple structure your team can use for coaching, messaging, and deal strategy.",
    intro:
      "After a call, objections often get remembered loosely and responded to inconsistently. This page is designed for teams that want a simple format to log what buyers pushed back on and how to handle it next.",
    benefits: [
      "Keep recurring objections visible across deals.",
      "Support coaching and messaging refinement.",
      "Create better prep for the next buyer conversation.",
    ],
    audiences: ["Sales managers", "Founders refining positioning", "Reps handling complex objections"],
    faqs: [
      {
        question: "What should go into an objection handling template?",
        answer:
          "The objection itself, what triggered it, the likely root concern, your response angle, and the next follow-up action are the most useful fields.",
      },
      {
        question: "Can this be used after discovery calls?",
        answer:
          "Yes. Discovery calls are often where the most valuable objections first appear.",
      },
    ],
    relatedSlugs: ["sales-objection-tracker-ai", "how-to-document-sales-objections-after-a-call", "discovery-call-summary-generator"],
  },
  {
    slug: "crm-note-format",
    category: "templates",
    topic: "crm-notes",
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
    relatedSlugs: ["crm-notes-template", "crm-note-generator", "how-to-write-crm-notes-after-a-sales-call"],
  },
  {
    slug: "discovery-call-summary-example",
    category: "templates",
    topic: "summary",
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
    relatedSlugs: ["how-to-summarize-a-discovery-call", "discovery-call-notes-template", "discovery-call-summary-generator"],
  },
  {
    slug: "how-to-write-a-sales-follow-up-email",
    category: "guides",
    topic: "follow-up",
    featured: true,
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
    topic: "discovery-call",
    featured: true,
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
    topic: "crm-notes",
    featured: true,
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
    slug: "how-to-write-a-sales-call-recap",
    category: "guides",
    topic: "recap",
    featured: true,
    keyword: "how to write a sales call recap",
    title: "How to Write a Sales Call Recap That Drives Next Steps",
    description:
      "Learn how to write a sales call recap that highlights buyer priorities, blockers, and next steps without sounding bloated or generic.",
    heroTitle: "How to write a sales call recap people actually read",
    heroDescription:
      "Use a simple recap framework to turn any call into a useful summary for buyers or internal teams.",
    intro:
      "A recap should reduce confusion, not add more text. This guide is aimed at teams that want a tighter way to communicate what happened on the call and what needs to happen next.",
    benefits: [
      "Make recaps shorter and more useful.",
      "Clarify next steps before momentum fades.",
      "Connect recap writing to a repeatable workflow instead of ad hoc memory.",
    ],
    audiences: ["AEs", "Founders", "Anyone sending post-call recap emails or notes"],
    faqs: [
      {
        question: "Who should receive a sales call recap?",
        answer:
          "Often both the buyer and internal teammates benefit, but the exact format may differ depending on the audience and deal stage.",
      },
      {
        question: "How long should a call recap be?",
        answer:
          "Long enough to capture the real signal, short enough that the reader can understand it in under a minute.",
      },
    ],
    relatedSlugs: ["sales-call-recap-template", "sales-call-recap-generator", "sales-follow-up-email-generator"],
  },
  {
    slug: "how-to-document-sales-objections-after-a-call",
    category: "guides",
    topic: "objections",
    keyword: "how to document sales objections after a call",
    title: "How to Document Sales Objections After a Call",
    description:
      "Learn how to document sales objections after a call so the team can improve messaging, prep better follow-up, and coach more effectively.",
    heroTitle: "How to document sales objections without losing the real buyer signal",
    heroDescription:
      "Use a structured approach to capture objections, the context behind them, and what should happen next.",
    intro:
      "Objections are one of the most valuable parts of a sales conversation, but they often get reduced to a vague memory. This guide is for teams that want to log objections clearly enough to improve follow-up and coaching.",
    benefits: [
      "Make objections easier to review later.",
      "Support coaching and positioning improvements.",
      "Preserve the context behind pushback, not just the surface wording.",
    ],
    audiences: ["Sales leaders", "Founders iterating on messaging", "AEs managing complex deals"],
    faqs: [
      {
        question: "What makes objection notes useful?",
        answer:
          "Useful objection notes capture the exact concern, why it came up, how the rep responded, and what follow-up should address next.",
      },
      {
        question: "Should objections live in the CRM note or separately?",
        answer:
          "They can live in both, but having a clearly marked objection section makes them much easier to analyze across calls.",
      },
    ],
    relatedSlugs: ["sales-objection-tracker-ai", "objection-handling-template", "crm-note-generator"],
  },
  {
    slug: "sales-call-summary-best-practices",
    category: "guides",
    topic: "summary",
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
    relatedSlugs: ["sales-call-summary-tool", "discovery-call-summary-generator", "discovery-call-summary-example"],
  },
  {
    slug: "follow-up-email-best-practices",
    category: "guides",
    topic: "follow-up",
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
    relatedSlugs: ["how-to-write-a-sales-follow-up-email", "sales-follow-up-email-template", "follow-up-email-ai-tool"],
  },
];

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

export function getPagesByTopic(topic: SeoTopic) {
  return seoPages.filter((page) => page.topic === topic);
}

export function getRelatedPages(page: SeoPage, limit = 6) {
  const explicit = page.relatedSlugs.map((slug) => seoPageMap[slug]).filter(Boolean);
  const sameTopic = seoPages.filter((candidate) => candidate.slug !== page.slug && candidate.topic === page.topic);
  const sameCategory = seoPages.filter(
    (candidate) => candidate.slug !== page.slug && candidate.category === page.category && candidate.topic !== page.topic,
  );

  const merged = [...explicit, ...sameTopic, ...sameCategory];
  const unique = merged.filter((candidate, index) => merged.findIndex((item) => item.slug === candidate.slug) === index);

  return unique.slice(0, limit);
}
