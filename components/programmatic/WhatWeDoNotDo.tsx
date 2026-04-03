"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface WhatWeDoNotDoItem {
  title: string;
  reason: string;
}

interface WhatWeDoNotDoProps {
  serviceName: string;
  items: WhatWeDoNotDoItem[];
}

export default function WhatWeDoNotDo({
  serviceName,
  items,
}: WhatWeDoNotDoProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Don&apos;t Do{" "}
          <span className="text-text-muted">(And Why)</span>
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We believe in transparency. Here&apos;s what you won&apos;t find in
          our {serviceName} approach.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="glass p-6 rounded-xl border border-tertiary/10 hover:border-tertiary/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-tertiary" />
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-2 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
