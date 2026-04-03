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
  title: "RankForge — Premium SEO Agency | We Don't Just Rank. We Dominate.",
  description:
    "RankForge is a premium SEO agency helping businesses dominate search rankings with data-driven strategies, technical excellence, and measurable results. Get your free SEO audit today.",
  openGraph: {
    title: "RankForge — Premium SEO Agency",
    description:
      "Data-driven SEO strategies that deliver measurable results for ambitious brands. 500+ projects delivered, 98% client retention.",
    url: "https://rankforge.com",
    siteName: "RankForge",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankForge — Premium SEO Agency",
    description:
      "Data-driven SEO strategies that deliver measurable results for ambitious brands.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
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
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
