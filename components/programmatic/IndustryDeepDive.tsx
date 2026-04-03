"use client";

import { motion } from "framer-motion";

interface Industry {
  name: string;
  description: string;
  challenges: string[];
  opportunity: string;
}

export default function IndustryDeepDive({
  location,
  industries,
}: {
  location: string;
  industries: Industry[];
}) {
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
          SEO for Key{" "}
          <span className="gradient-text">{location}</span>{" "}
          Industries
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tailored strategies for the industries that drive {location}&apos;s economy.
        </motion.p>

        <div className="space-y-12 md:space-y-20">
          {industries.map((ind, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={i}
                className={`glass rounded-2xl p-6 md:p-10 transition-all duration-300 hover:shadow-[0_0_35px_rgba(108,92,231,0.12)] hover:border-primary/15`}
                initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div
                  className={`flex flex-col ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-8 md:gap-12`}
                >
                  {/* Left: name + description + challenges */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4 font-[family-name:var(--font-heading)]">
                      {ind.name}
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-6">
                      {ind.description}
                    </p>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-tertiary font-semibold mb-3 font-[family-name:var(--font-heading)]">
                        Key Challenges
                      </h4>
                      <ul className="space-y-2">
                        {ind.challenges.map((c, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-text-muted text-sm"
                          >
                            <span className="text-tertiary mt-0.5 shrink-0">&#9679;</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: opportunity callout */}
                  <div className="flex-1 flex items-center">
                    <div className="w-full rounded-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-success/10 border border-success/15 p-6 md:p-8">
                      <h4 className="text-sm uppercase tracking-wider text-success font-semibold mb-3 font-[family-name:var(--font-heading)]">
                        The Opportunity
                      </h4>
                      <p className="text-text-primary leading-relaxed">
                        {ind.opportunity}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
