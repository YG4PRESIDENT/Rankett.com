"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StickyRevealProps {
  children: ReactNode;
  // How long the section stays pinned (in viewport heights)
  // e.g., 2 = pinned for 2 full screen heights of scrolling
  scrollLength?: number;
  // Background color while pinned
  backgroundColor?: string;
  className?: string;
}

export default function StickyReveal({
  children,
  scrollLength = 2,
  backgroundColor = "transparent",
  className = "",
}: StickyRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Pin the section and create reveal animation
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top", // Pin when top of section hits top of viewport
      end: `+=${scrollLength * 100}%`, // How long to stay pinned
      pin: true, // This is the magic - pins the element
      pinSpacing: true, // Add space after the pinned element
      // markers: true, // Uncomment to debug
    });

    // Animate children as user scrolls through pinned section
    const items = content.querySelectorAll("[data-reveal-item]");
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container,
            start: `top+=${(index / items.length) * scrollLength * 50}% top`,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [scrollLength]);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen ${className}`}
      style={{ backgroundColor }}
    >
      <div ref={contentRef} className="h-full">
        {children}
      </div>
    </div>
  );
}
