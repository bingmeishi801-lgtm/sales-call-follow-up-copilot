import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/app`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/templates`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/analytics`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];

  const seoEntries: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${siteConfig.url}/${page.category}/${page.slug}`,
    lastModified: now,
    changeFrequency: page.category === "guides" ? "monthly" : "weekly",
    priority: page.category === "tools" ? 0.8 : 0.75,
  }));

  return [...staticPages, ...seoEntries];
}
