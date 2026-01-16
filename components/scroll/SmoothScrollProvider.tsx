"use client";

import { useEffect, useRef, createContext, useContext, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Create context so any component can access the Lenis instance
const SmoothScrollContext = createContext<Lenis | null>(null);

// Hook to access Lenis from any component
export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Create Lenis instance with smooth scroll settings (lenis.dev-style smoothness)
    const lenis = new Lenis({
      // How smooth the scroll feels (lower = smoother, 0.075 for lenis.dev-style)
      lerp: 0.075,
      // Enable smooth scrolling for wheel events
      smoothWheel: true,
      // Slower wheel sensitivity for smoother feel
      wheelMultiplier: 0.8,
      // Touch multiplier for mobile
      touchMultiplier: 1.5,
      // Duration of scroll animation (longer for smoother feel)
      duration: 1.4,
      // Sync touch scrolling (mimics touch device scroll)
      syncTouch: true,
      // Sync touch lerp for consistent feel
      syncTouchLerp: 0.04,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP's ScrollTrigger
    // This ensures ScrollTrigger animations stay in sync with smooth scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP's ticker for the animation loop (more efficient than requestAnimationFrame)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert to milliseconds
    });

    // Disable GSAP's lag smoothing for better performance
    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef.current}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
