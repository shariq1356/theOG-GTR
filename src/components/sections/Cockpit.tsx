"use client";

import { useReveal } from "@/hooks/useReveal";
import { cockpitFacts, performanceDisplayMetrics } from "@/lib/specs";

export default function Cockpit() {
  const headRef = useReveal<HTMLDivElement>();
  const telemetryRef = useReveal<HTMLDivElement>();
  const featureRef = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="cockpit-title"
      className="relative bg-[#08090b] px-6 py-28 sm:px-12 lg:px-24"
    >
      <p className="mono-label absolute left-6 top-10 text-nismo-red sm:left-12">
        08 — COCKPIT
      </p>

      <div ref={headRef} className="reveal mx-auto max-w-2xl">
        <p className="eyebrow">DRIVER-FOCUSED / FOUR SEATS</p>
        <h2 id="cockpit-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
          All the data.<br /><span className="text-nismo-red">None of the noise.</span>
        </h2>
        <p className="mt-5 font-body text-base leading-relaxed text-ink/80">
          {cockpitFacts.seats}. {cockpitFacts.wheel}, wrapped around a
          performance display that turns every input into an intelligible
          signal.
        </p>
      </div>

      <div
        ref={telemetryRef}
        aria-label="Performance display metrics"
        className="reveal mx-auto mt-14 grid max-w-5xl grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-6"
      >
        {performanceDisplayMetrics.slice(0, 6).map((metric, index) => (
          <span key={metric} className="bg-panel p-4 text-center">
            <span className="mono-label block">
              {String(index + 1).padStart(2, "0")}
            </span>
            <b className="mt-1 block font-display text-sm uppercase text-ink">
              {metric}
            </b>
          </span>
        ))}
      </div>

      <div
        ref={featureRef}
        className="reveal mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-1 sm:grid-cols-3"
      >
        <p className="bg-panel/70 p-5 text-sm text-ink/80">
          <b className="block font-display text-xl text-nismo-red">8.0 IN</b>
          NissanConnect multi-touch display
        </p>
        <p className="bg-panel/70 p-5 text-sm text-ink/80">
          <b className="block font-display text-xl text-nismo-red">11</b>
          Bose speakers + two rear subwoofers
        </p>
        <p className="bg-panel/70 p-5 text-sm text-ink/80">
          <b className="block font-display text-xl text-nismo-red">DUAL-ZONE</b>
          Automatic climate control
        </p>
      </div>
    </section>
  );
}
