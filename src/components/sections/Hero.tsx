"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoStage from "@/components/VideoStage";
import { heroStats } from "@/lib/specs";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    if (!section || !video || !content) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: ({ progress }) => {
          gsap.set(content, {
            yPercent: -progress * 18,
            opacity: 1 - progress * 0.9,
          });
          gsap.set(video, {
            scale: 1 + progress * 0.06,
            filter: `brightness(${0.92 - progress * 0.38}) saturate(${
              1 - progress * 0.3
            })`,
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`relative bg-[#020203] ${reducedMotion ? "h-auto" : "h-[230vh]"}`}
    >
      <div
        id="top"
        className={`flex flex-col justify-center overflow-hidden ${
          reducedMotion ? "relative h-[72vh]" : "sticky top-0 h-screen"
        }`}
      >
        <VideoStage
          ref={videoRef}
          src="/videos/gtr-scene-01.mp4"
          poster="/posters/hero.jpg"
          description="Cinematic on-location footage of the featured neon-green GT-R fitted with a Liberty Walk widebody kit."
          eager
          className="absolute inset-0"
          videoClassName="h-full w-full object-cover"
        />
        <div className="edge-vignette" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        <div className="film-grain" aria-hidden="true" />

        <div
          ref={contentRef}
          className="relative z-10 flex flex-col gap-6 px-6 py-24 sm:px-12 lg:px-24"
        >
          <p className="eyebrow">R35 PLATFORM / LB★PERFORMANCE</p>
          <h1 className="max-w-3xl text-[clamp(2.6rem,8vw,7.5rem)] font-bold leading-[0.86] text-ink">
            WIDE. LOUD.<br />
            <span className="text-nismo-red">UNAPOLOGETIC.</span>
          </h1>
          <p className="max-w-md font-body text-base leading-relaxed text-ink/85">
            An independent showcase of a Nissan GT-R carrying a full Liberty
            Walk widebody kit — built, not born this way.
          </p>
          <a
            href="#legend"
            className="mono-label inline-flex w-fit items-center gap-3 border border-white/25 px-4 py-3 text-ink! hover:border-nismo-red"
          >
            Begin the build tour <span className="text-nismo-red">↓</span>
          </a>

          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-[#050506] p-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-nismo-red sm:text-4xl">
                  {stat.value}
                </dd>
                <p className="mono-label mt-1">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <p
          className="mono-label absolute bottom-6 left-6 sm:left-12"
          aria-hidden="true"
        >
          Scroll to engage
        </p>
      </div>
    </section>
  );
}
