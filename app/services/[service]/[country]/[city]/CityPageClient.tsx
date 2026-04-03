"use client";

import BreadcrumbNav from "@/components/programmatic/BreadcrumbNav";
import ServiceHero from "@/components/programmatic/ServiceHero";
import ContentSection from "@/components/programmatic/ContentSection";
import ServiceFeatureList from "@/components/programmatic/ServiceFeatureList";
import IndustryGrid from "@/components/programmatic/IndustryGrid";
import ProcessTimeline from "@/components/programmatic/ProcessTimeline";
import StatsHighlight from "@/components/programmatic/StatsHighlight";
import FAQAccordion from "@/components/programmatic/FAQAccordion";
import RelatedServices from "@/components/programmatic/RelatedServices";
import RelatedCities from "@/components/programmatic/RelatedCities";
import CTASection from "@/components/programmatic/CTASection";
import CompetitiveLandscape from "@/components/programmatic/CompetitiveLandscape";
import DigitalTransformation from "@/components/programmatic/DigitalTransformation";
import SuccessBlueprint from "@/components/programmatic/SuccessBlueprint";
import CommonMistakes from "@/components/programmatic/CommonMistakes";
import ROICalculation from "@/components/programmatic/ROICalculation";
import BeforeAfterComparison from "@/components/programmatic/BeforeAfterComparison";
import GrowthTimeline from "@/components/programmatic/GrowthTimeline";
import TestimonialSpotlight from "@/components/programmatic/TestimonialSpotlight";
import CaseStudyMini from "@/components/programmatic/CaseStudyMini";
import TrustBadges from "@/components/programmatic/TrustBadges";
import PricingPreview from "@/components/programmatic/PricingPreview";
import RelatedBlogPosts from "@/components/programmatic/RelatedBlogPosts";
import IndustryDeepDive from "@/components/programmatic/IndustryDeepDive";
import DidYouKnow from "@/components/programmatic/DidYouKnow";
import FreeAuditRichCTA from "@/components/programmatic/FreeAuditRichCTA";
import WhatWeDoNotDo from "@/components/programmatic/WhatWeDoNotDo";
import ToolsTechnology from "@/components/programmatic/ToolsTechnology";
import DeliverablesOverview from "@/components/programmatic/DeliverablesOverview";
import type { GeneratedPageContent } from "@/data/types";
import type { CityPageSectionData, SectionId } from "@/data/section-orchestrator";

interface CityPageClientProps {
  service: {
    slug: string;
    title: string;
    shortTitle: string;
    features: string[];
    processSteps: { title: string; description: string }[];
    stats: { value: string; label: string }[];
  };
  city: { name: string; slug: string };
  country: { name: string; slug: string };
  content: GeneratedPageContent;
  nearbyCities: { name: string; slug: string }[];
  orchestration: CityPageSectionData;
}

