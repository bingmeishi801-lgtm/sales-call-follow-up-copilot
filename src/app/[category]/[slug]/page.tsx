import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageShell } from "@/components/seo-page-shell";
import { seoPageMap, seoPages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

type RouteParams = {
  category: string;
  slug: string;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({
    category: page.category,
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const page = seoPageMap[resolvedParams.slug];

  if (!page || page.category !== resolvedParams.category) {
    return {};
  }

  const pageUrl = `/${page.category}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [page.keyword, page.topic.replace(/-/g, " "), page.category, siteConfig.name],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: pageUrl,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function SeoKeywordPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const resolvedParams = await params;
  const page = seoPageMap[resolvedParams.slug];

  if (!page || page.category !== resolvedParams.category) {
    notFound();
  }

  return <SeoPageShell page={page} />;
}
