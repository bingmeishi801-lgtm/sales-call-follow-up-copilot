"use client";

import Link from "next/link";
import { useEffect } from "react";
import { SignInButton } from "@/components/sign-in-button";
import { WaitlistForm } from "@/components/waitlist-form";
import { trackEvent } from "@/lib/analytics";
import { getBatchPagesByCategory, getFeaturedPages, getPagesByCategory, seoPages } from "@/lib/seo-pages";

const features = [
  {
    title: "Sales-ready follow-up email",
    description: "Generate a concise, professional email right after the call while the conversation is still fresh.",
  },
  {
    title: "CRM-ready notes",
    description: "Turn the transcript into a structured note your team can copy into HubSpot or any CRM.",
  },
  {
    title: "Pain points & objections",
    description: "Capture the buying signals, blockers, and objections before they disappear into scattered notes.",
  },
  {
    title: "Actionable next steps",
    description: "Leave every call with a clear next-step list instead of vague follow-up promises.",
  },
];

const stats = [
  { label: "Outputs per call", value: "6" },
  { label: "Setup time", value: "< 5 min" },
  { label: "SEO pages live", value: String(seoPages.length) },
];

const testimonials = [
  {
    quote: "Exactly the kind of tool that saves founders from doing admin work after every call.",
    author: "Early-stage SaaS operator",
  },
  {
    quote: "The difference is that this feels like a sales workflow, not just another AI summarizer.",
    author: "Revenue consultant",
  },
];

const hubCards = [
  {
    title: "Tools",
    href: "/tools",
    description: "Intent-driven pages for people actively looking for generators, AI tools, and summary software.",
  },
  {
    title: "Templates",
    href: "/templates",
    description: "Reusable structures for follow-up emails, discovery notes, CRM updates, and recap formats.",
  },
  {
    title: "Guides",
    href: "/guides",
    description: "Educational pages covering best practices, tips, and how-to workflows for post-call execution.",
  },
];

const featuredPages = getFeaturedPages().slice(0, 12);
const toolPages = getPagesByCategory("tools").slice(0, 4);
const templatePages = getPagesByCategory("templates").slice(0, 4);
const guidePages = getPagesByCategory("guides").slice(0, 4);
const batchFourTools = getBatchPagesByCategory("tools", 4, 4);
const batchFourTemplates = getBatchPagesByCategory("templates", 4, 4);
const batchFourGuides = getBatchPagesByCategory("guides", 4, 4);
const batchFiveTools = getBatchPagesByCategory("tools", 5, 4);
const batchFiveTemplates = getBatchPagesByCategory("templates", 5, 4);
const batchFiveGuides = getBatchPagesByCategory("guides", 5, 4);

