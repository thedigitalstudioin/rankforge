import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies — Proven SEO Results & Client Success Stories",
  description:
    "See how RankForge delivers measurable SEO results. Explore real case studies with before-and-after metrics from clients across e-commerce, SaaS, healthcare, and more.",
  openGraph: {
    title: "Case Studies — Proven SEO Results & Client Success Stories",
    description:
      "See how RankForge delivers measurable SEO results. Explore real case studies with before-and-after metrics from clients across e-commerce, SaaS, healthcare, and more.",
    url: `${SITE.url}/case-studies`,
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
