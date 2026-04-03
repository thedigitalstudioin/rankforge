"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(centered && "text-center", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
        {title}
      </h2>

      <motion.div
        className={cn(
          "h-1 rounded-full bg-gradient-to-r from-primary to-secondary mt-4",
          centered ? "mx-auto w-24" : "w-20"
        )}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        style={{ originX: 0 }}
      />

      {subtitle && (
        <p
          className={cn(
            "text-lg text-text-muted max-w-2xl mt-4",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
