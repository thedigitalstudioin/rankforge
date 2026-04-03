"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

interface Tool {
  name: string;
  purpose: string;
  category: string;
}

interface ToolsTechnologyProps {
  tools: Tool[];
  title?: string;
}

const categoryOrder = ["Analysis", "Tracking", "Optimization", "Reporting"];

const categoryAccents: Record<string, string> = {
  Analysis: "from-primary to-primary/60",
  Tracking: "from-secondary to-secondary/60",
  Optimization: "from-success to-success/60",
  Reporting: "from-[#FF9F43] to-[#FF9F43]/60",
};

export default function ToolsTechnology({
  tools,
  title,
}: ToolsTechnologyProps) {
  const grouped = useMemo(() => {
    const groups: Record<string, Tool[]> = {};
    for (const tool of tools) {
      const cat = tool.category || "Other";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(tool);
    }
    // Sort by known order, then alphabetically for unknowns
    const sorted = Object.entries(groups).sort(([a], [b]) => {
      const ai = categoryOrder.indexOf(a);
      const bi = categoryOrder.indexOf(b);
      if (ai === -1 && bi === -1) return a.localeCompare(b);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
    return sorted;
  }, [tools]);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title || "Tools & Technology We Use"}
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Industry-leading platforms powering every campaign.
        </motion.p>

        <div className="space-y-12">
          {grouped.map(([category, categoryTools], catIndex) => {
            const accent =
              categoryAccents[category] || "from-primary to-secondary";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center`}
                  >
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary font-[family-name:var(--font-heading)]">
                    {category}
                  </h3>
                  <div className={`flex-1 h-px bg-gradient-to-r ${accent} opacity-20`} />
                </div>

                {/* Tool Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryTools.map((tool, i) => (
                    <motion.div
                      key={i}
                      className="glass p-5 rounded-xl hover:shadow-[0_0_20px_rgba(108,92,231,0.1)] transition-shadow duration-300 group"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.1 + i * 0.05,
                      }}
                    >
                      <h4 className="text-text-primary font-semibold mb-1 group-hover:text-primary transition-colors">
                        {tool.name}
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {tool.purpose}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
