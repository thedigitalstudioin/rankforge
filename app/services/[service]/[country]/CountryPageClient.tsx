"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BreadcrumbNav from "@/components/programmatic/BreadcrumbNav";
import ServiceHero from "@/components/programmatic/ServiceHero";
import ContentSection from "@/components/programmatic/ContentSection";
import ServiceFeatureList from "@/components/programmatic/ServiceFeatureList";
import ProcessTimeline from "@/components/programmatic/ProcessTimeline";
import StatsHighlight from "@/components/programmatic/StatsHighlight";
import IndustryGrid from "@/components/programmatic/IndustryGrid";
import FAQAccordion from "@/components/programmatic/FAQAccordion";
import CTASection from "@/components/programmatic/CTASection";
import DigitalTransformation from "@/components/programmatic/DigitalTransformation";
import SuccessBlueprint from "@/components/programmatic/SuccessBlueprint";
import CommonMistakes from "@/components/programmatic/CommonMistakes";
import ROICalculation from "@/components/programmatic/ROICalculation";
import BeforeAfterComparison from "@/components/programmatic/BeforeAfterComparison";
import TestimonialSpotlight from "@/components/programmatic/TestimonialSpotlight";
import CaseStudyMini from "@/components/programmatic/CaseStudyMini";
import TrustBadges from "@/components/programmatic/TrustBadges";
import PricingPreview from "@/components/programmatic/PricingPreview";
import RelatedBlogPosts from "@/components/programmatic/RelatedBlogPosts";
import DidYouKnow from "@/components/programmatic/DidYouKnow";
import FreeAuditRichCTA from "@/components/programmatic/FreeAuditRichCTA";
import WhatWeDoNotDo from "@/components/programmatic/WhatWeDoNotDo";
import ToolsTechnology from "@/components/programmatic/ToolsTechnology";
import DeliverablesOverview from "@/components/programmatic/DeliverablesOverview";
import type { SectionId, CountryPageSectionData } from "@/data/section-orchestrator";

interface CountryPageClientProps {
  service: {
    slug: string;
    title: string;
    shortTitle: string;
    features: string[];
    processSteps: { title: string; description: string }[];
    stats: { value: string; label: string }[];
  };
  country: {
    name: string;
    slug: string;
    flag: string;
    topIndustries: string[];
    cities: { name: string; slug: string; region?: string }[];
    regionGroups?: Record<string, string[]>;
  };
  content: {
    heroSubtitle: string;
    aboutParagraphs: string[];
    whyNeeded: string[];
    faqs: { question: string; answer: string }[];
  };
  otherCountries: { name: string; slug: string; flag: string }[];
  orchestration: CountryPageSectionData;
}

