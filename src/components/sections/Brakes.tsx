"use client";

import { useReveal } from "@/hooks/useReveal";
import { buildFacts } from "@/lib/specs";

export default function Brakes() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="brakes-title"
      className="relative overflow-hidden bg-[#09090b] px-6 py-28 sm:px-12 lg:px-24"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div
          className="rotor-disc mx-auto"
          role="img"
          aria-label="Illustration of a ventilated brake rotor with a red caliper accent."
        />
        <div ref={ref} className="reveal">
          <p className="mono-label text-nismo-red">06 — BRAKING</p>
          <h2 id="brakes-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
            Braking,<br />built to <span className="text-nismo-red">match the stance.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/80">
            {buildFacts.brakes}, visible through the Rohana wheels&rsquo; open
            spokes. Rotor size and pad compound for this build aren&rsquo;t
            published, so no numbers are claimed here.
          </p>
        </div>
      </div>
    </section>
  );
}
