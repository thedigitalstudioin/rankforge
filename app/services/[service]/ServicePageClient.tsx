"use client";

import BreadcrumbNav from "@/components/programmatic/BreadcrumbNav";
import ServiceHero from "@/components/programmatic/ServiceHero";
import ContentSection from "@/components/programmatic/ContentSection";
import ServiceFeatureList from "@/components/programmatic/ServiceFeatureList";
import ProcessTimeline from "@/components/programmatic/ProcessTimeline";
import StatsHighlight from "@/components/programmatic/StatsHighlight";
import FAQAccordion from "@/components/programmatic/FAQAccordion";
import CTASection from "@/components/programmatic/CTASection";
import CountryGridSimple from "./CountryGridSimple";
import SuccessBlueprint from "@/components/programmatic/SuccessBlueprint";
import CommonMistakes from "@/components/programmatic/CommonMistakes";
import ROICalculation from "@/components/programmatic/ROICalculation";
import BeforeAfterComparison from "@/components/programmatic/BeforeAfterComparison";
import TestimonialSpotlight from "@/components/programmatic/TestimonialSpotlight";
import CaseStudyMini from "@/components/programmatic/CaseStudyMini";
import TrustBadges from "@/components/programmatic/TrustBadges";
import PricingPreview from "@/components/programmatic/PricingPreview";
import RelatedBlogPosts from "@/components/programmatic/RelatedBlogPosts";
import FreeAuditRichCTA from "@/components/programmatic/FreeAuditRichCTA";
import WhatWeDoNotDo from "@/components/programmatic/WhatWeDoNotDo";
import ToolsTechnology from "@/components/programmatic/ToolsTechnology";
import DeliverablesOverview from "@/components/programmatic/DeliverablesOverview";
import type { ServiceContentData } from "@/data/types";
import type { ServicePageSectionData } from "@/data/section-orchestrator";

interface ServicePageClientProps {
  service: ServiceContentData;
  content: {
    heroSubtitle: string;
    aboutParagraphs: string[];
  };
  countries: {
    name: string;
    slug: string;
    flag: string;
    cityCount: number;
  }[];
  orchestration: ServicePageSectionData;
}

export default function ServicePageClient({
  service,
  content,
  countries,
  orchestration,
}: ServicePageClientProps) {
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
                    { label: service.title },
                  ]}
                />
              </div>
            );

          case "hero":
            return (
              <ServiceHero
                key={section.id}
                title={`${service.title} Services`}
                subtitle={content.heroSubtitle}
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
                title={`What is ${service.title}?`}
                paragraphs={content.aboutParagraphs}
              />
            );

          case "whats-included":
            return (
              <ServiceFeatureList
                key={section.id}
                features={service.includedItems}
                title={`What's Included in Our ${service.title} Service`}
              />
            );

          case "process-timeline":
            return (
              <ProcessTimeline
                key={section.id}
                steps={service.processSteps}
                title={`Our ${service.title} Process`}
              />
            );

          case "stats-grid":
            return (
              <StatsHighlight
                key={section.id}
                stats={service.stats}
                title={`Real Results from Our ${service.title}`}
              />
            );

          case "success-blueprint":
            return (
              <SuccessBlueprint
                key={section.id}
                location="your market"
                serviceName={service.shortTitle}
                milestones={orchestration.successBlueprint.milestones}
              />
            );

          case "common-mistakes":
            return (
              <CommonMistakes
                key={section.id}
                location="your business"
                serviceName={service.shortTitle}
                mistakes={orchestration.commonMistakes.mistakes}
              />
            );

          case "roi-calculation":
            return (
              <ROICalculation
                key={section.id}
                serviceName={service.shortTitle}
                location="your market"
                investmentRange={orchestration.roiCalculation.investmentRange}
                expectedReturns={orchestration.roiCalculation.expectedReturns}
                roiNarrative={orchestration.roiCalculation.roiNarrative}
              />
            );

          case "before-after":
            return (
              <BeforeAfterComparison
                key={section.id}
                comparisons={orchestration.beforeAfter.comparisons}
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

          case "free-audit-rich-cta":
            return <FreeAuditRichCTA key={section.id} />;

          case "country-grid":
            return (
              <CountryGridSimple
                key={section.id}
                countries={countries}
                serviceSlug={service.slug}
                serviceTitle={service.title}
              />
            );

          case "faq":
            return (
              <FAQAccordion
                key={section.id}
                faqs={service.faqPool.slice(0, 10)}
                title={`Frequently Asked Questions About ${service.title}`}
              />
            );

          case "primary-cta":
            return (
              <CTASection
                key={section.id}
                title={`Ready to Boost Your Rankings with ${service.shortTitle}?`}
                subtitle={`Get a free audit and discover how our ${service.shortTitle} services can transform your organic traffic.`}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
