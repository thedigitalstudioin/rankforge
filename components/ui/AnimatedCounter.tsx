"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (latest) =>
    latest.toFixed(decimals)
  );

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text">
        <motion.span>{display}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="mt-2 text-text-muted">{label}</p>
    </div>
  );
}
