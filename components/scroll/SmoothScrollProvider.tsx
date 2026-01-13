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
    // Create Lenis instance with smooth scroll settings
    const lenis = new Lenis({
      // How smooth the scroll feels (0.1 = very smooth, 1 = instant)
      lerp: 0.1,
      // Enable smooth scrolling for wheel events
      smoothWheel: true,
      // Duration of scroll animation
      duration: 1.2,
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
