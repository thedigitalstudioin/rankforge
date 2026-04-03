import { SITE } from "@/lib/constants";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  serviceName,
  description,
  areaServed,
}: {
  serviceName: string;
  description: string;
  areaServed?:
    | { type: "Country"; name: string }
    | { type: "City"; name: string; country: string };
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  if (areaServed) {
    if (areaServed.type === "Country") {
      schema.areaServed = {
        "@type": "Country",
        name: areaServed.name,
      };
    } else {
      schema.areaServed = {
        "@type": "City",
        name: areaServed.name,
        containedInPlace: {
          "@type": "Country",
          name: areaServed.country,
        },
      };
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema({
  cityName,
  countryName,
}: {
  cityName: string;
  countryName: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressCountry: countryName,
    },
    areaServed: {
      "@type": "City",
      name: cityName,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
