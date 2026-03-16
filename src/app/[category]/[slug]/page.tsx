import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageShell } from "@/components/seo-page-shell";
import { seoPageMap, seoPages } from "@/lib/seo-pages";

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

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.category}/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/${page.category}/${page.slug}`,
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
