"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses = {
  primary:
    "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(108,92,231,0.4),0_0_40px_rgba(0,210,255,0.2)]",
  secondary:
    "bg-tertiary text-white hover:shadow-[0_0_20px_rgba(255,107,107,0.4)]",
  outline:
    "bg-transparent border border-primary/50 gradient-text hover:border-primary hover:shadow-[0_0_20px_rgba(108,92,231,0.3)]",
};

export default function GradientButton({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  loading = false,
  onClick,
  type = "button",
}: GradientButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-xl font-[family-name:var(--font-heading)] font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = loading ? (
    <Loader2 className="h-5 w-5 animate-spin" />
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={loading}
    >
      {content}
    </button>
  );
}
