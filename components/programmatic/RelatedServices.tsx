"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_CONTENT } from "@/data/services";

export default function RelatedServices({
  currentServiceSlug,
  countrySlug,
  citySlug,
  location,
}: {
  currentServiceSlug: string;
  countrySlug?: string;
  citySlug?: string;
  location: string;
}) {
  const otherServices = SERVICE_CONTENT.filter(
    (s) => s.slug !== currentServiceSlug
  );

  function buildHref(serviceSlug: string): string {
    let href = `/services/${serviceSlug}`;
    if (countrySlug) href += `/${countrySlug}`;
    if (citySlug) href += `/${citySlug}`;
    return href;
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center">
          Other SEO Services in {location}
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Explore our full range of SEO services available in {location}.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {otherServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={buildHref(service.slug)}
                className="glass group block p-5 rounded-xl hover:border-primary/40 transition-all duration-300"
              >
                <h3 className="text-text-primary font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm mb-3 line-clamp-2">
                  {service.features[0]}, {service.features[1].toLowerCase()},
                  and more.
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
