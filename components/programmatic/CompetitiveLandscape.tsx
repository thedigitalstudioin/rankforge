"use client";

import { motion } from "framer-motion";

interface CompetitiveLandscapeProps {
  cityName: string;
  competitionLevel: "very high" | "high" | "moderate" | "growing" | "emerging";
  searchBehavior: string;
  topCompetitorIndustries: string[];
}

const levelConfig: Record<
  CompetitiveLandscapeProps["competitionLevel"],
  { segments: number; color: string; glowColor: string; label: string }
> = {
  "very high": {
    segments: 5,
    color: "bg-tertiary",
    glowColor: "shadow-[0_0_12px_rgba(255,107,107,0.6)]",
    label: "Very High Competition",
  },
  high: {
    segments: 4,
    color: "bg-[#FF9F43]",
    glowColor: "shadow-[0_0_12px_rgba(255,159,67,0.6)]",
    label: "High Competition",
  },
  moderate: {
    segments: 3,
    color: "bg-primary",
    glowColor: "shadow-[0_0_12px_rgba(108,92,231,0.6)]",
    label: "Moderate Competition",
  },
  growing: {
    segments: 2,
    color: "bg-secondary",
    glowColor: "shadow-[0_0_12px_rgba(0,210,255,0.6)]",
    label: "Growing Market",
  },
  emerging: {
    segments: 1,
    color: "bg-success",
    glowColor: "shadow-[0_0_12px_rgba(0,230,118,0.6)]",
    label: "Emerging Market",
  },
};

export default function CompetitiveLandscape({
  cityName,
  competitionLevel,
  searchBehavior,
  topCompetitorIndustries,
}: CompetitiveLandscapeProps) {
  const config = levelConfig[competitionLevel];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Competitive Search Landscape in{" "}
          <span className="gradient-text">{cityName}</span>
        </motion.h2>

        <motion.div
          className="glass p-8 md:p-10 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Competition Meter */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-text-muted text-sm uppercase tracking-wider">
                Competition Level
              </span>
              <span
                className={`text-sm font-semibold ${
                  competitionLevel === "very high"
                    ? "text-tertiary"
                    : competitionLevel === "high"
                    ? "text-[#FF9F43]"
                    : competitionLevel === "moderate"
                    ? "text-primary"
                    : competitionLevel === "growing"
                    ? "text-secondary"
                    : "text-success"
                }`}
              >
                {config.label}
              </span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((seg) => (
                <motion.div
                  key={seg}
                  className={`h-3 flex-1 rounded-full transition-all ${
                    seg <= config.segments
                      ? `${config.color} ${config.glowColor}`
                      : "bg-white/5"
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + seg * 0.1 }}
                  style={{ transformOrigin: "left" }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-text-muted">
              <span>Emerging</span>
              <span>Very High</span>
            </div>
          </div>

          {/* Search Behavior */}
          <p className="text-text-muted leading-relaxed mb-8">
            {searchBehavior}
          </p>

          {/* Top Competing Industries */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-text-muted mb-4">
              Top Competing Industries
            </h3>
            <div className="flex flex-wrap gap-2">
              {topCompetitorIndustries.map((industry, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
