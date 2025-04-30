"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, ReactNode } from "react";

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
  textClassName?: string;
  highlightColor?: string;
  delayAnimation?: number; // Delay in milliseconds
  duration?: number; // Animation duration in ms
}

/**
 * HighlightText component that animates text highlighting when it enters the viewport
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
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Use the first entry (our element)
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after animation is triggered to prevent re-triggering
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null, // Use the viewport as root
        rootMargin: "0px", // No margin
        threshold: 0.1, // Trigger when 10% is visible (more responsive than higher values)
      }
    );

    // Start observing the element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to unobserve when component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Set animation variables
  const animationCSS = {
    "--highlight-delay": `${delayAnimation}ms`,
    "--highlight-duration": `${duration}ms`,
  } as React.CSSProperties;

  return (
    <span
      ref={ref}
      className={cn("relative inline-block overflow-hidden", className)}
      style={animationCSS}
    >
      {/* Background element with animation */}
      <span
        className={cn(
          "absolute inset-0 w-0 origin-left z-0",
          highlightColor,
          isVisible ? "animate-highlight-bg" : ""
        )}
      />

      {/* Text element that changes color simultaneously with background */}
      <span
        className={cn(
          "relative z-10",
          isVisible ? "animate-highlight-text" : "",
          textClassName
        )}
      >
        {children}
      </span>
    </span>
  );
}

export default HighlightText;
