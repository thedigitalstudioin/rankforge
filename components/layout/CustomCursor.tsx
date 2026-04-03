"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on devices with a fine pointer (desktop with mouse)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest(
          "a, button, [role=button], input, textarea, select, [data-cursor-hover]"
        )
      ) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest(
          "a, button, [role=button], input, textarea, select, [data-cursor-hover]"
        )
      ) {
        setHovering(false);
      }
    };

    const handleMouseLeave = () => {
      mouseX.set(-100);
      mouseY.set(-100);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  const size = hovering ? 40 : 20;

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 z-50 pointer-events-none rounded-full border-2 border-primary"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
        background: hovering
          ? "rgba(108, 92, 231, 0.15)"
          : "rgba(108, 92, 231, 0.06)",
        transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease",
      }}
    />
  );
}
