"use client";

import { motion } from "framer-motion";
import { FileText, BarChart3, MessageSquare, Target } from "lucide-react";

const icons = [FileText, BarChart3, MessageSquare, Target];

export default function DeliverablesOverview({
  deliverables,
  serviceName,
}: {
  deliverables: string[];
  serviceName: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center">
          What You&apos;ll Receive Monthly
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Complete transparency into your {serviceName} progress with
          actionable deliverables every month.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {deliverables.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                className="glass p-4 rounded-xl flex items-start gap-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-text-muted text-sm leading-relaxed pt-2">
                  {item}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
