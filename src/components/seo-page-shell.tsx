import Link from "next/link";
import {
  categoryMeta,
  getPagesByTopic,
  getRelatedPages,
  getTopicJourney,
  type SeoPage,
  type SeoPageCategory,
  type SeoTopic,
} from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

function prettifyCategory(category: SeoPageCategory) {
  if (category === "tools") return "Tool";
  if (category === "templates") return "Template";
  return "Guide";
}

function buildFaqJsonLd(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildBreadcrumbJsonLd(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryMeta[page.category].title,
        item: `${siteConfig.url}/${page.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `${siteConfig.url}/${page.category}/${page.slug}`,
      },
    ],
  };
}

function buildArticleJsonLd(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    mainEntityOfPage: `${siteConfig.url}/${page.category}/${page.slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    about: [page.keyword, page.topic.replace(/-/g, " "), page.category],
  };
}

type TopicCopy = {
  strategicLabel: string;
  strategicTitle: string;
  strategicBody: string;
  workflowTitle: string;
  workflowBody: string;
  workflowSteps: string[];
  quickPathTitle: string;
  quickPathBody: string;
};

const topicCopyMap: Record<SeoTopic, TopicCopy> = {
  "follow-up": {
    strategicLabel: "Buyer communication",
    strategicTitle: "Keep buyer communication clear while the call is still fresh",
    strategicBody:
      "Follow-up pages should feel close to the moment after the meeting: the buyer needs a clear recap, a confident next step, and proof that you understood their priorities. The point is not just writing faster. It is keeping momentum, reducing ambiguity, and making the next interaction easier to say yes to.",
    workflowTitle: "Built for post-call buyer communication",
    workflowBody:
      "This workflow is strongest when the transcript becomes a clean external message. Use it to turn scattered call detail into a concise buyer-facing email, recap, or meeting follow-up that preserves context without sounding bloated.",
    workflowSteps: ["Capture buyer priorities", "Turn them into a clear external recap", "Send next steps while momentum is warm"],
    quickPathTitle: "Use this page, then move straight into a buyer-ready follow-up workflow",
    quickPathBody:
      "If this topic matches what you need, the next best step is to open the app and turn one transcript into a follow-up email, a concise recap, and next-step language you can send externally with minimal cleanup.",
  },
  "crm-notes": {
    strategicLabel: "Pipeline hygiene",
    strategicTitle: "Keep pipeline hygiene high without making reps do admin twice",
    strategicBody:
      "CRM-notes pages should speak to teams that care about pipeline accuracy, clean handoffs, and manager visibility. The value is not flashy AI text. The value is making sure critical call context actually gets logged in a structured way, while the opportunity is still moving.",
    workflowTitle: "Built for pipeline hygiene and cleaner internal records",
    workflowBody:
      "This workflow is designed for teams that need disciplined post-call logging. Instead of leaving notes half-finished in Slack, memory, or random docs, the transcript becomes a structured internal record that supports forecasting, handoffs, and review.",
    workflowSteps: ["Pull out deal context", "Log structured internal notes", "Keep CRM records clean for handoff and review"],
    quickPathTitle: "Use this page, then move straight into a CRM-ready logging workflow",
    quickPathBody:
      "If this topic matches what you need, the next best step is to open the app and turn one transcript into CRM notes, call summaries, objections, and structured fields that help keep your pipeline usable.",
  },
  "discovery-call": {
    strategicLabel: "Qualification clarity",
    strategicTitle: "Turn messy discovery conversations into qualification clarity",
    strategicBody:
      "Discovery pages should emphasize qualification, pain point capture, and stakeholder understanding. The transcript matters because it contains the real buying context: what is broken today, why it matters now, who is involved, and what could stall the deal if it stays fuzzy.",
    workflowTitle: "Built for qualification and pain point capture",
    workflowBody:
      "This workflow helps teams reuse discovery conversations as qualification material instead of letting them disappear into generic notes. The goal is to isolate pains, current workflow, blockers, and next-step fit signals quickly.",
    workflowSteps: ["Identify current workflow and pain", "Capture stakeholders and blockers", "Turn discovery context into usable qualification notes"],
    quickPathTitle: "Use this page, then move straight into a qualification workflow",
    quickPathBody:
      "If this topic matches what you need, the next best step is to open the app and turn one transcript into discovery notes, pain points, objections, and next steps that support qualification and deal progression.",
  },
  objections: {
    strategicLabel: "Objection visibility",
    strategicTitle: "Make objection handling easier by isolating what buyers actually pushed back on",
    strategicBody:
      "Objection pages should focus on surfacing hesitation clearly enough that reps and founders can respond better next time. The goal is not just to summarize resistance, but to separate signal from noise so pricing, timing, trust, and internal-buy-in concerns become actionable.",
    workflowTitle: "Built for objection visibility and response prep",
    workflowBody:
      "This workflow helps teams stop losing objections inside generic call recaps. Instead, transcripts become clearer objection logs that support coaching, message iteration, and better preparation for the next conversation.",
    workflowSteps: ["Extract objection moments", "Group them into actionable blocker themes", "Use them for coaching and next-call prep"],
    quickPathTitle: "Use this page, then move straight into an objection-tracking workflow",
    quickPathBody:
      "If this topic matches what you need, the next best step is to open the app and turn one transcript into objection summaries, blocker themes, and follow-up material that makes the next response stronger.",
  },
  recap: {
    strategicLabel: "Internal alignment",
    strategicTitle: "Keep internal alignment high with recaps that are short, clear, and usable",
    strategicBody:
      "Recap pages should feel useful to both the buyer-facing side and the internal side of the team. A good recap makes it easier for everyone to agree on what happened, what matters, and what comes next without rereading a transcript or relying on memory.",
    workflowTitle: "Built for recap clarity after important conversations",
    workflowBody:
      "This workflow is about compressing the call into a shareable format. The transcript becomes a recap that can be sent, saved, or handed off internally without turning into a bloated summary nobody wants to read.",
    workflowSteps: ["Condense the meeting into the essential narrative", "Highlight decisions and blockers", "Share a recap that keeps everyone aligned"],
    quickPathTitle: "Use this page, then move straight into a clean recap workflow",
    quickPathBody:
      "If this topic matches what you need, the next best step is to open the app and turn one transcript into a recap, summary, and next-step package you can reuse right away.",
  },
  summary: {
    strategicLabel: "Signal extraction",
    strategicTitle: "Pull signal out of transcripts without losing the parts that matter",
    strategicBody:
      "Summary pages should emphasize signal extraction: which points matter, which details can be compressed, and how a transcript becomes useful without turning generic. The best summary is not the longest one. It is the one that makes the next action obvious.",
    workflowTitle: "Built for extracting high-signal post-call summaries",
    workflowBody:
      "This workflow turns raw conversation into the shortest useful version of the truth. Instead of a wall of text, the output should make priorities, blockers, and next actions easier to scan and reuse.",
    workflowSteps: ["Strip out low-signal transcript noise", "Keep the buyer context that matters", "Turn the summary into action-ready outputs"],
    quickPathTitle: "Use this page, then move straight into a high-signal summary workflow",
    quickPathBody:
      "If this topic matches what you need, the next best step is to open the app and turn one transcript into a compact summary, pain points, objections, and next-step outputs that stay actionable.",
  },
  "sales-call": {
    strategicLabel: "Post-call execution",
    strategicTitle: "Turn raw sales conversations into reliable post-call execution",
    strategicBody:
      "Sales-call pages should sit closest to the practical work that follows a meeting. They are less about one format and more about making sure nothing important gets dropped between the call ending and the next action beginning.",
    workflowTitle: "Built for broad post-call execution",
    workflowBody:
      "This workflow supports teams that want one transcript to feed multiple outputs at once. It helps compress the conversation into notes, summaries, follow-up language, and action items without repeating the same work manually.",
    workflowSteps: ["Capture the conversation once", "Generate the key post-call assets", "Move those outputs into the next step fast"],
    quickPathTitle: "Use this page, then move straight into a post-call execution workflow",
    quickPathBody:
      "If this topic matches what you need, the next best step is to open the app and turn one transcript into the practical assets your team needs after a sales conversation.",
  },
};

export function SeoPageShell({ page }: { page: SeoPage }) {
  const relatedPages = getRelatedPages(page, 6);
  const topicPages = getPagesByTopic(page.topic).filter((item) => item.slug !== page.slug).slice(0, 3);
  const topicJourney = getTopicJourney(page, 3);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(page);
  const faqJsonLd = buildFaqJsonLd(page);
  const articleJsonLd = buildArticleJsonLd(page);
  const topicCopy = topicCopyMap[page.topic];

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href={`/${page.category}`} className="hover:text-white">{categoryMeta[page.category].title}</Link>
              <span>/</span>
              <span className="text-slate-200">{page.keyword}</span>
            </nav>
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
              Sales Call Follow-up Copilot
            </Link>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <Link href="/tools" className="rounded-full border border-white/10 px-3 py-1 hover:text-white">
                Tools
              </Link>
              <Link href="/templates" className="rounded-full border border-white/10 px-3 py-1 hover:text-white">
                Templates
              </Link>
              <Link href="/guides" className="rounded-full border border-white/10 px-3 py-1 hover:text-white">
                Guides
              </Link>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-100">
                Topic cluster: {page.topic.replace(/-/g, " ")}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/app" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Open app
            </Link>
            <Link href={`/${page.category}`} className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10">
              More {page.category}
            </Link>
          </div>
        </header>

        <section className="pt-12 pb-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
              {prettifyCategory(page.category)} page
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{page.heroTitle}</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">{page.heroDescription}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/app" className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Try it in /app
              </Link>
              <Link href={`/${page.category}`} className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                Explore more {page.category}
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Why this page exists</p>
              <p className="mt-4 text-base leading-8 text-slate-300">{page.intro}</p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{topicCopy.strategicLabel}</p>
              <h2 className="mt-3 text-2xl font-semibold">{topicCopy.strategicTitle}</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{topicCopy.strategicBody}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Core value</h2>
              <div className="mt-4 grid gap-4">
                {page.benefits.map((benefit) => (
                  <div key={benefit} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-7 text-slate-300">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Who it is for</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {page.audiences.map((audience) => (
                  <span key={audience} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {audience}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-cyan-400/20 bg-cyan-400/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Quick path</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{topicCopy.quickPathTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-100">{topicCopy.quickPathBody}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/app" className="rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Open app now
                </Link>
                <Link href={`/${page.category}`} className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/10">
                  More {page.category}
                </Link>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Use case</p>
              <h2 className="mt-3 text-2xl font-semibold">{topicCopy.workflowTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{topicCopy.workflowBody}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-400">
                {topicCopy.workflowSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Next read</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">Move through the same topic in the next most logical format: tool → template → guide.</p>
              <div className="mt-4 space-y-3">
                {topicJourney.map((topicPage) => (
                  <Link key={topicPage.slug} href={`/${topicPage.category}/${topicPage.slug}`} className="block rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-400/40 hover:bg-slate-950">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{prettifyCategory(topicPage.category)}</p>
                    <h3 className="mt-2 text-base font-semibold text-white">{topicPage.keyword}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{topicPage.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Same-topic cluster</p>
              <div className="mt-4 space-y-3">
                {topicPages.map((topicPage) => (
                  <Link key={topicPage.slug} href={`/${topicPage.category}/${topicPage.slug}`} className="block rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-400/40 hover:bg-slate-950">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{prettifyCategory(topicPage.category)}</p>
                    <h3 className="mt-2 text-base font-semibold text-white">{topicPage.keyword}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{topicPage.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h2 className="text-2xl font-semibold text-white">Ready to turn this workflow into a faster habit?</h2>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Open the app to generate a follow-up email, CRM note, and summary from one transcript.
              </p>
              <Link href="/app" className="mt-5 inline-flex rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Go to /app
              </Link>
            </div>
          </aside>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">FAQ</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Popular cluster paths</p>
              <h2 className="mt-3 text-2xl font-semibold">Move from this page to the next best resource</h2>
            </div>
            <p className="text-sm text-slate-400">{categoryMeta[page.category].intro}</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href={`/${page.category}`} className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-950">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Hub</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Browse all {page.category}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">See every {page.category.slice(0, -1)} page in this category and choose the highest-intent next click.</p>
            </Link>
            <Link href="/tools" className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-950">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Popular</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Tool-intent pages</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Send visitors toward generator, AI, and software keywords when they are ready to try a product.</p>
            </Link>
            <Link href="/app" className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-950">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Product</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Jump into the app</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Convert one transcript into summary, recap, CRM note, objections, and next-step outputs immediately.</p>
            </Link>
          </div>
        </section>

        <section className="mt-10 pb-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Related pages</p>
              <h2 className="mt-3 text-2xl font-semibold">Keep exploring the topic cluster</h2>
            </div>
            <p className="hidden text-sm text-slate-400 md:block">Cross-linked by explicit intent match, same-topic journeys, batch-level support pages, and category hubs.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedPages.map((relatedPage) => (
              <Link key={relatedPage.slug} href={`/${relatedPage.category}/${relatedPage.slug}`} className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{prettifyCategory(relatedPage.category)}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{relatedPage.keyword}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{relatedPage.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
