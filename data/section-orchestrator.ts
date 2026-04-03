/**
 * Section Orchestrator
 *
 * Determines which sections appear on each page and in what order.
 * Uses deterministic hashing so the same page always gets the same layout,
 * but different pages get different combinations.
 *
 * Pool of 28 section types. Each page shows 14-18 sections.
 * 5 sections are always shown, 23 are in the optional pool.
 */

import type { CityData, CountryData } from "./types";
import type { ServiceContentData } from "./types";
import { TESTIMONIALS, CASE_STUDIES } from "@/lib/constants";

// ========== HASH UTILITIES ==========

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick<T>(items: T[], seed: string, offset = 0): T {
  const idx = (hashCode(seed) + offset) % items.length;
  return items[idx];
}

function pickN<T>(items: T[], seed: string, count: number): T[] {
  const result: T[] = [];
  const used = new Set<number>();
  for (let i = 0; i < count && result.length < items.length; i++) {
    let idx = (hashCode(seed + i.toString()) + i) % items.length;
    let attempts = 0;
    while (used.has(idx) && attempts < items.length) {
      idx = (idx + 1) % items.length;
      attempts++;
    }
    if (!used.has(idx)) {
      used.add(idx);
      result.push(items[idx]);
    }
  }
  return result;
}

function joinList(items: string[], conjunction = "and"): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, ${conjunction} ${items[items.length - 1]}`;
}

function shuffleWithSeed<T>(items: T[], seed: string): T[] {
  const arr = [...items];
  const h = hashCode(seed);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (hashCode(seed + i.toString()) + h) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ========== SECTION IDS ==========

export type SectionId =
  // Always shown
  | "hero"
  | "breadcrumb"
  | "about"
  | "faq"
  | "primary-cta"
  // Optional content
  | "why-needed"
  | "market-insights"
  | "competitive-landscape"
  | "digital-transformation"
  | "success-blueprint"
  | "common-mistakes"
  | "roi-calculation"
  // Optional data/visual
  | "stats-grid"
  | "before-after"
  | "growth-timeline"
  // Optional service detail
  | "whats-included"
  | "whats-not-included"
  | "process-timeline"
  | "tools-technology"
  | "deliverables"
  // Optional trust/proof
  | "testimonial-spotlight"
  | "case-study-mini"
  | "trust-badges"
  // Optional engagement
  | "pricing-preview"
  | "related-blog-posts"
  | "industry-deep-dive"
  | "did-you-know"
  | "free-audit-rich-cta"
  // Navigation (always shown where applicable)
  | "country-grid"
  | "city-grid"
  | "related-cities"
  | "related-services"
  | "other-countries"
  | "industry-grid";

// ========== CONTENT FOR NEW SECTIONS ==========

// Common mistakes pool per service
const commonMistakesPool: Record<
  string,
  { title: string; description: string; fix: string }[]
> = {
  "on-page-seo": [
    { title: "Ignoring search intent behind keywords", description: "Targeting keywords without understanding whether users want information, navigation, or to make a purchase.", fix: "We map every keyword to its search intent and create content that matches what users actually want to find." },
    { title: "Stuffing keywords unnaturally", description: "Forcing keywords into content at the expense of readability, which both users and Google penalize.", fix: "We use semantic SEO with natural language, targeting keyword themes rather than exact-match repetition." },
    { title: "Neglecting internal linking structure", description: "Leaving pages orphaned without internal links, making it hard for search engines to discover and rank them.", fix: "We build strategic internal linking architectures that distribute page authority and guide users through your content." },
    { title: "Using duplicate or thin meta tags", description: "Having the same title tags and descriptions across multiple pages, or leaving them blank entirely.", fix: "We craft unique, compelling meta tags for every page, optimized for both rankings and click-through rates." },
    { title: "Forgetting about image optimization", description: "Uploading large, uncompressed images without alt text, hurting page speed and missing image search traffic.", fix: "We optimize every image with descriptive alt text, proper sizing, next-gen formats, and lazy loading." },
    { title: "Overlooking schema markup", description: "Missing the opportunity to earn rich snippets by not implementing structured data on pages.", fix: "We implement relevant schema markup (FAQ, HowTo, Product, LocalBusiness) to boost SERP visibility." },
  ],
  "technical-seo": [
    { title: "Ignoring Core Web Vitals", description: "Letting page speed, interactivity, and layout shift issues go unaddressed as Google weighs them in rankings.", fix: "We monitor and optimize all Core Web Vitals metrics continuously, targeting 90+ scores across all pages." },
    { title: "Blocking important pages from crawling", description: "Accidentally using robots.txt or noindex tags to prevent search engines from indexing valuable pages.", fix: "We audit your crawl directives regularly to ensure all important pages are accessible to search engines." },
    { title: "Neglecting mobile optimization", description: "Having a site that looks broken or loads slowly on mobile when Google uses mobile-first indexing.", fix: "We ensure your site is fully responsive and optimized for mobile-first indexing with fast load times." },
    { title: "Creating redirect chains", description: "Having multiple redirects in sequence (A→B→C→D) that slow page loading and dilute link equity.", fix: "We audit and clean up all redirect chains, ensuring direct paths from old URLs to final destinations." },
    { title: "Missing XML sitemap or having errors in it", description: "Not having a sitemap, or having one that includes broken URLs, redirects, or non-canonical pages.", fix: "We generate clean, dynamic sitemaps that include only canonical, indexable pages and submit them to Search Console." },
    { title: "Not implementing HTTPS properly", description: "Having mixed content issues, insecure pages, or broken SSL certificates that erode trust signals.", fix: "We ensure complete HTTPS implementation with no mixed content, proper HSTS headers, and valid certificates." },
  ],
  "link-building": [
    { title: "Buying links from PBN networks", description: "Purchasing backlinks from private blog networks that provide short-term gains but long-term penalties.", fix: "We exclusively build links through earned media, guest contributions, and genuine digital PR relationships." },
    { title: "Focusing only on quantity over quality", description: "Chasing hundreds of low-authority links instead of securing fewer, highly authoritative placements.", fix: "We target DA 40+ sites with real traffic and editorial standards, focusing on links that actually move rankings." },
    { title: "Using the same anchor text repeatedly", description: "Over-optimizing anchor text with exact-match keywords, which triggers Google's spam filters.", fix: "We maintain natural anchor text diversity with branded, generic, and topic-relevant variations." },
    { title: "Ignoring toxic backlinks", description: "Letting spammy or harmful backlinks accumulate without monitoring or disavowing them.", fix: "We conduct regular backlink audits and proactively disavow toxic links before they impact your rankings." },
    { title: "Not building links to inner pages", description: "Directing all link building efforts to the homepage while inner pages that need authority are neglected.", fix: "We distribute link building across your most important landing pages and content assets strategically." },
    { title: "Neglecting link velocity patterns", description: "Building too many links too quickly, or in irregular spikes that look unnatural to search engines.", fix: "We maintain consistent, natural link velocity that signals organic growth rather than manipulation." },
  ],
  "local-seo": [
    { title: "Inconsistent NAP across directories", description: "Having different name, address, or phone variations across online directories, confusing search engines.", fix: "We audit and standardize your NAP information across 50+ directories for perfect consistency." },
    { title: "Ignoring Google Business Profile optimization", description: "Setting up a basic GBP listing and never updating photos, posts, or responding to reviews.", fix: "We fully optimize and actively manage your GBP with regular posts, photos, Q&A, and review responses." },
    { title: "Not responding to reviews", description: "Leaving customer reviews (especially negative ones) unanswered, hurting both rankings and reputation.", fix: "We implement a review response strategy that addresses every review professionally within 24 hours." },
    { title: "Missing local schema markup", description: "Not implementing LocalBusiness schema that helps search engines understand your location and services.", fix: "We implement complete local schema markup including business hours, service areas, and accepted payments." },
    { title: "Using a single page for multiple locations", description: "Listing all locations on one page instead of creating optimized individual pages for each service area.", fix: "We create unique, content-rich pages for each location you serve, optimized for hyperlocal keywords." },
    { title: "Neglecting local content creation", description: "Not creating content relevant to local events, news, or community topics that build local authority.", fix: "We develop localized content strategies that connect your business to the community and local search intent." },
  ],
  "content-strategy": [
    { title: "Publishing without keyword research", description: "Creating content based on assumptions rather than data about what your audience actually searches for.", fix: "Every piece of content we create starts with thorough keyword research aligned to your business goals." },
    { title: "Ignoring search intent in content", description: "Writing promotional content when users want information, or writing guides when they want to buy.", fix: "We match content format and depth to the specific search intent behind each target keyword." },
    { title: "Not updating old content", description: "Letting published content become outdated and lose rankings while focusing only on new articles.", fix: "We implement a systematic content refresh program that keeps your best-performing pages current and competitive." },
    { title: "Lacking topical authority structure", description: "Publishing disconnected articles without building interconnected topic clusters that signal expertise.", fix: "We build comprehensive topic clusters with pillar pages and supporting content that establish topical authority." },
    { title: "Overlooking E-E-A-T signals", description: "Publishing content without author attribution, expert citations, or trust signals that Google values.", fix: "We ensure all content demonstrates Experience, Expertise, Authoritativeness, and Trustworthiness through proper attribution and sourcing." },
    { title: "Producing thin, low-value content", description: "Publishing short, shallow content that doesn't provide genuine value or comprehensively cover topics.", fix: "We create in-depth, expert-level content that thoroughly addresses user questions and outperforms competitor content." },
  ],
  "seo-audit": [
    { title: "Running a surface-level audit only", description: "Using a single free tool and treating its output as a comprehensive audit when it only checks basics.", fix: "Our 200+ point audit covers technical, on-page, content, backlinks, and competitive positioning in depth." },
    { title: "Not prioritizing findings by impact", description: "Delivering a list of 500 issues without guidance on which ones will actually move the needle.", fix: "We score every finding by potential impact and implementation effort, giving you a clear priority roadmap." },
    { title: "Ignoring competitor analysis", description: "Auditing your site in isolation without understanding what competitors are doing to outrank you.", fix: "We benchmark against your top 3-5 competitors to identify gaps, opportunities, and winning strategies to emulate." },
    { title: "Auditing once and forgetting", description: "Treating an SEO audit as a one-time event rather than a recurring health check for your site.", fix: "We recommend quarterly audits and provide ongoing monitoring to catch issues before they impact rankings." },
    { title: "Not connecting SEO findings to business goals", description: "Presenting technical jargon without translating findings into business impact and revenue opportunities.", fix: "Every recommendation in our audit is tied to a business outcome — more traffic, leads, or revenue." },
    { title: "Skipping content quality assessment", description: "Focusing only on technical issues while ignoring thin content, cannibalization, or topical gaps.", fix: "Our audit includes a full content quality assessment covering depth, uniqueness, E-E-A-T, and keyword coverage." },
  ],
};

// Tools pool
const toolsPool = [
  { name: "Ahrefs", purpose: "Backlink analysis, keyword research, and competitive intelligence", category: "Analysis" },
  { name: "SEMrush", purpose: "Keyword tracking, site audits, and market research", category: "Analysis" },
  { name: "Google Search Console", purpose: "Index coverage, search performance, and crawl monitoring", category: "Tracking" },
  { name: "Google Analytics 4", purpose: "Traffic analysis, user behavior, and conversion tracking", category: "Tracking" },
  { name: "Screaming Frog", purpose: "Technical crawling, site architecture mapping, and error detection", category: "Analysis" },
  { name: "Surfer SEO", purpose: "Content optimization, SERP analysis, and on-page scoring", category: "Optimization" },
  { name: "Google PageSpeed Insights", purpose: "Core Web Vitals monitoring and performance optimization", category: "Optimization" },
  { name: "Moz Pro", purpose: "Domain authority tracking and link analysis", category: "Analysis" },
  { name: "BrightLocal", purpose: "Local citation tracking, review monitoring, and local ranking data", category: "Tracking" },
  { name: "Schema.org Validator", purpose: "Structured data testing and rich snippet validation", category: "Optimization" },
  { name: "Google Looker Studio", purpose: "Custom reporting dashboards and data visualization", category: "Reporting" },
  { name: "Majestic", purpose: "Trust flow analysis and historic backlink data", category: "Analysis" },
];

// Before/After comparison templates
const beforeAfterTemplates = [
  { metric: "Monthly Organic Traffic", before: "2,500", after: "18,700" },
  { metric: "Keywords on Page 1", before: "12", after: "87" },
  { metric: "Organic Leads per Month", before: "15", after: "95" },
  { metric: "Domain Authority", before: "18", after: "42" },
  { metric: "Average Position", before: "34.2", after: "8.7" },
  { metric: "Click-Through Rate", before: "1.8%", after: "6.4%" },
  { metric: "Organic Revenue (Monthly)", before: "$8,200", after: "$47,500" },
  { metric: "Indexed Pages", before: "45", after: "320" },
  { metric: "Core Web Vitals Score", before: "42", after: "96" },
  { metric: "Bounce Rate", before: "72%", after: "38%" },
];

// Blog post references
const blogPostRefs = [
  { title: "10 On-Page SEO Factors That Actually Move the Needle in 2026", excerpt: "The on-page factors that genuinely impact rankings today, backed by data from 10,000+ pages.", category: "SEO Tips", readTime: "8 min", slug: "on-page-seo-factors-2026" },
  { title: "Core Web Vitals: The Technical SEO Checklist Every Developer Needs", excerpt: "A comprehensive checklist for optimizing Core Web Vitals with real code examples.", category: "Technical SEO", readTime: "12 min", slug: "core-web-vitals-checklist" },
  { title: "Link Building Strategies That Work (And 5 That Will Get You Penalized)", excerpt: "Which link building tactics drive real results and which ones could tank your rankings.", category: "Link Building", readTime: "10 min", slug: "link-building-strategies" },
  { title: "Local SEO in 2026: How to Dominate Google Maps and Local Pack", excerpt: "Your complete guide to ranking in the map pack and capturing local search traffic.", category: "Local SEO", readTime: "9 min", slug: "local-seo-2026" },
  { title: "E-E-A-T and Your Content Strategy: Building Topical Authority", excerpt: "How to demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness.", category: "Content Marketing", readTime: "11 min", slug: "eeat-content-strategy" },
  { title: "SEO Audit Checklist: 50 Points to Review Before Launching Any Website", excerpt: "50 critical SEO elements to check from technical foundations to content optimization.", category: "SEO Tips", readTime: "15 min", slug: "seo-audit-checklist" },
];

// ROI data templates
const roiTemplates = [
  { metric: "Average traffic increase", value: "340%" },
  { metric: "Cost per lead reduction", value: "65%" },
  { metric: "Revenue from organic", value: "3.2x" },
  { metric: "Keyword visibility growth", value: "280%" },
  { metric: "Return on investment", value: "8:1" },
  { metric: "Organic conversion rate", value: "+45%" },
];

// Deliverables pool
const deliverablesPool = [
  "Monthly keyword ranking report with trend analysis",
  "Organic traffic dashboard with real-time data",
  "Competitor positioning analysis (updated monthly)",
  "Technical health scorecard",
  "Content performance metrics and recommendations",
  "Backlink acquisition report with link quality metrics",
  "Action items and priority recommendations",
  "Quarterly strategy review presentation",
  "Custom Google Looker Studio dashboard access",
  "Dedicated Slack channel for real-time communication",
  "Monthly strategy call with your account manager",
  "Weekly progress updates via email",
];

// Pricing preview data
const pricingPreviewTiers = [
  { name: "Starter", price: "$999/mo", highlight: false, features: ["Up to 30 keywords", "On-page optimization", "Monthly reporting", "Email support"] },
  { name: "Growth", price: "$2,499/mo", highlight: true, features: ["Up to 100 keywords", "Full on-page + technical SEO", "Content strategy + 4 posts/mo", "Priority support"] },
  { name: "Enterprise", price: "$4,999/mo", highlight: false, features: ["Unlimited keywords", "Dedicated account manager", "Full-service SEO + content", "24/7 support"] },
];

// Trust badges
const trustBadgesPool = [
  { icon: "🏆", value: "500+", label: "Projects Delivered" },
  { icon: "⭐", value: "98%", label: "Client Retention" },
  { icon: "🌍", value: "20+", label: "Countries Served" },
  { icon: "📈", value: "850%", label: "Avg. Traffic Growth" },
  { icon: "🔒", value: "100%", label: "White-Hat Methods" },
  { icon: "💬", value: "24/7", label: "Support Available" },
  { icon: "🎯", value: "3.2M+", label: "Keywords Ranked" },
  { icon: "⏱️", value: "48hr", label: "Response Time" },
];

// Success blueprint milestones templates
const successMilestoneTemplates = [
  [
    { month: "Month 1-2", title: "Foundation & Audit", description: "Complete site audit, keyword research, competitor analysis, and strategy development." },
    { month: "Month 3-4", title: "Implementation", description: "Execute technical fixes, on-page optimization, and begin content production." },
    { month: "Month 5-7", title: "Growth Phase", description: "Rankings start climbing, organic traffic increases, and authority builds." },
    { month: "Month 8-12", title: "Scale & Dominate", description: "Compound growth, expand keyword targets, and optimize for conversions." },
  ],
  [
    { month: "Month 1-3", title: "Discovery & Strategy", description: "Deep market analysis, competitive benchmarking, and building a custom roadmap." },
    { month: "Month 4-6", title: "Build & Optimize", description: "Content creation, link acquisition, technical improvements start showing results." },
    { month: "Month 7-9", title: "Accelerate", description: "Rankings consolidate on page 1, traffic growth accelerates, leads increase." },
    { month: "Month 10-12", title: "Optimize & Expand", description: "Refine what works, expand into new keyword territories, maximize ROI." },
  ],
  [
    { month: "Week 1-4", title: "Quick Wins", description: "Fix critical technical issues, optimize top pages, and claim easy ranking improvements." },
    { month: "Month 2-4", title: "Strategic Build", description: "Systematic content production, authority building, and comprehensive optimization." },
    { month: "Month 5-8", title: "Momentum", description: "Organic traffic grows steadily, keyword positions improve across the board." },
    { month: "Month 9-12", title: "Market Leadership", description: "Dominate key search terms, build competitive moat, optimize for maximum revenue." },
  ],
];

// Digital transformation narrative templates
const digitalTransformationNarratives = [
  (location: string, maturity: string) =>
    `${location}'s digital landscape is ${maturity === "highly mature" || maturity === "mature" ? "well-established and fiercely competitive" : maturity === "rapidly growing" ? "evolving at breakneck speed, creating both challenges and enormous opportunities" : "still developing, offering a unique window of opportunity for businesses that invest early"}. Companies that establish strong search visibility now will benefit from compounding returns as the digital ecosystem matures.`,
  (location: string, maturity: string) =>
    `The shift to digital in ${location} ${maturity === "highly mature" || maturity === "mature" ? "is well underway, with businesses competing intensely for online visibility" : maturity === "rapidly growing" ? "is accelerating rapidly, and businesses that move fast can capture market share before competition intensifies" : "is in its early stages, presenting a rare opportunity to establish dominance before the market becomes saturated"}. Understanding this trajectory is essential for making smart SEO investments.`,
  (location: string, _maturity: string) =>
    `Every year, more consumers in ${location} turn to search engines to find local products and services. This digital transformation means that businesses without strong online visibility are becoming increasingly invisible to their target market. The question isn't whether to invest in SEO — it's how quickly you can build your presence.`,
];

