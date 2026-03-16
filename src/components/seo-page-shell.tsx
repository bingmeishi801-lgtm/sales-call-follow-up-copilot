import Link from "next/link";
import { categoryMeta, getPagesByTopic, getRelatedPages, type SeoPage, type SeoPageCategory } from "@/lib/seo-pages";

function prettifyCategory(category: SeoPageCategory) {
  if (category === "tools") return "Tool";
  if (category === "templates") return "Template";
  return "Guide";
}

export function SeoPageShell({ page }: { page: SeoPage }) {
  const relatedPages = getRelatedPages(page, 6);
  const topicPages = getPagesByTopic(page.topic).filter((item) => item.slug !== page.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
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
          <div className="space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Why this page exists</p>
              <p className="mt-4 text-base leading-8 text-slate-300">{page.intro}</p>
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
          </div>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Use case</p>
              <h2 className="mt-3 text-2xl font-semibold">Built for real post-call workflow</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Instead of treating a transcript like a wall of text, the app turns it into usable follow-up assets such as a recap email, CRM-ready note, pain points, objections, and next steps.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-400">
                <li>Paste transcript</li>
                <li>Generate structured outputs</li>
                <li>Copy into email, CRM, or team handoff</li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Next read</p>
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
            <p className="hidden text-sm text-slate-400 md:block">Cross-linked by topic, category, and explicit intent match.</p>
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
