"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const { name, company, role, quote, rating } = testimonial;

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 relative transition-all hover:border-white/15",
        className
      )}
      whileHover={{ y: -4 }}
      onHoverStart={(e) => {
        (e.target as HTMLElement).classList.add("glow-primary");
      }}
      onHoverEnd={(e) => {
        (e.target as HTMLElement).classList.remove("glow-primary");
      }}
    >
      <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/30" />

      <div className="flex gap-1 mb-4 mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating
                ? "fill-amber-400 text-amber-400"
                : "fill-none text-text-muted/40"
            )}
          />
        ))}
      </div>

      <p className="text-lg italic text-text-primary/90 mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-semibold text-white shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-text-primary">{name}</p>
          <p className="text-sm text-text-muted">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
