"use client";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    lenis: any;
  }
}

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      // Skip lenis initialization if reduced motion is preferred
      return;
    }

    // Dynamically import lenis
    import("lenis").then((lenisModule) => {
      const Lenis = lenisModule.default;
      
      // Initialize Lenis
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      });

      // For React, we need to sync the rAF
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Store lenis instance in window for potential use elsewhere
      window.lenis = lenis;

      // Cleanup function
      return () => {
        lenis.destroy();
        delete window.lenis;
      };
    });
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return <div ref={containerRef}>{children}</div>;
};