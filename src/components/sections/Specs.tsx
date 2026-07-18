"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { specRows, type SpecCategory } from "@/lib/specs";

const filters: { label: string; value: SpecCategory | "all" }[] = [
  { label: "All systems", value: "all" },
  { label: "Platform", value: "platform" },
  { label: "This build", value: "build" },
];

export default function Specs() {
  const [filter, setFilter] = useState<SpecCategory | "all">("all");
  const headRef = useReveal<HTMLDivElement>();
  const tableRef = useReveal<HTMLDivElement>();

  const rows = specRows.filter((row) => filter === "all" || row.category === filter);

  return (
    <section
      id="specs"
      aria-labelledby="specs-title"
      className="relative bg-bg px-6 py-28 sm:px-12 lg:px-24"
    >
      <p className="mono-label absolute left-6 top-10 text-nismo-red sm:left-12">
        10 — COMPLETE DATA
      </p>

      <div ref={headRef} className="reveal mx-auto max-w-3xl">
        <p className="eyebrow">GT-R · LIBERTY WALK BUILD</p>
        <h2 id="specs-title" className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.9] text-ink">
          The numbers,<br /><span className="text-nismo-red">unfiltered.</span>
        </h2>
      </div>

      <div
        role="group"
        aria-label="Filter specifications by system"
        className="mx-auto mt-10 flex max-w-4xl flex-wrap gap-2"
      >
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            aria-pressed={filter === item.value}
            className={`mono-label border px-3 py-2 transition-colors ${
              filter === item.value
                ? "border-nismo-red bg-nismo-red text-white!"
                : "border-white/15 text-ink/60! hover:border-white/40"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        ref={tableRef}
        role="region"
        aria-label="GT-R platform and build specifications"
        tabIndex={0}
        className="reveal mx-auto mt-6 max-w-4xl divide-y divide-white/10 border border-white/10"
      >
        <div className="grid grid-cols-[0.32fr_0.68fr] gap-4 bg-panel px-5 py-3 text-xs uppercase tracking-wider text-ink/50">
          <span>System</span>
          <span>Specification</span>
        </div>
        {rows.map((row) => (
          <div key={row.system} className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[0.32fr_0.68fr] sm:gap-4">
            <span className="mono-label uppercase text-muted!">{row.system}</span>
            <span className="text-sm text-ink/90">{row.spec}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
