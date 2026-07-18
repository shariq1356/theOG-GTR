"use client";

import { useReveal } from "@/hooks/useReveal";
import { dimensions } from "@/lib/specs";

const rows = [
  { label: "OVERALL LENGTH", ...dimensions.length },
  { label: "OVERALL WIDTH", ...dimensions.width },
  { label: "OVERALL HEIGHT", ...dimensions.height },
  { label: "WHEELBASE", ...dimensions.wheelbase },
];

export default function Dimensions() {
  const copyRef = useReveal<HTMLDivElement>();
  const drawingRef = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="dimensions-title"
      className="relative bg-[#0b0d10] px-6 py-28 sm:px-12 lg:px-24"
    >
      <p className="mono-label absolute left-6 top-10 text-nismo-red sm:left-12">
        09 — ENGINEERING ENVELOPE
      </p>

      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div ref={copyRef} className="reveal">
          <p className="eyebrow">DIMENSIONS / CAPACITY</p>
          <h2 id="dimensions-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
            Proportioned<br />for <span className="text-nismo-red">purpose.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/80">
            Compact at the roofline, wide at the contact patch, and built
            around a {dimensions.wheelbase.imperial} wheelbase for {dimensions.passengers.toLowerCase()}.
          </p>
        </div>

        <div ref={drawingRef} className="reveal border border-white/10 bg-bg p-8">
          <svg
            viewBox="0 0 320 120"
            role="img"
            aria-label="Simplified side-profile diagram of the GT-R NISMO showing its length, width, height and wheelbase proportions."
            className="mx-auto w-full max-w-md text-ink/70"
          >
            <path
              d="M20 90 C 20 70, 45 68, 65 55 C 90 40, 130 32, 175 32 C 210 32, 240 42, 262 58 C 278 66, 296 70, 300 90 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line x1="20" y1="90" x2="300" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <circle cx="75" cy="92" r="14" fill="none" stroke="var(--nismo-red)" strokeWidth="3" />
            <circle cx="248" cy="92" r="14" fill="none" stroke="var(--nismo-red)" strokeWidth="3" />
          </svg>
          <div className="mt-6 divide-y divide-white/10 text-sm">
            {rows.map((row) => (
              <p key={row.label} className="flex items-center justify-between gap-4 py-2.5">
                <span className="mono-label">{row.label}</span>
                <span className="font-display text-ink">
                  {row.imperial} <span className="text-ink/50">({row.metric})</span>
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
