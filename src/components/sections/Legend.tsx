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
        01 — THE BUILD
      </p>
      <div ref={ref} className="reveal mx-auto max-w-3xl">
        <p className="eyebrow">LIBERTY WALK / SINCE 2005</p>
        <h2 className="mt-3 text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[0.9] text-ink">
          Widened on<br />purpose.
        </h2>
        <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/75">
          Liberty Walk (LB★Performance / LB Works) has built its name on
          aggressive, riveted widebody kits that reshape a car&rsquo;s stance
          rather than its badge. This page walks through one such build: a
          Nissan GT-R on the R35 platform, wrapped in a complete LB widebody
          kit and set on forged wheels. Platform facts and this build&rsquo;s
          own modifications are kept clearly separate at every step.
        </p>
      </div>
    </section>
  );
}
