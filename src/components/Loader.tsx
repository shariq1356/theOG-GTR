"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) {
      setHidden(true);
      return;
    }
    if (document.readyState === "complete") {
      const timer = window.setTimeout(() => setHidden(true), 350);
      return () => window.clearTimeout(timer);
    }
    const onLoad = () => window.setTimeout(() => setHidden(true), 350);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[999] grid place-content-center gap-4 bg-[#040405] text-center transition-opacity duration-700 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-display text-2xl font-semibold tracking-[0.3em] text-ink">
        GT-R NISMO
      </span>
      <span className="mono-label">TECHNICAL DOSSIER LOADING</span>
      <span className="mx-auto h-px w-40 origin-left animate-pulse bg-gradient-to-r from-nismo-red to-transparent" />
    </div>
  );
}
