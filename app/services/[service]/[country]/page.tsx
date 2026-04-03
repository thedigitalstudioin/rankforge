import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getServiceContent } from "@/data/services";
import { getCountry, getAllCountryParams, ALL_COUNTRIES } from "@/data/countries";
import { generateCountryPageContent } from "@/data/content-generators";
import { orchestrateCountrySections } from "@/data/section-orchestrator";
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQSchema,
} from "@/components/programmatic/SchemaMarkup";
import CountryPageClient from "./CountryPageClient";

interface PageProps {
  params: Promise<{ service: string; country: string }>;
}

export async function generateStaticParams() {
  return getAllCountryParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: serviceSlug, country: countrySlug } = await params;
  const service = getServiceContent(serviceSlug);
  const country = getCountry(countrySlug);
  if (!service || !country) return {};

  const title = `${service.title} in ${country.name} | RankForge`.slice(0, 60);
  const description = `Expert ${service.shortTitle} services in ${country.name}. We help ${country.name} businesses dominate Google search. Free consultation. Transparent pricing.`.slice(0, 160);
  const url = `${SITE.url}/services/${serviceSlug}/${countrySlug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE.name,
      locale: "en_US",
      images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE.url}/og-image.png`],
      creator: "@rankforge",
    },
  };
}

export default async function CountryPage({ params }: PageProps) {
  const { service: serviceSlug, country: countrySlug } = await params;
  const service = getServiceContent(serviceSlug);
  const country = getCountry(countrySlug);
  if (!service || !country) notFound();

  const content = generateCountryPageContent(service, country);
  const otherCountries = ALL_COUNTRIES.filter((c) => c.slug !== countrySlug);
  const orchestration = orchestrateCountrySections(service, country);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          {
            name: service.title,
            url: `${SITE.url}/services/${serviceSlug}`,
          },
          {
            name: country.name,
            url: `${SITE.url}/services/${serviceSlug}/${countrySlug}`,
          },
        ]}
      />
      <ServiceSchema
        serviceName={`${service.title} Services in ${country.name}`}
        description={content.aboutParagraphs[0]}
        areaServed={{ type: "Country", name: country.name }}
      />
      <FAQSchema faqs={content.faqs} />

      <CountryPageClient
        service={{
          slug: service.slug,
          title: service.title,
          shortTitle: service.shortTitle,
          features: service.includedItems,
          processSteps: service.processSteps,
          stats: service.stats,
        }}
        country={{
          name: country.name,
          slug: country.slug,
          flag: country.flag,
          topIndustries: country.topIndustries,
          cities: country.cities.map((c) => ({
            name: c.name,
            slug: c.slug,
            region: c.region,
          })),
          regionGroups: country.regionGroups,
        }}
        content={content}
        otherCountries={otherCountries.map((c) => ({
          name: c.name,
          slug: c.slug,
          flag: c.flag,
        }))}
        orchestration={orchestration}
      />
    </>
  );
}
