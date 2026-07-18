"use client";

import { useReveal } from "@/hooks/useReveal";
import VideoStage from "@/components/VideoStage";
import { engineFacts } from "@/lib/specs";

export default function Engine() {
  const copyRef = useReveal<HTMLDivElement>();
  const diagramRef = useReveal<HTMLDivElement>();
  const stripRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="engine"
      aria-labelledby="engine-title"
      className="relative bg-surface px-6 py-28 sm:px-12 lg:px-24"
    >
      <p className="mono-label absolute left-6 top-10 text-nismo-red sm:left-12">
        03 — VR38DETT
      </p>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.95fr_1.1fr]">
        <div ref={copyRef} className="reveal">
          <p className="eyebrow">HAND-ASSEMBLED / TAKUMI</p>
          <h2 id="engine-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
            Twin turbos.<br /><span className="text-nismo-red">One obsession.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/80">
            The {engineFacts.designation} is a {engineFacts.type.toLowerCase()},{" "}
            {engineFacts.displacement} twin-turbocharged engine. Its{" "}
            {engineFacts.block.toLowerCase()} package race-derived turbo
            technology inside a road car built for four, and every unit is{" "}
            {engineFacts.assembly.toLowerCase()}.
          </p>
          <dl className="mt-8 flex flex-wrap gap-6">
            {[
              { dt: engineFacts.redline.split(" ")[0], dd: "Maximum engine speed" },
              { dt: engineFacts.compression, dd: "Compression ratio" },
              { dt: "DOHC / 24", dd: "Valves" },
            ].map((item) => (
              <div key={item.dd} className="border-t border-white/15 pt-3">
                <dt className="font-display text-xl font-semibold text-ink">{item.dt}</dt>
                <dd className="mono-label mt-1">{item.dd}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          ref={diagramRef}
          role="img"
          aria-label="Technical diagram of the VR38DETT twin-turbocharged 3.8-litre V6, showing left and right turbo banks feeding a central engine core."
          className="reveal flex min-h-[22rem] flex-col items-center justify-center gap-8 border border-white/10 bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.14),transparent_55%)] p-8"
        >
          <div className="flex w-full items-center justify-center gap-4 sm:gap-8">
            <div className="turbo-tag">
              TURBO
              <b>LEFT BANK</b>
            </div>
            <span className="connector-line" aria-hidden="true">
              <i />
            </span>
            <div className="gauge-ring" aria-hidden="true">
              <div className="gauge-core">
                <span className="font-display text-2xl font-bold tracking-tight text-ink">VR38</span>
                <span className="font-display text-sm font-semibold tracking-[0.3em] text-nismo-red">
                  DETT
                </span>
                <span className="mono-label">3.8L V6</span>
              </div>
            </div>
            <span className="connector-line" aria-hidden="true">
              <i style={{ animationDelay: "1.1s" }} />
            </span>
            <div className="turbo-tag">
              TURBO
              <b>RIGHT BANK</b>
            </div>
          </div>
          <p className="mono-label max-w-md text-center">
            {engineFacts.fuel_system} · {engineFacts.valve_timing}
          </p>
        </div>
      </div>

      <div
        ref={stripRef}
        className="reveal mx-auto mt-20 grid max-w-6xl grid-cols-1 overflow-hidden border border-white/10 bg-[#08090b] sm:grid-cols-[1.1fr_0.9fr]"
      >
        <VideoStage
          src="/videos/gtr-workshop-detail.mp4"
          poster="/posters/workshop.jpg"
          description="Workshop-floor footage of a modified GT-R's wheel, fender and rear-quarter, used only for pace and atmosphere. It is not footage of an engine bay and carries no VR38DETT specification information."
          className="relative min-h-[14rem]"
          videoClassName="h-full w-full object-cover brightness-[0.55] saturate-[0.5]"
        />
        <div className="flex flex-col justify-center gap-2 p-8">
          <p className="eyebrow">WORKSHOP STUDY</p>
          <strong className="font-display text-xl font-semibold text-ink">
            Footage used for pace and atmosphere only.
          </strong>
          <span className="text-sm text-ink/70">
            No engine bay appears in this clip. Every VR38DETT figure on this
            page comes from the diagram above, independent of this footage.
          </span>
        </div>
      </div>
    </section>
  );
}
