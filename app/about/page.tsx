import type { Metadata } from "next";
import { SITE, TEAM_MEMBERS, COMPANY_VALUES } from "@/lib/constants";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About RankForge — Our Story, Mission & Team",
  description:
    "Learn about RankForge's mission to help businesses dominate search rankings. Meet our expert team and discover our data-driven approach to SEO.",
  openGraph: {
    title: "About RankForge — Our Story, Mission & Team",
    description:
      "Learn about RankForge's mission to help businesses dominate search rankings. Meet our expert team and discover our data-driven approach to SEO.",
    url: `${SITE.url}/about`,
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