// ROI narrative templates
const roiNarrativeTemplates = [
  (service: string, location: string) =>
    `For ${location} businesses, ${service} consistently delivers one of the highest returns of any marketing channel. Unlike paid advertising where costs increase with competition, organic search builds compounding value — the authority and rankings you earn today continue driving traffic and leads for months and years to come.`,
  (service: string, location: string) =>
    `The math is simple: businesses in ${location} that invest in professional ${service} see an average 8:1 return on investment within the first year. That's because organic traffic converts at 5.3x the rate of paid traffic, and once established, the cost per acquisition continues to decrease over time.`,
  (service: string, location: string) =>
    `Consider this: a single first-page ranking for a high-intent keyword in ${location} can drive hundreds of qualified visitors every month — without ongoing ad spend. Our ${service} clients typically see their investment pay for itself within 4-6 months, with returns accelerating from there.`,
];

// ========== MAIN ORCHESTRATOR ==========

export interface SectionConfig {
  id: SectionId;
  order: number;
}

export interface CityPageSectionData {
  sections: SectionConfig[];
  // Content for each section
  competitiveLandscape: {
    competitionLevel: string;
    searchBehavior: string;
    topCompetitorIndustries: string[];
  };
  digitalTransformation: {
    digitalMaturity: string;
    internetPenetration: string;
    mobileSearchShare: string;
    narrative: string;
  };
  successBlueprint: {
    milestones: { month: string; title: string; description: string }[];
  };
  commonMistakes: {
    mistakes: { title: string; description: string; fix: string }[];
  };
  roiCalculation: {
    investmentRange: string;
    expectedReturns: { metric: string; value: string }[];
    roiNarrative: string;
  };
  beforeAfter: {
    comparisons: { metric: string; before: string; after: string }[];
  };
  growthTimeline: {
    phases: {
      period: string;
      title: string;
      activities: string[];
      expectedResults: string;
    }[];
  };
  testimonial: {
    quote: string;
    name: string;
    company: string;
    role: string;
    rating: number;
    metric?: string;
  };
  caseStudy: {
    client: string;
    industry: string;
    challenge: string;
    result: string;
    metrics: { label: string; before: string; after: string }[];
    testimonialQuote?: string;
  };
  trustBadges: {
    badges: { icon: string; value: string; label: string }[];
  };
  pricingPreview: {
    tiers: {
      name: string;
      price: string;
      highlight: boolean;
      features: string[];
    }[];
  };
  blogPosts: {
    posts: {
      title: string;
      excerpt: string;
      category: string;
      readTime: string;
      slug: string;
    }[];
  };
  industryDeepDive: {
    industries: {
      name: string;
      description: string;
      challenges: string[];
      opportunity: string;
    }[];
  };
  didYouKnow: {
    facts: { icon: string; fact: string }[];
  };
  whatsNotIncluded: {
    items: { title: string; reason: string }[];
  };
  tools: {
    tools: { name: string; purpose: string; category: string }[];
  };
  deliverables: string[];
}

