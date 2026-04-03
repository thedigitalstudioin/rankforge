import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE.url}/case-studies` },
  title: "SEO Case Studies — Proven Results | RankForge",
  description:
    "See real SEO results from RankForge clients. Case studies showing 340%+ traffic growth and proven ranking improvements. Results that speak.",
  openGraph: {
    title: "SEO Case Studies — Proven Results | RankForge",
    description:
      "See real SEO results from RankForge clients. Case studies showing 340%+ traffic growth and proven ranking improvements. Results that speak.",
    url: `${SITE.url}/case-studies`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: "RankForge Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Case Studies — Proven Results | RankForge",
    description:
      "See real SEO results from RankForge clients. Case studies showing 340%+ traffic growth and proven ranking improvements. Results that speak.",
    images: [`${SITE.url}/og-image.png`],
    creator: "@rankforge",
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
      name: "Case Studies",
      item: `${SITE.url}/case-studies`,
    },
  ],
};

export default function CaseStudiesLayout({
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
