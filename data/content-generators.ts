import type { CityData, CountryData, GeneratedPageContent } from "./types";
import type { ServiceContentData } from "./types";

// Deterministic hash function for consistent content variant selection
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

// ========== HERO SUBTITLES ==========

const heroSubtitleTemplates = [
  (s: string, city: string, country: string) =>
    `Transform your ${city} business with expert ${s} strategies that deliver measurable growth in the ${country} market.`,
  (s: string, city: string, _country: string) =>
    `Dominate ${city} search results with data-driven ${s} that outperforms your local competition.`,
  (s: string, city: string, _country: string) =>
    `Helping ${city} businesses climb to the top of search rankings with proven ${s} expertise.`,
  (s: string, city: string, _country: string) =>
    `Your ${city}-based partner for ${s} that drives real traffic, leads, and revenue.`,
  (s: string, city: string, country: string) =>
    `Expert ${s} services tailored for the unique challenges of the ${city}, ${country} market.`,
  (s: string, city: string, _country: string) =>
    `Unlock the full search potential of your ${city} business with our proven ${s} methodology.`,
  (s: string, city: string, _country: string) =>
    `From local visibility to market leadership — ${s} that puts your ${city} business on the map.`,
  (s: string, city: string, _country: string) =>
    `Elevate your ${city} brand with ${s} strategies built on data, expertise, and results.`,
];

const heroSubtitleCountryTemplates = [
  (s: string, country: string) =>
    `Empowering businesses across ${country} with ${s} strategies that drive sustainable organic growth.`,
  (s: string, country: string) =>
    `The trusted ${s} partner for businesses throughout ${country} — from startups to enterprises.`,
  (s: string, country: string) =>
    `Delivering measurable ${s} results to companies in every corner of ${country}.`,
  (s: string, country: string) =>
    `Expert ${s} services designed for the unique competitive landscape of the ${country} market.`,
  (s: string, country: string) =>
    `Helping ${country} businesses outrank their competition with cutting-edge ${s} strategies.`,
  (s: string, country: string) =>
    `Your nationwide partner for ${s} excellence — serving businesses across ${country}.`,
];

// ========== ABOUT PARAGRAPHS (City Level) ==========

type ParagraphGenerator = (
  service: ServiceContentData,
  city: CityData,
  country: CountryData
) => string;