export function orchestrateCitySections(
  service: ServiceContentData,
  city: CityData,
  country: CountryData
): CityPageSectionData {
  const seed = `${service.slug}-${country.slug}-${city.slug}`;

  // Always-shown sections
  const alwaysSections: SectionId[] = [
    "hero",
    "breadcrumb",
    "about",
    "faq",
    "primary-cta",
    "related-cities",
    "related-services",
  ];

  // Optional pool for city pages
  const optionalPool: SectionId[] = [
    "why-needed",
    "market-insights",
    "competitive-landscape",
    "digital-transformation",
    "success-blueprint",
    "common-mistakes",
    "roi-calculation",
    "stats-grid",
    "before-after",
    "growth-timeline",
    "whats-included",
    "whats-not-included",
    "process-timeline",
    "tools-technology",
    "testimonial-spotlight",
    "case-study-mini",
    "trust-badges",
    "pricing-preview",
    "related-blog-posts",
    "industry-deep-dive",
    "did-you-know",
    "free-audit-rich-cta",
    "industry-grid",
  ];

  // Pick 10-13 optional sections based on hash
  const optionalCount = 10 + (hashCode(seed + "-count") % 4); // 10, 11, 12, or 13
  const selectedOptional = pickN(optionalPool, seed + "-select", optionalCount);

  // Build the section order: hero/breadcrumb first, CTA/navigation last, middle shuffled
  const middleSections = shuffleWithSeed(
    [...selectedOptional.filter((s) => s !== "trust-badges")],
    seed + "-order"
  );

  // Trust badges, if selected, go near the top
  const hasTrustBadges = selectedOptional.includes("trust-badges");

  let order = 0;
  const sections: SectionConfig[] = [];

  // Fixed top
  sections.push({ id: "breadcrumb", order: order++ });
  sections.push({ id: "hero", order: order++ });
  if (hasTrustBadges) sections.push({ id: "trust-badges", order: order++ });
  sections.push({ id: "about", order: order++ });

  // Shuffled middle
  for (const s of middleSections) {
    sections.push({ id: s, order: order++ });
  }

  // Fixed bottom
  sections.push({ id: "faq", order: order++ });
  sections.push({ id: "primary-cta", order: order++ });
  sections.push({ id: "related-cities", order: order++ });
  sections.push({ id: "related-services", order: order++ });

  // Generate content for each section
  const testimonial = pick(TESTIMONIALS, seed + "-testimonial");
  const caseStudy = pick(CASE_STUDIES, seed + "-casestudy");
  const mistakes = commonMistakesPool[service.slug] || commonMistakesPool["on-page-seo"];

  return {
    sections,
    competitiveLandscape: {
      competitionLevel: city.competitionLevel,
      searchBehavior: city.searchBehavior,
      topCompetitorIndustries: city.economy.slice(0, 5),
    },
    digitalTransformation: {
      digitalMaturity: city.digitalMaturity,
      internetPenetration: country.internetPenetration,
      mobileSearchShare: country.mobileSearchShare,
      narrative: pick(digitalTransformationNarratives, seed + "-dignarr")(
        city.name,
        city.digitalMaturity
      ),
    },
    successBlueprint: {
      milestones: pick(successMilestoneTemplates, seed + "-milestones"),
    },
    commonMistakes: {
      mistakes: pickN(mistakes, seed + "-mistakes", 4 + (hashCode(seed + "-mc") % 2)),
    },
    roiCalculation: {
      investmentRange: "$999 - $4,999/month",
      expectedReturns: pickN(roiTemplates, seed + "-roi", 4),
      roiNarrative: pick(roiNarrativeTemplates, seed + "-roinarr")(
        service.shortTitle,
        city.name
      ),
    },
    beforeAfter: {
      comparisons: pickN(beforeAfterTemplates, seed + "-ba", 4),
    },
    growthTimeline: {
      phases: pick(successMilestoneTemplates, seed + "-growth").map((m) => ({
        period: m.month,
        title: m.title,
        activities: [m.description],
        expectedResults:
          m.month.includes("1")
            ? "Foundation building — traffic baseline established"
            : m.month.includes("12") || m.month.includes("Scale") || m.month.includes("Leadership")
              ? "Significant traffic and lead growth, strong ROI"
              : "Measurable ranking improvements and traffic increases",
      })),
    },
    testimonial: {
      quote: testimonial.quote,
      name: testimonial.name,
      company: testimonial.company,
      role: testimonial.role,
      rating: testimonial.rating,
      metric: pick(
        ["+340%", "+500%", "0→50K", "#1 Maps", "2M", "+200%"],
        seed + "-tmetric"
      ),
    },
    caseStudy: {
      client: caseStudy.client,
      industry: caseStudy.industry,
      challenge: caseStudy.challenge,
      result: caseStudy.results,
      metrics: caseStudy.stats,
      testimonialQuote: caseStudy.testimonial,
    },
    trustBadges: {
      badges: pickN(trustBadgesPool, seed + "-badges", 4 + (hashCode(seed + "-bc") % 2)),
    },
    pricingPreview: {
      tiers: pricingPreviewTiers,
    },
    blogPosts: {
      posts: pickN(blogPostRefs, seed + "-blog", 3),
    },
    industryDeepDive: {
      industries: pickN(city.businessTypes, seed + "-deepdive", 3).map(
        (industry) => ({
          name: industry,
          description: `${industry} businesses in ${city.name} face unique search challenges. The local market is ${city.competitionLevel === "very high" || city.competitionLevel === "high" ? "fiercely competitive" : "growing rapidly"}, with consumers increasingly turning to ${country.searchEngine} to find ${industry.toLowerCase()} services.`,
          challenges: [
            `High competition for "${industry.toLowerCase()} ${city.name}" keywords`,
            `Building authority against established ${city.name} competitors`,
            `Capturing mobile search intent from local consumers`,
          ],
          opportunity: `${industry} businesses that invest in ${service.shortTitle} now can establish first-mover advantage in ${city.name}'s ${city.digitalMaturity} digital market.`,
        })
      ),
    },
    didYouKnow: {
      facts: [
        { icon: "👥", fact: `${city.name} has a population of ${city.population}` },
        {
          icon: "🔍",
          fact: `${country.mobileSearchShare} of searches in ${country.name} happen on mobile`,
        },
        { icon: "💡", fact: city.uniqueFact },
        {
          icon: "🏢",
          fact: `Top industries: ${joinList(city.economy.slice(0, 3))}`,
        },
        {
          icon: "📊",
          fact: `Competition level: ${city.competitionLevel} for digital services`,
        },
        {
          icon: "🌐",
          fact: `${country.internetPenetration} internet penetration in ${country.name}`,
        },
      ],
    },
    whatsNotIncluded: {
      items: [
        {
          title: "Black-hat or gray-hat tactics",
          reason:
            "We only use white-hat methods that build long-term value. No PBN links, keyword stuffing, or cloaking — ever.",
        },
        {
          title: "Guaranteed #1 rankings",
          reason:
            "No ethical agency can guarantee specific positions. We guarantee a proven methodology, transparent reporting, and consistent effort.",
        },
        {
          title: "One-size-fits-all templates",
          reason: `Every ${city.name} business is unique. We build custom strategies from scratch rather than applying generic playbooks.`,
        },
        {
          title: "Vanity metrics without business impact",
          reason:
            "We focus on metrics that matter — traffic, leads, revenue — not just rankings that look good in reports.",
        },
      ],
    },
    tools: {
      tools: pickN(toolsPool, seed + "-tools", 6 + (hashCode(seed + "-tc") % 3)),
    },
    deliverables: pickN(deliverablesPool, seed + "-deliverables", 6 + (hashCode(seed + "-dc") % 3)),
  };
}

