"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const auditIncludes = [
  "Technical health score",
  "Keyword opportunity report",
  "Competitor comparison",
  "Backlink profile analysis",
  "Content gap identification",
  "Priority action items",
];

export default function FreeAuditRichCTA({
  location,
}: {
  location?: string;
}) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side */}
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get Your Free SEO Audit
                {location ? ` for ${location}` : ""}
              </motion.h2>
              <p className="text-text-muted mb-6">
                Discover exactly what&apos;s holding your site back and get a
                clear roadmap to improve your rankings. No commitment required.
              </p>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold font-[family-name:var(--font-heading)] hover:shadow-[0_0_20px_rgba(108,92,231,0.4)] transition-all duration-300"
              >
                Start Your Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
                Your audit includes:
              </p>
              <ul className="space-y-3">
                {auditIncludes.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-text-muted"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Check className="w-4 h-4 text-success shrink-0" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-text-muted text-xs mt-4 opacity-70">
                Delivered within 24 hours • No credit card required
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
