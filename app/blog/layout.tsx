import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE.url}/blog` },
  title: "SEO Blog — Tips, Guides & Insights | RankForge",
  description:
    "Read the latest SEO tips, strategies and industry insights on the RankForge blog. Actionable guides to improve your search rankings.",
  openGraph: {
    title: "SEO Blog — Tips, Guides & Insights | RankForge",
    description:
      "Read the latest SEO tips, strategies and industry insights on the RankForge blog. Actionable guides to improve your search rankings.",
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: "RankForge SEO Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Blog — Tips, Guides & Insights | RankForge",
    description:
      "Read the latest SEO tips, strategies and industry insights on the RankForge blog. Actionable guides to improve your search rankings.",
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
