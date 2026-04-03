import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import ServicesOverview from "@/components/home/ServicesOverview";
import StatsSection from "@/components/home/StatsSection";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  alternates: { canonical: "https://seo-rankforge.pages.dev" },
  title: "SEO Services — Rank Higher, Convert More | RankForge",
  description:
    "RankForge delivers expert SEO services to boost your Google rankings. 500+ businesses helped. Get your free SEO audit today!",
  openGraph: {
    title: "SEO Services — Rank Higher, Convert More | RankForge",
    description:
      "RankForge delivers expert SEO services to boost your Google rankings. 500+ businesses helped. Get your free SEO audit today!",
    url: "https://seo-rankforge.pages.dev",
    siteName: "RankForge",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://seo-rankforge.pages.dev/og-image.png", width: 1200, height: 630, alt: "RankForge SEO Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services — Rank Higher, Convert More | RankForge",
    description:
      "RankForge delivers expert SEO services to boost your Google rankings. 500+ businesses helped. Get your free SEO audit today!",
    images: ["https://seo-rankforge.pages.dev/og-image.png"],
    creator: "@rankforge",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      email: SITE.email,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Digital Drive, Suite 500",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    sameAs: Object.values(SITE.socials),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
];

export default function HomePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <HeroSection />

      <section className="py-20 md:py-32">
        <TrustedBy />
      </section>

      <section className="py-20 md:py-32">
        <ServicesOverview />
      </section>

      <StatsSection />

      <section className="py-20 md:py-32">
        <HowItWorks />
      </section>

      <section className="py-20 md:py-32">
        <Testimonials />
      </section>

      <section className="py-20 md:py-32">
        <CTABanner />
      </section>
    </>
  );
}
