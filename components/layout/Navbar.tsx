"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-[family-name:var(--font-heading)] font-bold text-2xl gradient-text">
                {SITE.name}
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-text-primary"
                        : "text-text-muted hover:text-text-primary"
                    )}
                  >
                    {link.label}
                    {/* Underline indicator */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full transition-transform duration-300 origin-center",
                        isActive
                          ? "w-3/4 scale-x-100"
                          : "w-3/4 scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                    {/* Hover underline for non-active links */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA + Mobile hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/free-audit"
                className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg bg-tertiary text-white font-semibold text-sm transition-all duration-300 hover:bg-tertiary/90 glow-tertiary hover:shadow-[0_0_30px_rgba(255,107,107,0.5)]"
              >
                Free Audit
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative z-50 p-2 text-text-primary"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.06,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-6 py-3 text-2xl font-medium transition-colors duration-200",
                        isActive
                          ? "gradient-text font-bold"
                          : "text-text-muted hover:text-text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.3,
                  delay: NAV_LINKS.length * 0.06,
                }}
                className="mt-6"
              >
                <Link
                  href="/free-audit"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center px-8 py-3 rounded-lg bg-tertiary text-white font-semibold text-lg transition-all duration-300 hover:bg-tertiary/90 glow-tertiary"
                >
                  Free Audit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
