"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  Stethoscope,
  Scale,
  Home,
  GraduationCap,
  UtensilsCrossed,
  Factory,
  Briefcase,
  Car,
  Plane,
  Landmark,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "Real Estate": Home,
  "Healthcare": Stethoscope,
  "E-commerce": ShoppingBag,
  "Legal": Scale,
  "Education": GraduationCap,
  "Restaurants": UtensilsCrossed,
  "Manufacturing": Factory,
  "Finance": Landmark,
  "Automotive": Car,
  "Travel": Plane,
};

function getIcon(industry: string): LucideIcon {
  for (const [key, icon] of Object.entries(iconMap)) {
    if (industry.toLowerCase().includes(key.toLowerCase())) return icon;
  }
  return industry.toLowerCase().includes("tech") ? Briefcase : Building2;
}

export default function IndustryGrid({
  industries,
  title = "Industries We Serve",
  location,
}: {
  industries: string[];
  title?: string;
  location?: string;
}) {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center">
          {title}
        </h2>
        {location && (
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Specialized SEO strategies for {location}&apos;s key business
            sectors.
          </p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {industries.map((industry, i) => {
            const Icon = getIcon(industry);
            return (
              <motion.div
                key={i}
                className="glass p-4 rounded-xl text-center group hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-text-muted text-sm">{industry}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