const aboutParagraphGenerators: ParagraphGenerator[] = [
  // Economic angle
  (service, city, country) =>
    `${city.name} stands as one of ${country.name}'s most dynamic business hubs, with a thriving economy anchored in ${joinList(city.economy.slice(0, 3))}. In this competitive landscape, businesses need more than a basic online presence — they need strategic ${service.shortTitle} that positions them ahead of the curve. Our team brings deep expertise in the ${city.name} market, understanding the unique search patterns and competitive dynamics that define this ${city.competitionLevel}-competition environment.`,

  // Digital maturity angle
  (service, city, country) =>
    `With a ${city.digitalMaturity} digital ecosystem, ${city.name} presents both tremendous opportunities and fierce competition for search visibility. Our ${service.shortTitle} services are specifically calibrated for the ${country.name} market, where ${country.localSearchTrends}. We've helped businesses across ${city.name}'s key sectors — including ${joinList(city.businessTypes.slice(0, 4))} — achieve and maintain top search positions.`,

  // Local knowledge angle
  (service, city, _country) =>
    `What sets our ${service.shortTitle} approach in ${city.name} apart is our intimate understanding of the local market. Known for ${joinList(city.knownFor.slice(0, 3))}, ${city.name} has a population of ${city.population} and a search landscape shaped by its unique economic character. ${city.uniqueFact}. We leverage these local insights to craft ${service.shortTitle} strategies that resonate with both search engines and your target audience.`,

  // Competition angle
  (service, city, _country) =>
    `The ${city.name} market is characterized by ${city.competitionLevel} competition across digital channels, making professional ${service.shortTitle} not just an advantage but a necessity. Businesses in ${joinList(city.economy.slice(0, 3))} are all vying for the same search real estate. Our data-driven approach ensures your business captures the visibility it deserves, with strategies backed by continuous analysis and optimization.`,

  // Search behavior angle
  (service, city, country) =>
    `In ${city.name}, ${city.searchBehavior}. Understanding these local search behaviors is critical for effective ${service.shortTitle}. Our team monitors the ${country.searchEngine} landscape in ${city.name} daily, identifying emerging keyword trends, seasonal search patterns, and competitive shifts that inform our optimization strategies. This hyperlocal intelligence is what drives superior results for our ${city.name} clients.`,

  // Results-oriented angle
  (service, city, _country) =>
    `Businesses across ${city.name}'s ${joinList(city.economy.slice(0, 3))} sectors trust us to deliver ${service.shortTitle} results that impact their bottom line. With ${city.name}'s population of ${city.population}, the addressable search audience is substantial — but only if your business appears where customers are looking. Our proven ${service.shortTitle} methodology has consistently moved ${city.name} businesses from obscurity to page-one dominance.`,

  // Industry-specific angle
  (service, city, _country) =>
    `Whether you operate in ${joinList(city.businessTypes.slice(0, 3))}, or any other sector in ${city.name}, our ${service.shortTitle} services are tailored to your industry's unique challenges. Each market vertical has distinct keyword landscapes, content requirements, and competitive dynamics. We develop bespoke ${service.shortTitle} campaigns that align with your specific industry context and growth objectives.`,

  // Growth angle
  (service, city, country) =>
    `${city.name} is experiencing ${city.digitalMaturity === "rapidly growing" || city.digitalMaturity === "growing" || city.digitalMaturity === "emerging" ? "rapid digital transformation" : "continued digital evolution"}, creating new opportunities for businesses that invest in ${service.shortTitle}. As ${country.name}'s search ecosystem becomes increasingly sophisticated, the gap between businesses with strong SEO and those without continues to widen. Our ${city.name} ${service.shortTitle} services help you stay on the right side of that divide.`,
];

// ========== ABOUT PARAGRAPHS (Country Level) ==========

const aboutCountryParagraphGenerators: ((
  service: ServiceContentData,
  country: CountryData
) => string)[] = [
  (service, country) =>
    `As ${country.marketSize}, ${country.name} demands a sophisticated approach to ${service.shortTitle}. With ${country.internetPenetration} internet penetration and ${country.mobileSearchShare} of searches happening on mobile devices, the opportunities for organic growth are immense — but so is the competition. Our team specializes in navigating the ${country.name} search landscape to deliver results that matter.`,

  (service, country) =>
    `${country.uniqueMarketFact}. In this environment, effective ${service.shortTitle} requires more than generic tactics — it demands deep market knowledge, cultural understanding, and continuous adaptation. We bring all three to every ${country.name} client engagement, combining global best practices with local market intelligence.`,

  (service, country) =>
    `Operating across ${country.name}'s diverse business landscape requires ${service.shortTitle} strategies that account for regional variations, industry-specific search behaviors, and the competitive dynamics of the ${country.searchEngine} ecosystem. Our nationwide presence and local market expertise allow us to serve businesses in cities of every size.`,

  (service, country) =>
    `The ${country.name} market for ${service.shortTitle} is shaped by unique factors: ${country.localSearchTrends}. We've developed our methodology specifically for these conditions, ensuring our strategies are optimized for the platforms, behaviors, and competitive realities that define search in ${country.name}.${country.regulatoryNotes ? ` We also ensure full compliance with ${country.regulatoryNotes}.` : ""}`,

  (service, country) =>
    `With expertise across ${joinList(country.topIndustries.slice(0, 4))}, we understand the specific ${service.shortTitle} needs of ${country.name}'s most important business sectors. Each industry has unique keyword landscapes, content expectations, and competitive dynamics that require specialized knowledge. Our team brings that expertise to every engagement.`,
];

// ========== MARKET INSIGHTS ==========

