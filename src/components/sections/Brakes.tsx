"use client";

import { useReveal } from "@/hooks/useReveal";
import { brakeFacts } from "@/lib/specs";

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
          aria-label="Illustration of a ventilated, drilled carbon-ceramic brake rotor with a red caliper accent."
        />
        <div ref={ref} className="reveal">
          <p className="mono-label text-nismo-red">06 — BRAKING SYSTEM</p>
          <h2 id="brakes-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
            Braking,<br />without <span className="text-nismo-red">permission.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/80">
            {brakeFacts.system} give the NISMO a wider thermal window, paired
            with cooling guides and four-channel ABS.
          </p>
          <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
            <p className="flex items-center justify-between gap-4 py-4">
              <b className="font-display text-lg text-ink">{brakeFacts.front.rotor}</b>
              <span className="mono-label text-right">FRONT / {brakeFacts.front.caliper}</span>
            </p>
            <p className="flex items-center justify-between gap-4 py-4">
              <b className="font-display text-lg text-ink">{brakeFacts.rear.rotor}</b>
              <span className="mono-label text-right">REAR / {brakeFacts.rear.caliper}</span>
            </p>
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink/60">
            {brakeFacts.extra.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
