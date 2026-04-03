"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ChevronDown } from "lucide-react";

interface Mistake {
  title: string;
  description: string;
  fix: string;
}

interface CommonMistakesProps {
  location: string;
  serviceName: string;
  mistakes: Mistake[];
}

export default function CommonMistakes({
  location,
  serviceName,
  mistakes,
}: CommonMistakesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-tertiary">{mistakes.length}</span>{" "}
          {serviceName} Mistakes {location} Businesses Make
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Avoid these common pitfalls to get better results faster.
        </motion.p>

        <div className="space-y-4">
          {mistakes.map((mistake, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={i}
                className="glass rounded-xl overflow-hidden border border-tertiary/10 hover:border-tertiary/20 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <button
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : i)
                  }
                  className="w-full flex items-start gap-4 p-5 text-left"
                  aria-expanded={isExpanded}
                >
                  {/* Number + Icon */}
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="text-2xl font-bold text-tertiary/40 font-[family-name:var(--font-heading)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-tertiary" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-text-primary font-semibold font-[family-name:var(--font-heading)]">
                      {mistake.title}
                    </h3>
                    <p className="text-text-muted text-sm mt-1 leading-relaxed">
                      {mistake.description}
                    </p>
                  </div>

                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 mt-1"
                  >
                    <ChevronDown className="w-5 h-5 text-text-muted" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 ml-[4.5rem]">
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-success/5 border border-success/10">
                          <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-success" />
                          </div>
                          <div>
                            <span className="text-success text-xs font-semibold uppercase tracking-wider">
                              The Fix
                            </span>
                            <p className="text-text-muted text-sm mt-1 leading-relaxed">
                              {mistake.fix}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
