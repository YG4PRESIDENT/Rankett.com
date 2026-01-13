"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
  // Background color of the section
  backgroundColor?: string;
  className?: string;
}

export default function HorizontalScroll({
  children,
  backgroundColor = "transparent",
  className = "",
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Calculate how far to scroll horizontally
    // (total width minus one viewport width)
    const scrollDistance = track.scrollWidth - window.innerWidth;

    // Create the horizontal scroll effect
    gsap.to(track, {
      x: -scrollDistance, // Move the track left
      ease: "none", // Linear movement
      scrollTrigger: {
        trigger: container,
        start: "top top", // Start when section hits top
        end: () => `+=${track.scrollWidth}`, // End after scrolling full width
        pin: true, // Pin the container
        scrub: 1, // Smooth scrubbing (1 = 1 second delay for smoothness)
        invalidateOnRefresh: true, // Recalculate on resize
        // markers: true, // Uncomment to debug
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      {/* The track that moves horizontally */}
      <div
        ref={trackRef}
        className="flex h-screen items-center"
        style={{ width: "fit-content" }}
      >
        {children}
      </div>
    </div>
  );
}