// ========== COUNTRY-LEVEL ORCHESTRATOR ==========

export interface CountryPageSectionData {
  sections: SectionConfig[];
  digitalTransformation: {
    digitalMaturity: string;
    internetPenetration: string;
    mobileSearchShare: string;
    narrative: string;
  };
  successBlueprint: {
    milestones: { month: string; title: string; description: string }[];
  };
  commonMistakes: {
    mistakes: { title: string; description: string; fix: string }[];
  };
  roiCalculation: {
    investmentRange: string;
    expectedReturns: { metric: string; value: string }[];
    roiNarrative: string;
  };
  beforeAfter: {
    comparisons: { metric: string; before: string; after: string }[];
  };
  testimonial: {
    quote: string;
    name: string;
    company: string;
    role: string;
    rating: number;
    metric?: string;
  };
  caseStudy: {
    client: string;
    industry: string;
    challenge: string;
    result: string;
    metrics: { label: string; before: string; after: string }[];
    testimonialQuote?: string;
  };
  trustBadges: {
    badges: { icon: string; value: string; label: string }[];
  };
  pricingPreview: {
    tiers: { name: string; price: string; highlight: boolean; features: string[] }[];
  };
  blogPosts: {
    posts: { title: string; excerpt: string; category: string; readTime: string; slug: string }[];
  };
  didYouKnow: {
    facts: { icon: string; fact: string }[];
  };
  whatsNotIncluded: {
    items: { title: string; reason: string }[];
  };
  tools: {
    tools: { name: string; purpose: string; category: string }[];
  };
  deliverables: string[];
}

