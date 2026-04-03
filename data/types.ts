export interface CityData {
  name: string;
  slug: string;
  state?: string;
  population: string;
  populationRank?: string;
  economy: string[];
  knownFor: string[];
  searchBehavior: string;
  competitionLevel: "very high" | "high" | "moderate" | "growing" | "emerging";
  digitalMaturity: "highly mature" | "mature" | "rapidly growing" | "growing" | "emerging";
  localPlatforms?: string[];
  businessTypes: string[];
  uniqueFact: string;
  nearbyMajorCities?: string[];
  region?: string;
}

export interface CountryData {
  name: string;
  slug: string;
  flag: string;
  code: string;
  searchEngine: string;
  language: string;
  currency: string;
  marketSize: string;
  internetPenetration: string;
  mobileSearchShare: string;
  topIndustries: string[];
  regulatoryNotes?: string;
  localSearchTrends: string;
  uniqueMarketFact: string;
  cities: CityData[];
  regionGroups?: Record<string, string[]>; // region name -> city slugs
}

export interface ServiceContentData {
  slug: string;
  title: string;
  shortTitle: string;
  metaKeyword: string;
  features: string[];
  processSteps: { title: string; description: string }[];
  includedItems: string[];
  stats: { value: string; label: string }[];
  faqPool: { question: string; answer: string }[];
}

export interface GeneratedPageContent {
  heroSubtitle: string;
  aboutParagraphs: string[];
  marketInsights: string[];
  whyNeeded: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
}