export default function Home() {
  useEffect(() => {
    void trackEvent("page_view", { page: "landing" });
  }, []);

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.16em] text-cyan-200 uppercase">
          Sales Call Follow-up Copilot
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="/tools" className="hover:text-white">Tools</Link>
            <Link href="/templates" className="hover:text-white">Templates</Link>
            <Link href="/guides" className="hover:text-white">Guides</Link>
          </nav>
          <SignInButton dark />
          <Link
            href="/app"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Open app
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:pb-24 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
              Post-call admin, without the busywork
            </div>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Turn every sales call transcript into a polished follow-up workflow.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Generate follow-up emails, CRM notes, pain points, objections, and next steps from one transcript. Built for founders and lean sales teams that need speed without losing quality.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Try the live demo
              </Link>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Join the waitlist
              </a>
            </div>
            <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-medium text-cyan-200">Live output preview</p>
                  <p className="mt-1 text-xs text-slate-400">From one transcript to multiple post-call assets</p>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Ready</div>
              </div>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-medium text-slate-300">Follow-up Email</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Thanks again for the conversation today. Based on what you shared, the main priorities are speeding up rep follow-up and making CRM updates more consistent...
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium text-slate-300">Pain Points</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-400">
                      <li>Manual recap work takes too long</li>
                      <li>Managers lack consistent visibility</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium text-slate-300">Next Steps</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-400">
                      <li>Send recap with pricing overview</li>
                      <li>Book a short team demo this week</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">SEO structure</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A scalable content architecture for tools, templates, and guides</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            The site now groups keyword pages by search intent so it is easier to expand the cluster over time and easier for visitors to find the right entry point.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {hubCards.map((card) => (
            <Link key={card.title} href={card.href} className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Featured pages</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{seoPages.length} SEO pages live, with batch 4 and batch 5 wired into the main cluster</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Start from the strongest entry pages, then branch into tools, templates, and guides based on search intent.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredPages.map((page) => (
              <Link key={page.slug} href={`/${page.category}/${page.slug}`} className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-950">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{page.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{page.keyword}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">New keyword batches</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Batch 4 and batch 5 now have homepage exposure instead of hiding in deep detail routes</h2>
          </div>
          <Link href="/tools" className="text-sm font-medium text-cyan-200 hover:text-cyan-100">Browse all clusters →</Link>
        </div>
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {[
            ["Batch 4", [["Tools", batchFourTools, "/tools"], ["Templates", batchFourTemplates, "/templates"], ["Guides", batchFourGuides, "/guides"]]],
            ["Batch 5", [["Tools", batchFiveTools, "/tools"], ["Templates", batchFiveTemplates, "/templates"], ["Guides", batchFiveGuides, "/guides"]]],
          ].map(([batchLabel, groups]) => (
            <div key={batchLabel as string} className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-white">{batchLabel as string}</h3>
                <span className="text-sm text-cyan-100">Fresh pages exposed from the homepage</span>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {(groups as [string, ReturnType<typeof getPagesByCategory>, string][]).map(([label, pages, href]) => (
                  <div key={label}>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h4 className="text-lg font-semibold text-white">{label}</h4>
                      <Link href={href} className="text-sm text-cyan-100 hover:text-white">View all</Link>
                    </div>
                    <div className="space-y-3">
                      {pages.map((page) => (
                        <Link key={page.slug} href={`/${page.category}/${page.slug}`} className="block rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-300 hover:bg-slate-950">
                          <h4 className="text-base font-semibold text-white">{page.keyword}</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-300">{page.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Popular clusters</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Browse by search intent, then jump to the next best page</h2>
          </div>
          <Link href="/app" className="text-sm font-medium text-cyan-200 hover:text-cyan-100">Or skip straight to the product →</Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ["Tools", toolPages, "/tools"],
            ["Templates", templatePages, "/templates"],
            ["Guides", guidePages, "/guides"],
          ].map(([label, pages, href]) => (
            <div key={label as string} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{label as string}</h3>
                <Link href={href as string} className="text-sm text-cyan-200 hover:text-cyan-100">View all</Link>
              </div>
              <div className="mt-5 space-y-3">
                {(pages as ReturnType<typeof getPagesByCategory>).map((page) => (
                  <Link key={page.slug} href={`/${page.category}/${page.slug}`} className="block rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-400/40 hover:bg-slate-950">
                    <h4 className="text-base font-semibold text-white">{page.keyword}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{page.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Features</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for the work that happens after the sales call
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Most AI tools stop at a generic summary. This one is designed to help you actually finish the follow-up work.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["Paste transcript", "Drop in a transcript from your discovery call, demo, or follow-up conversation."],
              ["Generate assets", "Get structured outputs for email, CRM, objections, pain points, summaries, and next steps."],
              ["Copy and move", "Use the outputs immediately in your CRM, inbox, recap doc, or team workflow."],
            ].map(([title, description], index) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg leading-8 text-white">“{item.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">{item.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-8 lg:grid-cols-[1fr_0.9fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Waitlist</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Want the polished version as it ships?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Join the waitlist to get updates as we add auth, production-grade analytics, CRM integrations, and more reliable AI outputs.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <WaitlistForm source="landing" dark />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Sales Call Follow-up Copilot</p>
          <div className="flex items-center gap-4">
            <Link href="/tools" className="hover:text-white">Tools</Link>
            <Link href="/templates" className="hover:text-white">Templates</Link>
            <Link href="/guides" className="hover:text-white">Guides</Link>
            <Link href="/app" className="hover:text-white">App</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
