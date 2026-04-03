"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "primary" | "secondary" | "tertiary";
}

const glowClassMap = {
  primary: "glow-primary",
  secondary: "glow-secondary",
  tertiary: "glow-tertiary",
};

export default function GlassCard({
  children,
  className,
  hover = true,
  glow,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 transition-all",
        hover && "hover:border-white/15",
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      onHoverStart={(e) => {
        if (hover && glow) {
          (e.target as HTMLElement).classList.add(glowClassMap[glow]);
        }
      }}
      onHoverEnd={(e) => {
        if (hover && glow) {
          (e.target as HTMLElement).classList.remove(glowClassMap[glow]);
        }
      }}
    >
      {children}
    </motion.div>
  );
}
