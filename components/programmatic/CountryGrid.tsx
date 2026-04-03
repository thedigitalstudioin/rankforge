"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CountryData } from "@/data/types";

interface CountryGridProps {
  countries: CountryData[];
  serviceSlug: string;
  title?: string;
}

export default function CountryGrid({
  countries,
  serviceSlug,
  title = "Our Services Worldwide",
}: CountryGridProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center">
          {title}
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          We deliver results for businesses in {countries.length} countries
          across the globe.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {countries.map((country, i) => (
            <motion.div
              key={country.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Link
                href={`/services/${serviceSlug}/${country.slug}`}
                className="glass group block p-4 rounded-xl text-center hover:border-primary/40 transition-all duration-300"
              >
                <span className="text-3xl mb-2 block">{country.flag}</span>
                <span className="text-text-primary font-medium text-sm group-hover:text-primary transition-colors">
                  {country.name}
                </span>
                <span className="text-text-muted text-xs block mt-1">
                  {country.cities.length}{" "}
                  {country.cities.length === 1 ? "city" : "cities"}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
