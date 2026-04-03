import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free SEO Audit — Get Your Report Today | RankForge",
  description:
    "Get a comprehensive free SEO audit for your website in 24 hours. Technical analysis, keyword opportunities and action plan included.",
  openGraph: {
    title: "Free SEO Audit — Get Your Report Today | RankForge",
    description:
      "Get a comprehensive free SEO audit for your website in 24 hours. Technical analysis, keyword opportunities and action plan included.",
    url: `${SITE.url}/free-audit`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: "Free SEO Audit by RankForge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Audit — Get Your Report Today | RankForge",
    description:
      "Get a comprehensive free SEO audit for your website in 24 hours. Technical analysis, keyword opportunities and action plan included.",
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
