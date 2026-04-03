import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free SEO Audit — Get Your Comprehensive Report in 24 Hours",
  description:
    "Get a free, comprehensive SEO audit for your website in just 24 hours. Includes technical health score, keyword opportunities, competitor analysis, and a priority action plan.",
  openGraph: {
    title: "Free SEO Audit — Get Your Comprehensive Report in 24 Hours",
    description:
      "Get a free, comprehensive SEO audit for your website in just 24 hours.",
    url: `${SITE.url}/free-audit`,
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
      name: "Free SEO Audit",
      item: `${SITE.url}/free-audit`,
    },
  ],
};

export default function FreeAuditLayout({
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
