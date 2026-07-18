"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoStage from "@/components/VideoStage";
import { buildFacts } from "@/lib/specs";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useReveal } from "@/hooks/useReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Aero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const factsRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    const video = videoRef.current;
    const copy = copyRef.current;
    if (!section || !video || !copy) return;

    let lastTime = -1;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
        onUpdate: ({ progress }) => {
          if (!video.duration || Number.isNaN(video.duration)) return;
          const nextTime = Math.min(
            video.duration - 0.08,
            Math.max(0.05, progress * video.duration)
          );
          if (Math.abs(nextTime - lastTime) > 0.03) {
            video.currentTime = nextTime;
            lastTime = nextTime;
          }
          gsap.set(copy, {
            yPercent: -progress * 8,
            opacity: Math.min(1, (1 - progress) * 1.7),
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="aero"
      aria-labelledby="aero-title"
      className={`relative bg-[#040405] ${reducedMotion ? "h-auto" : "h-[190vh]"}`}
    >
      <div
        className={`overflow-hidden ${
          reducedMotion ? "relative h-[70vh]" : "sticky top-0 h-screen"
        }`}
      >
        <VideoStage
          ref={videoRef}
          src="/videos/gtr-scene-02.mp4"
          poster="/posters/exterior.jpg"
          description="Macro footage of the featured GT-R's hood vents, headlight, wheel and brake detail."
          className="absolute inset-0"
          videoClassName="h-full w-full object-cover"
        />
        <div className="edge-vignette" aria-hidden="true" />

        <div
          ref={copyRef}
          className="relative z-10 flex h-full max-w-xl flex-col justify-center px-6 sm:px-12 lg:px-24"
        >
          <p className="eyebrow">02 — LB WIDEBODY</p>
          <h2 id="aero-title" className="mt-3 text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[0.9] text-ink">
            Form, given<br /><span className="text-nismo-red">an attitude.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/80">
            {buildFacts.bodyKit} reshapes the R35&rsquo;s factory panels
            entirely — wider, lower, and built to be seen.
          </p>
          <div className="mt-8 flex items-end gap-3">
            <span className="font-display text-3xl font-semibold text-nismo-red sm:text-4xl">
              LB★PERFORMANCE
            </span>
          </div>
        </div>

        <div
          ref={factsRef}
          className="reveal absolute bottom-8 right-6 z-10 w-[min(24rem,42vw)] border-t border-white/15 sm:right-12"
        >
          {buildFacts.bodyKitFeatures.slice(0, 3).map((feature, index) => (
            <p key={feature} className="border-b border-white/10 py-3 text-sm text-ink/85">
              <b className="mono-label mr-3 text-nismo-red!">
                {String(index + 1).padStart(2, "0")}
              </b>
              {feature}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