const marketInsightGenerators: ParagraphGenerator[] = [
  (service, city, country) =>
    `The ${city.name} search market is shaped by its position as a center for ${joinList(city.economy.slice(0, 2))}. Businesses in these sectors face ${city.competitionLevel} competition for organic visibility on ${country.searchEngine}, making strategic ${service.shortTitle} essential for sustained growth. Local search intent in ${city.name} tends to favor ${city.searchBehavior.includes("mobile") ? "mobile-optimized" : "authoritative"} content that demonstrates genuine expertise.`,

  (_service, city, country) =>
    `With ${country.internetPenetration} internet penetration nationally and ${city.name}'s ${city.digitalMaturity} digital infrastructure, the local online market is ${city.competitionLevel === "very high" || city.competitionLevel === "high" ? "intensely" : "increasingly"} competitive. Businesses that invest in search optimization early gain a compounding advantage as organic rankings build authority over time.`,

  (service, city, _country) =>
    `${city.uniqueFact}. This distinctive character shapes the local search landscape, creating specific ${service.shortTitle} opportunities that our team is uniquely positioned to capitalize on. Understanding what makes ${city.name} different is the foundation of our local strategy.`,
];

// ========== WHY NEEDED ==========

const whyNeededGenerators: ParagraphGenerator[] = [
  (service, city, _country) =>
    `In ${city.name}'s ${city.competitionLevel}-competition market, businesses without a strong ${service.shortTitle} strategy are leaving significant revenue on the table. Your competitors are already investing in search optimization — the question isn't whether you can afford ${service.shortTitle}, but whether you can afford to fall further behind.`,

  (service, city, country) =>
    `${country.mobileSearchShare} of searches in ${country.name} happen on mobile devices, and this figure is even higher in metropolitan areas like ${city.name}. If your business isn't optimized for how people actually search in ${city.name}, you're invisible to a massive portion of your potential customers.`,

  (service, city, _country) =>
    `The ${joinList(city.economy.slice(0, 3))} sectors that drive ${city.name}'s economy are increasingly competitive online. Businesses in these industries need ${service.shortTitle} that goes beyond basics — they need strategies informed by local market data, competitor intelligence, and a deep understanding of what drives conversions in ${city.name}.`,
];

// ========== FAQ GENERATION ==========

