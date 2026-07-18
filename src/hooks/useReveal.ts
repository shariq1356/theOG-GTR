"use client";

import { useEffect, useRef } from "react";

/** Adds `.in-view` to the ref'd element the first time it crosses the viewport. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
