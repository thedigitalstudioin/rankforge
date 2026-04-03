"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ServicesOverview() {
  return (
    <section className="relative">
      {/* Background blob */}
      <div className="mesh-blob w-[800px] h-[800px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive SEO solutions tailored to your business goals. From technical foundations to content strategy, we cover every angle."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <GlassCard className="h-full flex flex-col" glow="primary">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] gradient-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed line-clamp-2 flex-1">
                    {service.shortDesc}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary hover:text-secondary transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
