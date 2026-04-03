import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getServiceContent, SERVICE_SLUGS } from "@/data/services";
import { ALL_COUNTRIES } from "@/data/countries";
import { generateServicePageContent } from "@/data/content-generators";
import { orchestrateServiceSections } from "@/data/section-orchestrator";
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQSchema,
} from "@/components/programmatic/SchemaMarkup";
import ServicePageClient from "./ServicePageClient";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ service: slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceContent(serviceSlug);
  if (!service) return {};

  const title = `${service.title} Services | RankForge`.slice(0, 60);
  const description = `Professional ${service.shortTitle} services to improve your search rankings. Proven results with 340% avg traffic growth. Get a free audit today!`.slice(0, 160);
  const url = `${SITE.url}/services/${serviceSlug}`;

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

export default async function ServicePage({ params }: PageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceContent(serviceSlug);
  if (!service) notFound();

  const content = generateServicePageContent(service);
  const orchestration = orchestrateServiceSections(service);
  const breadcrumbUrl = `${SITE.url}/services/${serviceSlug}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: service.title, url: breadcrumbUrl },
        ]}
      />
      <ServiceSchema
        serviceName={`${service.title} Services`}
        description={content.aboutParagraphs[0]}
      />
      <FAQSchema faqs={service.faqPool.slice(0, 8)} />

      <ServicePageClient
        service={service}
        content={content}
        countries={ALL_COUNTRIES.map((c) => ({
          name: c.name,
          slug: c.slug,
          flag: c.flag,
          cityCount: c.cities.length,
        }))}
        orchestration={orchestration}
      />
    </>
  );
}
