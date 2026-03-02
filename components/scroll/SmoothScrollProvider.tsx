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
    const isMobile = window.innerWidth < 768;

    // Create Lenis instance — mobile gets lighter settings to avoid touch jank
    const lenis = new Lenis({
      lerp: isMobile ? 0.1 : 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: isMobile ? 1.0 : 1.5,
      duration: isMobile ? 1.0 : 1.4,
      syncTouch: isMobile ? false : true,
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
