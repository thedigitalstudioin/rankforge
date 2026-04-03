import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getServiceContent } from "@/data/services";
import { getCity, getAllCityParams, getNearbyCities } from "@/data/countries";
import { generateCityPageContent } from "@/data/content-generators";
import { orchestrateCitySections } from "@/data/section-orchestrator";
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQSchema,
  LocalBusinessSchema,
} from "@/components/programmatic/SchemaMarkup";
import CityPageClient from "./CityPageClient";

interface PageProps {
  params: Promise<{ service: string; country: string; city: string }>;
}

export async function generateStaticParams() {
  return getAllCityParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {
    service: serviceSlug,
    country: countrySlug,
    city: citySlug,
  } = await params;
  const service = getServiceContent(serviceSlug);
  const result = getCity(countrySlug, citySlug);
  if (!service || !result) return {};

  const { city, country } = result;
  let title = `${service.shortTitle} in ${city.name} — Expert SEO | RankForge`;
  if (title.length > 60) title = `${service.shortTitle} in ${city.name} | RankForge`;
  if (title.length > 60) title = title.slice(0, 57) + "...";
  const description = `${service.shortTitle} services in ${city.name}, ${country.name}. Local SEO experts helping ${city.name} businesses rank #1 on Google. Free audit available today!`.slice(0, 160);
  const url = `${SITE.url}/services/${serviceSlug}/${countrySlug}/${citySlug}`;

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

export default async function CityPage({ params }: PageProps) {
  const {
    service: serviceSlug,
    country: countrySlug,
    city: citySlug,
  } = await params;

  const service = getServiceContent(serviceSlug);
  const result = getCity(countrySlug, citySlug);
  if (!service || !result) notFound();

  const { city, country } = result;
  const content = generateCityPageContent(service, city, country);
  const nearbyCities = getNearbyCities(country, citySlug, 20);
  const orchestration = orchestrateCitySections(service, city, country);

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
          {
            name: city.name,
            url: `${SITE.url}/services/${serviceSlug}/${countrySlug}/${citySlug}`,
          },
        ]}
      />
      <ServiceSchema
        serviceName={`${service.title} Services in ${city.name}`}
        description={content.aboutParagraphs[0]}
        areaServed={{
          type: "City",
          name: city.name,
          country: country.name,
        }}
      />
      <FAQSchema faqs={content.faqs} />
      <LocalBusinessSchema
        cityName={city.name}
        countryName={country.name}
      />

      <CityPageClient
        service={{
          slug: service.slug,
          title: service.title,
          shortTitle: service.shortTitle,
          features: service.includedItems,
          processSteps: service.processSteps,
          stats: service.stats,
        }}
        city={{ name: city.name, slug: city.slug }}
        country={{ name: country.name, slug: country.slug }}
        content={content}
        nearbyCities={nearbyCities.map((c) => ({
          name: c.name,
          slug: c.slug,
        }))}
        orchestration={orchestration}
      />
    </>
  );
}
