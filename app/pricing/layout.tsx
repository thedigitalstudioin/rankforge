import type { Metadata } from "next";
import { FAQ_ITEMS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO Pricing — Transparent Plans for Every Business Size",
  description:
    "Explore RankForge's transparent SEO pricing plans designed for every business size. From startups to enterprises, find the perfect plan to dominate search rankings.",
  openGraph: {
    title: "SEO Pricing — Transparent Plans for Every Business Size",
    description:
      "Explore RankForge's transparent SEO pricing plans designed for every business size.",
    url: `${SITE.url}/pricing`,
    siteName: SITE.name,
    type: "website",
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
