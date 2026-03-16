import Link from "next/link";
import { categoryMeta, getPagesByCategory, type SeoPageCategory } from "@/lib/seo-pages";

export function SeoHubPage({ category }: { category: SeoPageCategory }) {
  const meta = categoryMeta[category];
  const pages = getPagesByCategory(category);

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
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/${category}/${page.slug}`}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{category.slice(0, -1)}</p>
                <h2 className="mt-3 text-xl font-semibold text-white">{page.keyword}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{page.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
