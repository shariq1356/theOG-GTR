"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { chassisFacts, suspensionModes } from "@/lib/specs";

type Mode = keyof typeof suspensionModes;
const modes: Mode[] = ["R", "NORMAL", "COMFORT"];

export default function Chassis() {
  const [mode, setMode] = useState<Mode>("R");
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
        05 — CONTROL SURFACE
      </p>

      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div ref={copyRef} className="reveal">
          <p className="eyebrow">{chassisFacts.platform.toUpperCase()}</p>
          <h2 id="chassis-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
            Read the road.<br /><span className="text-nismo-red">Then rewrite it.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/80">
            {chassisFacts.construction}. {chassisFacts.front_suspension} leads;{" "}
            {chassisFacts.rear_suspension.toLowerCase()} geometry follows.
          </p>
        </div>

        <div ref={cardRef} className="reveal border border-white/10 bg-panel/60 p-6">
          <p className="mono-label">DAMPTRONIC RESPONSE</p>
          <div role="tablist" aria-label="NISMO suspension modes" className="mt-5 flex gap-2">
            {modes.map((option) => (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={mode === option}
                onClick={() => setMode(option)}
                className={`mono-label border px-3 py-2 transition-colors ${
                  mode === option
                    ? "border-nismo-red text-nismo-red-bright!"
                    : "border-white/15 text-ink/60! hover:border-white/40"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-6 font-display text-lg font-semibold text-ink" aria-live="polite">
            {suspensionModes[mode]}
          </p>
          <p className="mt-2 text-sm text-ink/70">
            Three driver-adjustable NISMO-tuned Bilstein DampTronic
            mono-tube damper settings.
          </p>
        </div>
      </div>

      <div
        ref={specRef}
        className="reveal mx-auto mt-16 grid max-w-5xl grid-cols-1 divide-y divide-white/10 border-t border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {[
          { label: "FRONT", value: chassisFacts.front_bar.split(" ")[0] + " mm", note: "Hollow bar / linear-rate springs" },
          { label: "REAR", value: chassisFacts.rear_bar.split(" ")[0] + " mm", note: "Hollow bar / progressive-rate springs" },
          { label: "STEERING", value: chassisFacts.steering_ratio, note: "Speed-sensitive rack-and-pinion ratio" },
        ].map((item) => (
          <article key={item.label} className="p-6">
            <span className="mono-label text-nismo-red">{item.label}</span>
            <b className="mt-2 block font-display text-3xl font-semibold text-ink">{item.value}</b>
            <p className="mt-1 text-sm text-ink/70">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
