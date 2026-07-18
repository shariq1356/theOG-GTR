"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * A thin NISMO-red line sweep + brief technical-grid flash marking a scene
 * handoff, so consecutive video sections read as one connected journey
 * instead of isolated blocks. Fires once per pass as `anchorId` approaches
 * the viewport; a no-op under prefers-reduced-motion.
 */
export default function SceneTransition({ anchorId }: { anchorId: string }) {
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const anchor = document.getElementById(anchorId);
    const line = lineRef.current;
    const grid = gridRef.current;
    if (!anchor || !line || !grid) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: anchor,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      timeline
        .fromTo(line, { scaleX: 0, opacity: 0.9 }, { scaleX: 1, duration: 0.5, ease: "power2.out" })
        .fromTo(grid, { opacity: 0 }, { opacity: 0.5, duration: 0.2 }, "<")
        .to(line, { opacity: 0, duration: 0.3 }, ">-0.1")
        .to(grid, { opacity: 0, duration: 0.4 }, "<");
    }, anchor);

    return () => ctx.revert();
  }, [anchorId, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-20 h-px w-full overflow-visible"
    >
      <span
        ref={lineRef}
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-nismo-red-bright to-transparent"
      />
      <div ref={gridRef} className="grid-overlay absolute inset-x-0 -inset-y-24" />
    </div>
  );
}
