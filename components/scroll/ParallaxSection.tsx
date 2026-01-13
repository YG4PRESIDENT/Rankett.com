"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: ReactNode;
  // How much the element moves relative to scroll (0.5 = half speed, 2 = double speed)
  speed?: number;
  // Optional background image URL
  backgroundImage?: string;
  // Height of the section
  height?: string;
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  backgroundImage,
  height = "100vh",
  className = "",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    if (!section || !background) return;

    // Calculate how much the background should move
    // If speed is 0.5, background moves at half the scroll speed (creates depth)
    const movement = (1 - speed) * 100;

    gsap.to(background, {
      yPercent: movement, // Move background as user scrolls
      ease: "none", // Linear movement, no easing
      scrollTrigger: {
        trigger: section,
        start: "top bottom", // Start when section enters viewport
        end: "bottom top", // End when section leaves viewport
        scrub: true, // Smoothly animate based on scroll position
        // markers: true, // Uncomment to debug
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Background layer - moves slower */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -top-[20%] -bottom-[20%]"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content layer - moves at normal scroll speed */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
