import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/data/services";
import { ALL_COUNTRIES } from "@/data/countries";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://seo-rankforge.pages.dev";
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/free-audit`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];

  // Level 1: Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Level 2: Service + Country pages
  const countryPages: MetadataRoute.Sitemap = [];
  for (const serviceSlug of SERVICE_SLUGS) {
    for (const country of ALL_COUNTRIES) {
      countryPages.push({
        url: `${baseUrl}/services/${serviceSlug}/${country.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // Level 3: Service + Country + City pages
  const cityPages: MetadataRoute.Sitemap = [];
  for (const serviceSlug of SERVICE_SLUGS) {
    for (const country of ALL_COUNTRIES) {
      for (const city of country.cities) {
        cityPages.push({
          url: `${baseUrl}/services/${serviceSlug}/${country.slug}/${city.slug}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        });
      }
    }
  }

  return [...staticPages, ...servicePages, ...countryPages, ...cityPages];
}
