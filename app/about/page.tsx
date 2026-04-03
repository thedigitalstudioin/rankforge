import type { Metadata } from "next";
import { SITE, TEAM_MEMBERS, COMPANY_VALUES } from "@/lib/constants";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE.url}/about` },
  title: "About RankForge — Expert SEO Agency | RankForge",
  description:
    "Learn about RankForge — a results-driven SEO agency helping businesses worldwide rank higher and grow organic traffic. Meet our team.",
  openGraph: {
    title: "About RankForge — Expert SEO Agency | RankForge",
    description:
      "Learn about RankForge — a results-driven SEO agency helping businesses worldwide rank higher and grow organic traffic. Meet our team.",
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: "About RankForge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About RankForge — Expert SEO Agency | RankForge",
    description:
      "Learn about RankForge — a results-driven SEO agency helping businesses worldwide rank higher and grow organic traffic. Meet our team.",
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
      name: "About",
      item: `${SITE.url}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutPageClient
        teamMembers={TEAM_MEMBERS}
        companyValues={COMPANY_VALUES}
      />
    </>
  );
}