function generateCityFAQs(
  service: ServiceContentData,
  city: CityData,
  country: CountryData,
  count = 8
): { question: string; answer: string }[] {
  const seed = `${service.slug}-${country.slug}-${city.slug}`;

  // Location-specific FAQs
  const localFAQs: { question: string; answer: string }[] = [
    {
      question: `How much does ${service.shortTitle} cost in ${city.name}?`,
      answer: `Our ${service.shortTitle} services in ${city.name} start from $999/month for the Starter plan and scale based on your business needs. ${city.name}'s ${city.competitionLevel}-competition market may require more aggressive strategies — we'll recommend the right investment level after analyzing your specific situation during a free consultation.`,
    },
    {
      question: `How long does it take to see ${service.shortTitle} results in ${city.name}?`,
      answer: `In ${city.name}'s ${city.competitionLevel}-competition market, most clients see measurable improvements within 3-6 months, with significant results at the 6-12 month mark. The timeline depends on your current site health, competition level for target keywords, and the aggressiveness of the strategy.`,
    },
    {
      question: `Do you work with ${city.name} businesses in my industry?`,
      answer: `Yes, we serve businesses across all industries in ${city.name}, with particular expertise in ${joinList(city.businessTypes.slice(0, 3))}. Our team understands the specific search dynamics and competitive landscape of ${city.name}'s key business sectors.`,
    },
    {
      question: `Do you offer in-person consultations in ${city.name}?`,
      answer: `We offer both virtual and in-person consultations for our ${city.name} clients. Our team can meet at your ${city.name} office for strategy sessions, audits, and quarterly reviews. Most day-to-day collaboration happens via video calls and our client dashboard.`,
    },
    {
      question: `What makes your ${service.shortTitle} approach in ${city.name} different?`,
      answer: `Our ${city.name} ${service.shortTitle} strategy is built on local market intelligence — we understand ${city.name}'s unique economic drivers (${joinList(city.economy.slice(0, 3))}), local search behaviors, and competitive dynamics. This hyperlocal knowledge, combined with our proven methodology, delivers results that generic agencies can't match.`,
    },
    {
      question: `Can you help my ${city.name} business compete against larger companies?`,
      answer: `Absolutely. Many of our most successful ${city.name} clients started as smaller businesses competing against larger, established players. ${service.shortTitle} is one of the most powerful equalizers in digital marketing — a well-optimized smaller business can outrank larger competitors for valuable keywords.`,
    },
    {
      question: `What ${service.shortTitle} tools do you use for ${city.name} businesses?`,
      answer: `We use industry-leading tools including Ahrefs, SEMrush, Google Search Console, Screaming Frog, and our proprietary analytics platform. For ${city.name} businesses specifically, we also leverage local market data and ${country.searchEngine}-specific insights to inform our strategy.`,
    },
    {
      question: `How do you report on ${service.shortTitle} progress for ${city.name} clients?`,
      answer: `Every ${city.name} client receives monthly reports covering keyword rankings, organic traffic trends, competitive positioning, and ROI metrics specific to the ${city.name} market. You'll also have access to a live dashboard and regular strategy calls with your dedicated account manager.`,
    },
  ];

  // Combine with service-level FAQs
  const serviceFAQs = pickN(service.faqPool, seed + "-service", 4);
  const localPicked = pickN(localFAQs, seed + "-local", count - serviceFAQs.length);

  // Interleave for variety
  const result: { question: string; answer: string }[] = [];
  let li = 0,
    si = 0;
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0 && li < localPicked.length) {
      result.push(localPicked[li++]);
    } else if (si < serviceFAQs.length) {
      result.push(serviceFAQs[si++]);
    } else if (li < localPicked.length) {
      result.push(localPicked[li++]);
    }
  }
  return result;
}

function generateCountryFAQs(
  service: ServiceContentData,
  country: CountryData,
  count = 8
): { question: string; answer: string }[] {
  const seed = `${service.slug}-${country.slug}`;

  const countryFAQs: { question: string; answer: string }[] = [
    {
      question: `How much does ${service.shortTitle} cost in ${country.name}?`,
      answer: `Our ${service.shortTitle} services in ${country.name} range from $999/month (Starter) to $4,999/month (Enterprise), depending on your business size, competition level, and goals. We'll recommend the right investment after a free analysis of your site.`,
    },
    {
      question: `Do you serve businesses across all of ${country.name}?`,
      answer: `Yes, we serve businesses in every major city and region across ${country.name}. Our team has specific expertise in the ${country.searchEngine} search landscape and the unique competitive dynamics of the ${country.name} market.`,
    },
    {
      question: `What industries do you specialize in within ${country.name}?`,
      answer: `We have deep expertise across ${country.name}'s key sectors including ${joinList(country.topIndustries.slice(0, 4))}. Each industry has unique search dynamics that we understand and optimize for.`,
    },
    {
      question: `How is ${service.shortTitle} in ${country.name} different from other markets?`,
      answer: `${country.uniqueMarketFact}. These unique market characteristics require ${service.shortTitle} strategies tailored to ${country.name}'s specific search ecosystem, consumer behaviors, and competitive landscape.${country.regulatoryNotes ? ` Additionally, ${country.regulatoryNotes}.` : ""}`,
    },
    {
      question: `What results have you achieved for ${country.name} businesses?`,
      answer: `Our ${country.name} clients consistently see significant improvements — average traffic growth of 300%+, first-page rankings for competitive keywords, and substantial increases in organic leads and revenue. Results vary by industry and starting position.`,
    },
    {
      question: `Do you comply with ${country.name}'s data and privacy regulations?`,
      answer: `Absolutely. ${country.regulatoryNotes ? country.regulatoryNotes + "." : `We ensure full compliance with all ${country.name} data protection and privacy regulations.`} All our tools and processes are configured to meet local requirements.`,
    },
  ];

  const serviceFAQs = pickN(service.faqPool, seed + "-service", 4);
  const countryPicked = pickN(countryFAQs, seed + "-country", count - serviceFAQs.length);

  const result: { question: string; answer: string }[] = [];
  let ci = 0, si = 0;
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0 && ci < countryPicked.length) {
      result.push(countryPicked[ci++]);
    } else if (si < serviceFAQs.length) {
      result.push(serviceFAQs[si++]);
    } else if (ci < countryPicked.length) {
      result.push(countryPicked[ci++]);
    }
  }
  return result;
}

