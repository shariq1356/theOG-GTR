"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#aero", label: "Aero" },
  { href: "#engine", label: "Engine" },
  { href: "#chassis", label: "Chassis" },
  { href: "#specs", label: "Specs" },
];

/** Fades in once the hero has scrolled out of view, per the brand-page nav pattern. */
export default function SiteHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.querySelector("#hero");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-4 transition-opacity duration-500 sm:px-8 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ background: "linear-gradient(rgba(5,5,6,0.82), transparent)" }}
    >
      <a href="#top" className="font-display text-sm font-semibold tracking-widest text-ink">
        GT-R <span className="text-nismo-red">NISMO</span>
      </a>
      <nav aria-label="Primary" className="hidden gap-6 sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mono-label text-ink/80! hover:text-nismo-red-bright!"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#specs"
        className="mono-label border border-white/25 px-3 py-2 text-ink! hover:border-nismo-red"
      >
        Explore data
      </a>
    </header>
  );
}
