import type { Metadata } from "next";
import { FAQ_ITEMS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE.url}/pricing` },
  title: "SEO Pricing — Transparent Plans | RankForge",
  description:
    "Transparent SEO pricing plans starting at $999/mo. On-page SEO, technical SEO, link building and more. Compare plans and get started today.",
  openGraph: {
    title: "SEO Pricing — Transparent Plans | RankForge",
    description:
      "Transparent SEO pricing plans starting at $999/mo. On-page SEO, technical SEO, link building and more. Compare plans and get started today.",
    url: `${SITE.url}/pricing`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: "RankForge SEO Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Pricing — Transparent Plans | RankForge",
    description:
      "Transparent SEO pricing plans starting at $999/mo. On-page SEO, technical SEO, link building and more. Compare plans and get started today.",
    images: [`${SITE.url}/og-image.png`],
    creator: "@rankforge",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
