"use client";

import Link from "next/link";

export default function RelatedCities({
  cities,
  serviceSlug,
  countrySlug,
  serviceTitle,
  countryName,
}: {
  cities: { name: string; slug: string }[];
  serviceSlug: string;
  countrySlug: string;
  serviceTitle: string;
  countryName: string;
}) {
  if (cities.length === 0) return null;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center">
          {serviceTitle} in Other {countryName} Cities
        </h2>
        <p className="text-text-muted text-center mb-8 max-w-2xl mx-auto">
          We also provide {serviceTitle} services in these {countryName}{" "}
          cities.
        </p>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/services/${serviceSlug}/${countrySlug}/${city.slug}`}
              className="inline-block px-4 py-2 rounded-full text-sm glass hover:border-primary/40 hover:text-primary text-text-muted transition-all duration-200"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
