import Link from "next/link";
import {
  categoryMeta,
  getBatchPagesByCategory,
  getFeaturedPagesByCategory,
  getPagesByCategory,
  type SeoPageCategory,
} from "@/lib/seo-pages";

export function SeoHubPage({ category }: { category: SeoPageCategory }) {
  const meta = categoryMeta[category];
  const pages = getPagesByCategory(category);
  const featured = getFeaturedPagesByCategory(category, 6);
  const batchFour = getBatchPagesByCategory(category, 4, 6);
  const batchFive = getBatchPagesByCategory(category, 5, 6);
  const highlightedFreshPages = [...batchFive, ...batchFour].slice(0, 9);

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
              Sales Call Follow-up Copilot
            </Link>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">{meta.title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300">{meta.intro}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/app" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Open app
            </Link>
            <Link href="/" className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10">
              Back home
            </Link>
          </div>
        </header>

        <section className="py-10">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Cluster overview</p>
              <h2 className="mt-3 text-2xl font-semibold">Browse every {category}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                This hub now works as a stronger internal-linking layer: visitors can jump from category pages into high-intent detail pages, then move across same-topic clusters and back into the app.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-2xl font-semibold text-white">{pages.length}</p>
                  <p className="mt-1 text-sm text-slate-400">Pages in this hub</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-2xl font-semibold text-white">{batchFour.length}</p>
                  <p className="mt-1 text-sm text-slate-400">Batch 4 surfaced</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-2xl font-semibold text-white">{batchFive.length}</p>
                  <p className="mt-1 text-sm text-slate-400">Batch 5 surfaced</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-2xl font-semibold text-white">/app</p>
                  <p className="mt-1 text-sm text-slate-400">Natural conversion path</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Featured entries</p>
              <div className="mt-4 space-y-3">
                {featured.map((page) => (
                  <Link key={page.slug} href={`/${page.category}/${page.slug}`} className="block rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-400/40 hover:bg-slate-950">
                    <h3 className="text-base font-semibold text-white">{page.keyword}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{page.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">New in batch 4 + 5</p>
              <h2 className="mt-3 text-2xl font-semibold">Fresh keyword pages pushed into this hub</h2>
            </div>
            <p className="hidden text-sm text-slate-400 md:block">These links make sure the newest pages are not orphaned inside the larger cluster.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highlightedFreshPages.map((page) => (
              <Link key={page.slug} href={`/${page.category}/${page.slug}`} className="rounded-[24px] border border-cyan-400/20 bg-cyan-400/10 p-5 transition hover:border-cyan-300 hover:bg-cyan-400/15">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-100">batch {page.batch}</p>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-slate-200">{page.topic.replace(/-/g, " ")}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-white">{page.keyword}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-200">{page.description}</p>
                <p className="mt-4 text-sm font-medium text-cyan-100">Open page →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/${category}/${page.slug}`}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{category.slice(0, -1)}</p>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-slate-300">{page.topic.replace(/-/g, " ")}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white">{page.keyword}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{page.description}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-cyan-200">Open page →</p>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-slate-300">batch {page.batch}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
