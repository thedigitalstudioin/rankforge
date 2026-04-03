import type { Metadata } from "next";
import { SITE, SERVICES } from "@/lib/constants";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE.url}/services` },
  title: "Our SEO Services — Full-Service SEO | RankForge",
  description:
    "Explore RankForge's full suite of SEO services. On-page, technical, link building, local SEO, content strategy & audits. Get a free audit today!",
  openGraph: {
    title: "Our SEO Services — Full-Service SEO | RankForge",
    description:
      "Explore RankForge's full suite of SEO services. On-page, technical, link building, local SEO, content strategy & audits. Get a free audit today!",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: "RankForge SEO Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our SEO Services — Full-Service SEO | RankForge",
    description:
      "Explore RankForge's full suite of SEO services. On-page, technical, link building, local SEO, content strategy & audits. Get a free audit today!",
    images: [`${SITE.url}/og-image.png`],
    creator: "@rankforge",
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
