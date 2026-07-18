"use client";

import { useReveal } from "@/hooks/useReveal";
import { buildFacts } from "@/lib/specs";

export default function Wheels() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="wheels-title"
      className="relative bg-surface px-6 py-28 sm:px-12 lg:px-24"
    >
      <p className="mono-label absolute left-6 top-10 text-nismo-red sm:left-12">
        07 — CONTACT PATCH
      </p>
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div
          className="wheel-graphic"
          role="img"
          aria-label="Illustration of a multi-spoke forged wheel with a red centre cap."
        />
        <div ref={ref} className="reveal">
          <p className="eyebrow">ROHANA / TOYO</p>
          <h2 id="wheels-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
            Every input,<br /><span className="text-nismo-red">translated.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/80">
            {buildFacts.wheels}, wrapped in {buildFacts.tyres.toLowerCase()},
            filling out the LB widebody&rsquo;s flared arches. Exact sizes
            and offsets for this build aren&rsquo;t published.
          </p>
        </div>
      </div>
    </section>
  );
}
