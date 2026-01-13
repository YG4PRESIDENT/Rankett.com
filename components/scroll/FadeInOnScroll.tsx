"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInOnScrollProps {
  children: ReactNode;
  // Direction the element comes from
  direction?: "up" | "down" | "left" | "right";
  // How far the element moves (in pixels)
  distance?: number;
  // How long the animation takes (in seconds)
  duration?: number;
  // Delay before animation starts (in seconds)
  delay?: number;
  // When to trigger: "top bottom" means when top of element hits bottom of viewport
  triggerPoint?: string;
  className?: string;
}

export default function FadeInOnScroll({
  children,
  direction = "up",
  distance = 50,
  duration = 0.8,
  delay = 0,
  triggerPoint = "top 85%",
  className = "",
}: FadeInOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial position based on direction
    const initialPosition = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { y: 0, x: distance },
      right: { y: 0, x: -distance },
    };

    const { x, y } = initialPosition[direction];

    // Set starting state (invisible and offset)
    gsap.set(element, {
      opacity: 0,
      x,
      y,
    });

    // Create the animation
    gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: "power2.out", // Smooth easing curve
      scrollTrigger: {
        trigger: element,
        start: triggerPoint, // When top of element hits 85% down the viewport
        toggleActions: "play none none none", // Play once, don't reverse
        // markers: true, // Uncomment to see trigger points (for debugging)
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, distance, duration, delay, triggerPoint]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
