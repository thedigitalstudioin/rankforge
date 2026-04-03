"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
    setActive(index);
  }, []);

  // Auto-rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % TESTIMONIALS.length;
        scrollToIndex(next);
        return next;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scrollToIndex]);

  const handleDotClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    scrollToIndex(index);
    // Restart auto-rotate
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % TESTIMONIALS.length;
        scrollToIndex(next);
        return next;
      });
    }, 5000);
  };

  // Sync active dot on manual scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth || 1;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    if (index !== active && index >= 0 && index < TESTIMONIALS.length) {
      setActive(index);
    }
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real results from real businesses. See how we've helped companies across industries dominate their search rankings."
        />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto mt-16 pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="flex-shrink-0 w-[340px] md:w-[400px] snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === active
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-text-muted/30 hover:bg-text-muted/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
