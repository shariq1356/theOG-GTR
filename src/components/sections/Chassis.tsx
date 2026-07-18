"use client";

import { useReveal } from "@/hooks/useReveal";
import { platformFacts, buildFacts, suspensionNote } from "@/lib/specs";

export default function Chassis() {
  const copyRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();
  const specRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="chassis"
      aria-labelledby="chassis-title"
      className="relative bg-gradient-to-br from-[#0e1015] to-[#050506] px-6 py-28 sm:px-12 lg:px-24"
    >
      <p className="mono-label absolute left-6 top-10 text-nismo-red sm:left-12">
        05 — STANCE
      </p>

      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div ref={copyRef} className="reveal">
          <p className="eyebrow">{platformFacts.chassis.toUpperCase()}</p>
          <h2 id="chassis-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
            Read the road.<br /><span className="text-nismo-red">Then sit lower on it.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/80">
            The factory chassis pairs {platformFacts.frontSuspension.toLowerCase()}{" "}
            up front with {platformFacts.rearSuspension.toLowerCase()} at the
            rear. {buildFacts.stance}.
          </p>
        </div>

        <div ref={cardRef} className="reveal border border-white/10 bg-panel/60 p-6">
          <p className="mono-label">RIDE HEIGHT</p>
          <p className="mt-6 font-display text-lg font-semibold text-ink">
            Stanced for the widebody look
          </p>
          <p className="mt-2 text-sm text-ink/70">{suspensionNote}</p>
        </div>
      </div>

      <div
        ref={specRef}
        className="reveal mx-auto mt-16 grid max-w-5xl grid-cols-1 divide-y divide-white/10 border-t border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {[
          { label: "FRONT", value: "Double wishbone", note: "Factory-layout independent front suspension" },
          { label: "REAR", value: "Multi-link", note: "Factory-layout independent rear suspension" },
          { label: "STANCE", value: "Lowered", note: "Coilover/air setup typical of widebody builds" },
        ].map((item) => (
          <article key={item.label} className="p-6">
            <span className="mono-label text-nismo-red">{item.label}</span>
            <b className="mt-2 block font-display text-2xl font-semibold text-ink">{item.value}</b>
            <p className="mt-1 text-sm text-ink/70">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