export function orchestrateCountrySections(
  service: ServiceContentData,
  country: CountryData
): CountryPageSectionData {
  const seed = `${service.slug}-${country.slug}`;

  const optionalPool: SectionId[] = [
    "why-needed",
    "digital-transformation",
    "success-blueprint",
    "common-mistakes",
    "roi-calculation",
    "stats-grid",
    "before-after",
    "whats-included",
    "whats-not-included",
    "process-timeline",
    "tools-technology",
    "testimonial-spotlight",
    "case-study-mini",
    "trust-badges",
    "pricing-preview",
    "related-blog-posts",
    "did-you-know",
    "free-audit-rich-cta",
    "industry-grid",
  ];

  const optionalCount = 9 + (hashCode(seed + "-count") % 4);
  const selectedOptional = pickN(optionalPool, seed + "-select", optionalCount);
  const hasTrustBadges = selectedOptional.includes("trust-badges");

  const middleSections = shuffleWithSeed(
    selectedOptional.filter((s) => s !== "trust-badges"),
    seed + "-order"
  );

  let order = 0;
  const sections: SectionConfig[] = [];

  sections.push({ id: "breadcrumb", order: order++ });
  sections.push({ id: "hero", order: order++ });
  if (hasTrustBadges) sections.push({ id: "trust-badges", order: order++ });
  sections.push({ id: "about", order: order++ });

  for (const s of middleSections) {
    sections.push({ id: s, order: order++ });
  }

  // City grid always shown for country pages
  sections.push({ id: "city-grid", order: order++ });
  sections.push({ id: "faq", order: order++ });
  sections.push({ id: "primary-cta", order: order++ });
  sections.push({ id: "other-countries", order: order++ });

  const testimonial = pick(TESTIMONIALS, seed + "-testimonial");
  const caseStudy = pick(CASE_STUDIES, seed + "-casestudy");
  const mistakes = commonMistakesPool[service.slug] || commonMistakesPool["on-page-seo"];

  return {
    sections,
    digitalTransformation: {
      digitalMaturity: "mature",
      internetPenetration: country.internetPenetration,
      mobileSearchShare: country.mobileSearchShare,
      narrative: pick(digitalTransformationNarratives, seed + "-dignarr")(
        country.name,
        "mature"
      ),
    },
    successBlueprint: {
      milestones: pick(successMilestoneTemplates, seed + "-milestones"),
    },
    commonMistakes: {
      mistakes: pickN(mistakes, seed + "-mistakes", 4 + (hashCode(seed + "-mc") % 2)),
    },
    roiCalculation: {
      investmentRange: "$999 - $4,999/month",
      expectedReturns: pickN(roiTemplates, seed + "-roi", 4),
      roiNarrative: pick(roiNarrativeTemplates, seed + "-roinarr")(
        service.shortTitle,
        country.name
      ),
    },
    beforeAfter: {
      comparisons: pickN(beforeAfterTemplates, seed + "-ba", 4),
    },
    testimonial: {
      quote: testimonial.quote,
      name: testimonial.name,
      company: testimonial.company,
      role: testimonial.role,
      rating: testimonial.rating,
      metric: pick(["+340%", "+500%", "0→50K", "#1 Maps", "2M", "+200%"], seed + "-tmetric"),
    },
    caseStudy: {
      client: caseStudy.client,
      industry: caseStudy.industry,
      challenge: caseStudy.challenge,
      result: caseStudy.results,
      metrics: caseStudy.stats,
      testimonialQuote: caseStudy.testimonial,
    },
    trustBadges: {
      badges: pickN(trustBadgesPool, seed + "-badges", 4 + (hashCode(seed + "-bc") % 2)),
    },
    pricingPreview: { tiers: pricingPreviewTiers },
    blogPosts: { posts: pickN(blogPostRefs, seed + "-blog", 3) },
    didYouKnow: {
      facts: [
        { icon: "🌐", fact: `${country.internetPenetration} internet penetration in ${country.name}` },
        { icon: "📱", fact: `${country.mobileSearchShare} of searches are on mobile` },
        { icon: "💡", fact: country.uniqueMarketFact },
        { icon: "🏢", fact: `Top industries: ${joinList(country.topIndustries.slice(0, 3))}` },
        { icon: "🔍", fact: country.localSearchTrends },
        { icon: "🏙️", fact: `${country.cities.length} cities with active digital markets` },
      ],
    },
    whatsNotIncluded: {
      items: [
        { title: "Black-hat or gray-hat tactics", reason: "We only use white-hat methods that build long-term value." },
        { title: "Guaranteed #1 rankings", reason: "No ethical agency can guarantee specific positions." },
        { title: "One-size-fits-all templates", reason: `Every ${country.name} business is unique. Custom strategies only.` },
        { title: "Vanity metrics", reason: "We report on traffic, leads, and revenue — not fluff." },
      ],
    },
    tools: { tools: pickN(toolsPool, seed + "-tools", 6 + (hashCode(seed + "-tc") % 3)) },
    deliverables: pickN(deliverablesPool, seed + "-deliverables", 6 + (hashCode(seed + "-dc") % 3)),
  };
}

