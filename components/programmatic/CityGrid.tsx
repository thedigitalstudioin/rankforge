"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CityData } from "@/data/types";

interface CityGridProps {
  cities: CityData[];
  serviceSlug: string;
  countrySlug: string;
  title?: string;
  groupByRegion?: boolean;
  regionGroups?: Record<string, string[]>;
}

export default function CityGrid({
  cities,
  serviceSlug,
  countrySlug,
  title = "Cities We Serve",
  groupByRegion = false,
  regionGroups,
}: CityGridProps) {
  if (groupByRegion && regionGroups) {
    return (
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-12 text-center">
            {title}
          </h2>

          {Object.entries(regionGroups).map(([region, slugs]) => {
            const regionCities = slugs
              .map((slug) => cities.find((c) => c.slug === slug))
              .filter(Boolean) as CityData[];
            if (regionCities.length === 0) return null;

            return (
              <div key={region} className="mb-10">
                <h3 className="text-xl font-semibold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
                  {region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {regionCities.map((city) => (
                    <CityPill
                      key={city.slug}
                      city={city}
                      serviceSlug={serviceSlug}
                      countrySlug={countrySlug}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-8 text-center">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {cities.map((city) => (
            <CityPill
              key={city.slug}
              city={city}
              serviceSlug={serviceSlug}
              countrySlug={countrySlug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CityPill({
  city,
  serviceSlug,
  countrySlug,
}: {
  city: CityData;
  serviceSlug: string;
  countrySlug: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/services/${serviceSlug}/${countrySlug}/${city.slug}`}
        className="inline-block px-4 py-2 rounded-full text-sm glass hover:border-primary/40 hover:text-primary text-text-muted transition-all duration-200 hover:shadow-[0_0_15px_rgba(108,92,231,0.15)]"
      >
        {city.name}
      </Link>
    </motion.div>
  );
}
