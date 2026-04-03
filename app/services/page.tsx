import type { Metadata } from "next";
import { SITE, SERVICES } from "@/lib/constants";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "SEO Services — Comprehensive Solutions for Search Dominance",
  description:
    "Explore RankForge's full suite of SEO services: on-page SEO, technical SEO, link building, local SEO, content strategy, and SEO audits.",
  openGraph: {
    title: "SEO Services — Comprehensive Solutions for Search Dominance",
    description:
      "Explore RankForge's full suite of SEO services: on-page SEO, technical SEO, link building, local SEO, content strategy, and SEO audits.",
    url: `${SITE.url}/services`,
  },
};

const serviceSchemaItems = SERVICES.map((service) => ({
  "@type": "Service",
  name: service.title,
  description: service.longDesc,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
}));

const jsonLd = [
  {
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
        name: "Services",
        item: `${SITE.url}/services`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: serviceSchemaItems.map((svc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: svc,
    })),
  },
];

export default function ServicesPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicesPageClient />
    </>
  );
}