export default function CountryPageClient({
  service,
  country,
  content,
  otherCountries,
  orchestration,
}: CountryPageClientProps) {
  const regionGroups = country.regionGroups;
  const hasRegions = regionGroups && Object.keys(regionGroups).length > 0;

  const orderedSections = orchestration.sections.sort(
    (a, b) => a.order - b.order
  );

  return (
    <>
      {orderedSections.map((section) => {
        switch (section.id) {
          case "breadcrumb":
            return (
              <div key={section.id} className="container mx-auto px-4">
                <BreadcrumbNav
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    {
                      label: service.title,
                      href: `/services/${service.slug}`,
                    },
                    { label: country.name },
                  ]}
                />
              </div>
            );

          case "hero":
            return (
              <ServiceHero
                key={section.id}
                title={`${service.title} Services in ${country.name} ${country.flag}`}
                subtitle={content.heroSubtitle}
                ctaText={`Get Free Audit for ${country.name}`}
              />
            );

          case "trust-badges":
            return (
              <TrustBadges
                key={section.id}
                badges={orchestration.trustBadges.badges}
              />
            );

          case "about":
            return (
              <ContentSection
                key={section.id}
                title={`Expert ${service.shortTitle} for ${country.name} Businesses`}
                paragraphs={content.aboutParagraphs}
              />
            );

          case "why-needed":
            return (
              <ContentSection
                key={section.id}
                title={`Why ${country.name} Businesses Need ${service.shortTitle}`}
                paragraphs={content.whyNeeded}
              />
            );

          case "digital-transformation":
            return (
              <DigitalTransformation
                key={section.id}
                location={country.name}
                digitalMaturity={orchestration.digitalTransformation.digitalMaturity}
                internetPenetration={orchestration.digitalTransformation.internetPenetration}
                mobileSearchShare={orchestration.digitalTransformation.mobileSearchShare}
                narrative={orchestration.digitalTransformation.narrative}
              />
            );

          case "success-blueprint":
            return (
              <SuccessBlueprint
                key={section.id}
                location={country.name}
                serviceName={service.shortTitle}
                milestones={orchestration.successBlueprint.milestones}
              />
            );

          case "common-mistakes":
            return (
              <CommonMistakes
                key={section.id}
                location={country.name}
                serviceName={service.shortTitle}
                mistakes={orchestration.commonMistakes.mistakes}
              />
            );

          case "roi-calculation":
            return (
              <ROICalculation
                key={section.id}
                serviceName={service.shortTitle}
                location={country.name}
                investmentRange={orchestration.roiCalculation.investmentRange}
                expectedReturns={orchestration.roiCalculation.expectedReturns}
                roiNarrative={orchestration.roiCalculation.roiNarrative}
              />
            );

          case "stats-grid":
            return (
              <StatsHighlight
                key={section.id}
                stats={service.stats}
                title={`Our ${country.name} Results`}
              />
            );

          case "before-after":
            return (
              <BeforeAfterComparison
                key={section.id}
                comparisons={orchestration.beforeAfter.comparisons}
              />
            );

          case "whats-included":
            return (
              <ServiceFeatureList
                key={section.id}
                features={service.features}
                title={`Our ${service.title} Services in ${country.name} Include`}
                context={`Everything you need to dominate search in the ${country.name} market.`}
              />
            );

          case "whats-not-included":
            return (
              <WhatWeDoNotDo
                key={section.id}
                serviceName={service.shortTitle}
                items={orchestration.whatsNotIncluded.items}
              />
            );

          case "process-timeline":
            return (
              <ProcessTimeline
                key={section.id}
                steps={service.processSteps}
                title={`How We Deliver ${service.title} in ${country.name}`}
              />
            );

          case "tools-technology":
            return (
              <ToolsTechnology
                key={section.id}
                tools={orchestration.tools.tools}
              />
            );

          case "testimonial-spotlight":
            return (
              <TestimonialSpotlight
                key={section.id}
                {...orchestration.testimonial}
              />
            );

          case "case-study-mini":
            return (
              <CaseStudyMini
                key={section.id}
                {...orchestration.caseStudy}
              />
            );

          case "pricing-preview":
            return (
              <PricingPreview
                key={section.id}
                tiers={orchestration.pricingPreview.tiers}
                serviceName={service.shortTitle}
              />
            );

          case "related-blog-posts":
            return (
              <RelatedBlogPosts
                key={section.id}
                posts={orchestration.blogPosts.posts}
              />
            );

          case "industry-grid":
            return (
              <IndustryGrid
                key={section.id}
                industries={country.topIndustries}
                title={`Industries We Serve Across ${country.name}`}
                location={country.name}
              />
            );

          case "did-you-know":
            return (
              <DidYouKnow
                key={section.id}
                facts={orchestration.didYouKnow.facts}
                location={country.name}
              />
            );

          case "free-audit-rich-cta":
            return (
              <FreeAuditRichCTA key={section.id} location={country.name} />
            );

          case "city-grid":
            return (
              <section key={section.id} className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center">
                    {service.title} Services Across {country.name}
                  </h2>
                  <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
                    We serve businesses in {country.cities.length} cities
                    across {country.name}.
                  </p>

                  {hasRegions ? (
                    Object.entries(regionGroups!).map(([region, slugs]) => {
                      const regionCities = slugs
                        .map((slug) =>
                          country.cities.find((c) => c.slug === slug)
                        )
                        .filter(Boolean) as {
                        name: string;
                        slug: string;
                      }[];
                      if (regionCities.length === 0) return null;
                      return (
                        <div key={region} className="mb-10">
                          <h3 className="text-xl font-semibold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
                            {region}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {regionCities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/services/${service.slug}/${country.slug}/${city.slug}`}
                                className="inline-block px-4 py-2 rounded-full text-sm glass hover:border-primary/40 hover:text-primary text-text-muted transition-all duration-200 hover:shadow-[0_0_15px_rgba(108,92,231,0.15)]"
                              >
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex flex-wrap justify-center gap-2">
                      {country.cities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/services/${service.slug}/${country.slug}/${city.slug}`}
                          className="inline-block px-4 py-2 rounded-full text-sm glass hover:border-primary/40 hover:text-primary text-text-muted transition-all duration-200 hover:shadow-[0_0_15px_rgba(108,92,231,0.15)]"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            );

          case "faq":
            return <FAQAccordion key={section.id} faqs={content.faqs} />;

          case "primary-cta":
            return (
              <CTASection
                key={section.id}
                title={`Ready to Dominate Search in ${country.name}?`}
                subtitle={`Join hundreds of ${country.name} businesses that trust us.`}
              />
            );

          case "other-countries":
            return (
              <section key={section.id} className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6 text-center">
                    We Also Serve
                  </h2>
                  <div className="flex flex-wrap justify-center gap-3">
                    {otherCountries.map((c, i) => (
                      <motion.div
                        key={c.slug}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02 }}
                      >
                        <Link
                          href={`/services/${service.slug}/${c.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm glass hover:border-primary/40 hover:text-primary text-text-muted transition-all duration-200"
                        >
                          <span>{c.flag}</span>
                          <span>{c.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
