"use client";

import { useReveal } from "@/hooks/useReveal";
import VideoStage from "@/components/VideoStage";

export default function FinalHero() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="final"
      aria-labelledby="final-title"
      className="relative grid min-h-[75vh] place-items-center overflow-hidden bg-gradient-to-br from-[#08090b] to-[#181d22] px-6 py-24 text-center"
    >
      <VideoStage
        src="/videos/gtr-scene-04.mp4"
        poster="/posters/final.jpg"
        description="Closing cinematic footage of a modified GT-R's wheel and three-quarter profile, used only as an atmospheric closing reference. It does not depict the factory 2024 GT-R R35 NISMO."
        className="absolute inset-0"
        videoClassName="h-full w-full object-cover opacity-55"
      />
      <div className="edge-vignette" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1/5 animate-pulse"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,16,46,0.32), transparent 45%)",
        }}
      />
      <div ref={ref} className="reveal relative z-10 max-w-2xl">
        <p className="eyebrow">GT-R NISMO / 2024</p>
        <h2 id="final-title" className="mt-3 text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[0.9] text-ink">
          The legend<br /><span className="text-nismo-red">is technical.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed text-ink/75">
          Not a museum piece — a system in perpetual conversation with the
          road.
        </p>
        <a
          href="#top"
          className="mono-label mt-8 inline-flex items-center gap-3 border border-white/25 px-4 py-3 text-ink! hover:border-nismo-red"
        >
          Return to launch <span className="text-nismo-red">↑</span>
        </a>
      </div>
    </section>
  );
}