export default function CityPageClient({
  service,
  city,
  country,
  content,
  nearbyCities,
  orchestration,
}: CityPageClientProps) {
  const sectionSet = new Set(orchestration.sections.map((s) => s.id));

  function has(id: SectionId): boolean {
    return sectionSet.has(id);
  }

  // Render sections in orchestrated order
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
                    {
                      label: country.name,
                      href: `/services/${service.slug}/${country.slug}`,
                    },
                    { label: city.name },
                  ]}
                />
              </div>
            );

          case "hero":
            return (
              <ServiceHero
                key={section.id}
                title={`${service.title} Services in ${city.name}`}
                subtitle={content.heroSubtitle}
                ctaText={`Get Free Audit for Your ${city.name} Business`}
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
                title={`${service.shortTitle} Experts Serving ${city.name} Businesses`}
                paragraphs={content.aboutParagraphs}
              />
            );

          case "why-needed":
            return (
              <ContentSection
                key={section.id}
                title={`Why ${city.name} Businesses Need ${service.shortTitle}`}
                paragraphs={content.whyNeeded}
              />
            );

          case "market-insights":
            return (
              <ContentSection
                key={section.id}
                title={`${city.name} Search Market Insights`}
                paragraphs={content.marketInsights}
              />
            );

          case "competitive-landscape":
            return (
              <CompetitiveLandscape
                key={section.id}
                cityName={city.name}
                competitionLevel={orchestration.competitiveLandscape.competitionLevel as "very high" | "high" | "moderate" | "growing" | "emerging"}
                searchBehavior={
                  orchestration.competitiveLandscape.searchBehavior
                }
                topCompetitorIndustries={
                  orchestration.competitiveLandscape.topCompetitorIndustries
                }
              />
            );

          case "digital-transformation":
            return (
              <DigitalTransformation
                key={section.id}
                location={city.name}
                digitalMaturity={
                  orchestration.digitalTransformation.digitalMaturity
                }
                internetPenetration={
                  orchestration.digitalTransformation.internetPenetration
                }
                mobileSearchShare={
                  orchestration.digitalTransformation.mobileSearchShare
                }
                narrative={orchestration.digitalTransformation.narrative}
              />
            );

          case "success-blueprint":
            return (
              <SuccessBlueprint
                key={section.id}
                location={city.name}
                serviceName={service.shortTitle}
                milestones={orchestration.successBlueprint.milestones}
              />
            );

          case "common-mistakes":
            return (
              <CommonMistakes
                key={section.id}
                location={city.name}
                serviceName={service.shortTitle}
                mistakes={orchestration.commonMistakes.mistakes}
              />
            );

          case "roi-calculation":
            return (
              <ROICalculation
                key={section.id}
                serviceName={service.shortTitle}
                location={city.name}
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
                title={`${city.name} Client Results`}
              />
            );

          case "before-after":
            return (
              <BeforeAfterComparison
                key={section.id}
                comparisons={orchestration.beforeAfter.comparisons}
                title={`Before & After: Real ${city.name} Results`}
              />
            );

          case "growth-timeline":
            return (
              <GrowthTimeline
                key={section.id}
                serviceName={service.shortTitle}
                location={city.name}
                phases={orchestration.growthTimeline.phases}
              />
            );

          case "whats-included":
            return (
              <ServiceFeatureList
                key={section.id}
                features={service.features}
                title={`Our ${service.title} Services in ${city.name} Include`}
                context={`Comprehensive ${service.shortTitle} tailored for the ${city.name} market.`}
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
                title={`How We Deliver ${service.title} in ${city.name}`}
                context={`Our proven process adapted for ${city.name} businesses.`}
              />
            );

          case "tools-technology":
            return (
              <ToolsTechnology
                key={section.id}
                tools={orchestration.tools.tools}
                title={`Tools & Technology Behind Our ${city.name} Results`}
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

          case "industry-deep-dive":
            return (
              <IndustryDeepDive
                key={section.id}
                location={city.name}
                industries={orchestration.industryDeepDive.industries}
              />
            );

          case "industry-grid":
            return (
              <IndustryGrid
                key={section.id}
                industries={content.industries}
                title={`${city.name} Industries We Specialize In`}
                location={city.name}
              />
            );

          case "did-you-know":
            return (
              <DidYouKnow
                key={section.id}
                facts={orchestration.didYouKnow.facts}
                location={city.name}
              />
            );

          case "free-audit-rich-cta":
            return (
              <FreeAuditRichCTA key={section.id} location={city.name} />
            );

          case "faq":
            return (
              <FAQAccordion
                key={section.id}
                faqs={content.faqs}
                title={`Frequently Asked Questions — ${service.shortTitle} in ${city.name}`}
              />
            );

          case "primary-cta":
            return (
              <CTASection
                key={section.id}
                title={`Get Started with ${service.shortTitle} in ${city.name}`}
                subtitle={`Join successful ${city.name} businesses that trust us to grow their organic traffic.`}
                ctaText={`Get Your Free ${city.name} SEO Audit`}
              />
            );

          case "related-cities":
            return (
              <RelatedCities
                key={section.id}
                cities={nearbyCities}
                serviceSlug={service.slug}
                countrySlug={country.slug}
                serviceTitle={service.title}
                countryName={country.name}
              />
            );

          case "related-services":
            return (
              <RelatedServices
                key={section.id}
                currentServiceSlug={service.slug}
                countrySlug={country.slug}
                citySlug={city.slug}
                location={city.name}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
