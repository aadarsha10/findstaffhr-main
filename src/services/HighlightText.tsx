"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
  textClassName?: string;
  highlightColor?: string;
  delayAnimation?: number; // Delay in milliseconds
  duration?: number; // Animation duration in ms
}

/**
 * HighlightText component that animates text highlighting on render
 *
 * @example
 * <HighlightText>Important text</HighlightText>
 *
 * @example with custom colors
 * <HighlightText
 *   highlightColor="bg-primary-purple"
 * >
 *   Purple highlight
 * </HighlightText>
 */
export function HighlightText({
  children,
  className,
  textClassName,
  highlightColor = "bg-tertiary-green",
  delayAnimation = 700, // Default delay
  duration = 700, // Default duration
}: HighlightTextProps) {
  // Set animation variables
  const animationCSS = {
    "--highlight-delay": `${delayAnimation}ms`,
    "--highlight-duration": `${duration}ms`,
  } as React.CSSProperties;

  return (
    <span
      className={cn("relative inline-block overflow-hidden ", className)}
      style={animationCSS}
    >
      {/* Background element with animation */}
      <span
        className={cn(
          "absolute inset-0 w-0 origin-left z-0",
          highlightColor,
          "animate-highlight-bg"
        )}
      />

      {/* Text element that changes color simultaneously with background */}
      <span
        className={cn("relative z-10 animate-highlight-text", textClassName)}
      >
        {children}
      </span>
    </span>
  );
}

export default HighlightText;
