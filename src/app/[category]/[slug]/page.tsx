import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageShell } from "@/components/seo-page-shell";
import { seoPageMap, seoPages } from "@/lib/seo-pages";

export function generateStaticParams() {
  return seoPages.map((page) => ({
    category: page.category,
    slug: page.slug,
  }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }): Metadata {
  const page = seoPageMap[params.slug];

  if (!page || page.category !== params.category) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default function SeoKeywordPage({ params }: { params: { category: string; slug: string } }) {
  const page = seoPageMap[params.slug];

  if (!page || page.category !== params.category) {
    notFound();
  }

  return <SeoPageShell page={page} />;
}
