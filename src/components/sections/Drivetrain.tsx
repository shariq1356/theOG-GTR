"use client";

import { useReveal } from "@/hooks/useReveal";
import { platformFacts, gearRatios } from "@/lib/specs";

export default function Drivetrain() {
  const headRef = useReveal<HTMLDivElement>();
  const mapRef = useReveal<HTMLDivElement>();
  const ratioRef = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="drive-title"
      className="relative bg-[#08090b] px-6 py-28 sm:px-12 lg:px-24"
    >
      <p className="mono-label absolute left-6 top-10 text-nismo-red sm:left-12">
        04 — POWER TRANSFER
      </p>

      <div ref={headRef} className="reveal mx-auto max-w-2xl">
        <p className="eyebrow">ATTESA E-TS / ALL-WHEEL DRIVE</p>
        <h2 id="drive-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
          Grip is a<br /><span className="text-nismo-red">conversation.</span>
        </h2>
        <p className="mt-5 font-body text-base leading-relaxed text-ink/80">
          A driveshaft connects the front-mid-mounted VR38DETT to a{" "}
          {platformFacts.transmission.toLowerCase()}. ATTESA E-TS directs
          torque to whichever axle the surface asks for — a platform-level
          system, unchanged by this build&rsquo;s widebody kit.
        </p>
      </div>

      <div
        ref={mapRef}
        role="img"
        aria-label="Drivetrain flow diagram: front-mid VR38DETT engine, through a driveshaft, to a six-speed dual-clutch rear transaxle, splitting to front and rear limited-slip differentials."
        className="reveal mx-auto mt-16 grid max-w-4xl grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]"
      >
        <div className="flow-node">
          FRONT-MID
          <b>VR38DETT</b>
        </div>
        <div className="flex flex-col items-center gap-1 px-2">
          <span className="connector-line w-full sm:w-24" aria-hidden="true">
            <i />
          </span>
          <span className="mono-label whitespace-nowrap">DRIVESHAFT</span>
        </div>
        <div className="flow-node">
          REAR TRANSAXLE
          <b>6-SPEED DCT</b>
        </div>

        <div className="col-span-full mt-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-[1fr_auto_1fr]">
          <p className="mono-label border-t border-white/15 pt-3">FRONT LSD</p>
          <span className="hidden h-px w-full self-center bg-white/15 sm:block" aria-hidden="true" />
          <p className="mono-label border-t border-white/15 pt-3">REAR LSD</p>
        </div>
      </div>

      <div
        ref={ratioRef}
        className="reveal mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-px bg-white/10 sm:grid-cols-6"
      >
        {gearRatios.map((row) => (
          <p key={row.gear} className="bg-panel p-4 text-center">
            <span className="mono-label">{row.gear.toUpperCase()}</span>
            <b className="mt-1 block font-display text-lg text-ink">{row.ratio}</b>
          </p>
        ))}
      </div>
    </section>
  );
}