// ========== SERVICE-LEVEL ORCHESTRATOR ==========

export interface ServicePageSectionData {
  sections: SectionConfig[];
  beforeAfter: { comparisons: { metric: string; before: string; after: string }[] };
  testimonial: { quote: string; name: string; company: string; role: string; rating: number; metric?: string };
  caseStudy: {
    client: string; industry: string; challenge: string; result: string;
    metrics: { label: string; before: string; after: string }[];
    testimonialQuote?: string;
  };
  trustBadges: { badges: { icon: string; value: string; label: string }[] };
  commonMistakes: { mistakes: { title: string; description: string; fix: string }[] };
  blogPosts: { posts: { title: string; excerpt: string; category: string; readTime: string; slug: string }[] };
  whatsNotIncluded: { items: { title: string; reason: string }[] };
  tools: { tools: { name: string; purpose: string; category: string }[] };
  deliverables: string[];
  successBlueprint: { milestones: { month: string; title: string; description: string }[] };
  roiCalculation: { investmentRange: string; expectedReturns: { metric: string; value: string }[]; roiNarrative: string };
  pricingPreview: { tiers: { name: string; price: string; features: string[]; highlight: boolean }[] };
}

export function orchestrateServiceSections(
  service: ServiceContentData
): ServicePageSectionData {
  const seed = `${service.slug}-service`;

  const optionalPool: SectionId[] = [
    "success-blueprint",
    "common-mistakes",
    "roi-calculation",
    "stats-grid",
    "before-after",
    "whats-included",
    "whats-not-included",
    "process-timeline",
    "tools-technology",
    "testimonial-spotlight",
    "case-study-mini",
    "trust-badges",
    "pricing-preview",
    "related-blog-posts",
    "free-audit-rich-cta",
  ];

  const optionalCount = 8 + (hashCode(seed + "-count") % 4);
  const selectedOptional = pickN(optionalPool, seed + "-select", optionalCount);
  const hasTrustBadges = selectedOptional.includes("trust-badges");

  const middleSections = shuffleWithSeed(
    selectedOptional.filter((s) => s !== "trust-badges"),
    seed + "-order"
  );

  let order = 0;
  const sections: SectionConfig[] = [];

  sections.push({ id: "breadcrumb", order: order++ });
  sections.push({ id: "hero", order: order++ });
  if (hasTrustBadges) sections.push({ id: "trust-badges", order: order++ });
  sections.push({ id: "about", order: order++ });

  for (const s of middleSections) {
    sections.push({ id: s, order: order++ });
  }

  sections.push({ id: "country-grid", order: order++ });
  sections.push({ id: "faq", order: order++ });
  sections.push({ id: "primary-cta", order: order++ });

  const testimonial = pick(TESTIMONIALS, seed + "-testimonial");
  const caseStudy = pick(CASE_STUDIES, seed + "-casestudy");
  const mistakes = commonMistakesPool[service.slug] || commonMistakesPool["on-page-seo"];

  return {
    sections,
    beforeAfter: { comparisons: pickN(beforeAfterTemplates, seed + "-ba", 4) },
    testimonial: {
      quote: testimonial.quote, name: testimonial.name,
      company: testimonial.company, role: testimonial.role, rating: testimonial.rating,
      metric: pick(["+340%", "+500%", "0→50K", "#1 Maps"], seed + "-tmetric"),
    },
    caseStudy: {
      client: caseStudy.client, industry: caseStudy.industry,
      challenge: caseStudy.challenge, result: caseStudy.results,
      metrics: caseStudy.stats, testimonialQuote: caseStudy.testimonial,
    },
    trustBadges: { badges: pickN(trustBadgesPool, seed + "-badges", 5) },
    commonMistakes: { mistakes: pickN(mistakes, seed + "-mistakes", 5) },
    blogPosts: { posts: pickN(blogPostRefs, seed + "-blog", 3) },
    whatsNotIncluded: {
      items: [
        { title: "Black-hat tactics", reason: "We build lasting results with ethical methods only." },
        { title: "Guaranteed rankings", reason: "We guarantee effort and methodology, not specific positions." },
        { title: "Cookie-cutter strategies", reason: "Every client gets a custom approach built from data." },
        { title: "Vanity reporting", reason: "We measure what matters: traffic, leads, and revenue." },
      ],
    },
    tools: { tools: pickN(toolsPool, seed + "-tools", 8) },
    deliverables: pickN(deliverablesPool, seed + "-deliverables", 8),
    successBlueprint: { milestones: pick(successMilestoneTemplates, seed + "-milestones") },
    roiCalculation: {
      investmentRange: "$999 - $4,999/month",
      expectedReturns: pickN(roiTemplates, seed + "-roi", 4),
      roiNarrative: pick(roiNarrativeTemplates, seed + "-roinarr")(service.shortTitle, "your market"),
    },
    pricingPreview: { tiers: pricingPreviewTiers },
  };
}