// ========== MAIN GENERATORS ==========

export function generateCityPageContent(
  service: ServiceContentData,
  city: CityData,
  country: CountryData
): GeneratedPageContent {
  const seed = `${service.slug}-${country.slug}-${city.slug}`;

  return {
    heroSubtitle: pick(heroSubtitleTemplates, seed)(
      service.shortTitle,
      city.name,
      country.name
    ),
    aboutParagraphs: pickN(aboutParagraphGenerators, seed + "-about", 3).map(
      (gen) => gen(service, city, country)
    ),
    marketInsights: pickN(
      marketInsightGenerators,
      seed + "-market",
      2
    ).map((gen) => gen(service, city, country)),
    whyNeeded: pickN(whyNeededGenerators, seed + "-why", 2).map((gen) =>
      gen(service, city, country)
    ),
    industries: pickN(city.businessTypes, seed + "-ind", 8),
    faqs: generateCityFAQs(service, city, country),
  };
}

export function generateCountryPageContent(
  service: ServiceContentData,
  country: CountryData
): {
  heroSubtitle: string;
  aboutParagraphs: string[];
  whyNeeded: string[];
  faqs: { question: string; answer: string }[];
} {
  const seed = `${service.slug}-${country.slug}`;

  return {
    heroSubtitle: pick(heroSubtitleCountryTemplates, seed)(
      service.shortTitle,
      country.name
    ),
    aboutParagraphs: pickN(
      aboutCountryParagraphGenerators,
      seed + "-about",
      3
    ).map((gen) => gen(service, country)),
    whyNeeded: [
      `Businesses across ${country.name} are investing in ${service.shortTitle} at an unprecedented rate. With ${country.internetPenetration} internet penetration and ${country.mobileSearchShare} mobile search share, the organic search opportunity is massive — but the window to establish dominance is narrowing as competition intensifies.`,
      `${country.localSearchTrends}. These behavioral patterns mean that businesses without strong ${service.shortTitle} are missing out on the largest source of high-intent traffic available. Our ${country.name}-focused strategies are designed to capture this demand.`,
    ],
    faqs: generateCountryFAQs(service, country),
  };
}

export function generateServicePageContent(service: ServiceContentData): {
  heroSubtitle: string;
  aboutParagraphs: string[];
} {
  return {
    heroSubtitle: `Comprehensive ${service.shortTitle} services that deliver measurable results. From strategy to execution, we help businesses worldwide achieve search dominance.`,
    aboutParagraphs: [
      `${service.shortTitle} is one of the most impactful investments a business can make in its digital future. When executed correctly, it compounds over time — building authority, driving qualified traffic, and generating leads at a fraction of the cost of paid advertising. Our team brings deep expertise and a proven methodology to every engagement.`,
      `What sets our ${service.shortTitle} services apart is our commitment to data-driven decision-making. Every recommendation we make is backed by thorough analysis, competitive research, and a clear understanding of your business objectives. We don't follow templates — we build custom strategies that address your specific opportunities and challenges.`,
      `With clients across 20+ countries and expertise spanning every major industry, we've developed a comprehensive understanding of how ${service.shortTitle} drives results in different markets and verticals. This global perspective, combined with deep local market knowledge, enables us to deliver consistently exceptional outcomes.`,
    ],
  };
}
