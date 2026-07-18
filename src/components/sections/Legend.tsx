"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Legend() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="legend"
      aria-labelledby="legend-title"
      className="relative bg-gradient-to-b from-[#0a0b0d] to-[#050506] px-6 py-28 sm:px-12 lg:px-24"
    >
      <p className="mono-label absolute left-6 top-10 text-nismo-red sm:left-12">
        01 — THE LEGEND
      </p>
      <div ref={ref} className="reveal mx-auto max-w-3xl">
        <p className="eyebrow">PRECISION / WITHOUT APOLOGY</p>
        <h2 className="mt-3 text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[0.9] text-ink">
          Distilled for<br />the committed.
        </h2>
        <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/75">
          The GT-R NISMO is a front-mid-engine, all-wheel-drive performance
          system refined around airflow, response and repeatable control.
          Every figure that follows stays visible outside the spectacle —
          this dossier separates cinematic reference footage from factory
          fact at every step.
        </p>
      </div>
    </section>
  );
}
