import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO Blog — Insights, Tips & Industry Resources",
  description:
    "Stay ahead of the curve with RankForge's SEO blog. Expert insights, actionable tips, technical guides, and industry resources to boost your search rankings.",
  openGraph: {
    title: "SEO Blog — Insights, Tips & Industry Resources",
    description:
      "Expert SEO insights, actionable tips, and industry resources from the RankForge team.",
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE.url}/blog`,
    },
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
