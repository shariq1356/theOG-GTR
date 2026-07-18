# Implementation Plan

## Stack

Next.js 15 (App Router, TypeScript, `src/` dir), Tailwind CSS v4, GSAP + ScrollTrigger, Lenis, Motion. No Three.js/R3F (no licensed model exists — see 3D-model rule). Static export is not required; the app runs as a standard Next.js production build (`next build` / `next start`).

## Section-by-section narrative

1. **Loader** — minimal full-screen overlay (wordmark + progress line), removed on `window.load`, respects reduced motion (instant hide).
2. **Hero (Scene 1)** — `<video>` (`gtr-scene-01.mp4`) as a pinned, scroll-linked scale/brightness backdrop; poster is a low-legibility wide establishing frame. Copy makes clear this is an independent technical experience, not an official Nissan property.
3. **Legend** — short manifesto-style statement + three key stat chips (600 hp / 481 lb-ft / 54:46 balance).
4. **Aero (Scene 2)** — pinned `<video>` (`gtr-scene-02.mp4`) scrubbed via `currentTime`, captioned "Aerodynamic Form" (deliberately generic per the visual-adaptation rules), with real NISMO aero facts (Cd 0.26, carbon panels, swan-neck wing, diffuser) placed in a separate text panel, never pointing labels at the visible aftermarket parts.
5. **VR38DETT** — accurate engine facts (600 hp @ 6,800 rpm, 481 lb-ft, DOHC 24v, 9.0:1, etc.) in an SVG/CSS technical diagram; `gtr-scene-03.mp4` plays as a small muted side strip captioned "Ambient detail only."
6. **Transmission / ATTESA E-TS** — CSS/SVG drivetrain map (front-mid engine → carbon driveshaft → rear transaxle → front/rear LSD) + six-speed ratio grid.
7. **Chassis & suspension** — Premium-Midship platform facts, interactive R/Normal/Comfort DampTronic mode selector (client component, no video).
8. **Carbon-ceramic brakes** — Brembo front/rear rotor and caliper specs, CSS rotor illustration.
9. **Wheels & tyres** — RAYS/Dunlop sizes, CSS wheel illustration.
10. **Cockpit** — Recaro/Alcantara/tech features + performance-display metric grid.
11. **Dimensions** — length/width/height/wheelbase in a simple SVG silhouette + figure list.
12. **Specifications** — filterable, accessible data table (client component, category buttons).
13. **Final hero** — `<video>` (`gtr-scene-04.mp4`) as a dimmed, non-scrubbed background echo, plus closing statement + CTA back to top. Added in the animation-update pass — see `ANIMATION_UPDATE_PLAN.md`.

## Architecture details

- `src/components/SmoothScroll.tsx` — Lenis-on-`gsap.ticker` wrapper (adapted from the skill asset), mounted once in `layout.tsx`.
- `src/components/VideoStage.tsx` — a client component wrapping a `<video>` with: `IntersectionObserver`-gated `src` assignment (lazy, except the hero which preloads metadata), pause when scrolled offscreen, a visible pause/play control, `muted`/`playsInline`, and an optional `scrub` prop that hooks a `ScrollTrigger` to set `currentTime`.
- `src/hooks/useReducedMotion.ts` — reads `prefers-reduced-motion`, exposed to every animated component so they can skip GSAP/Lenis/scrub entirely and render static content.
- Each pinned section is its own client component with a `gsap.context(..., root)` + `ctx.revert()` cleanup, per the skill's section pattern.
- Non-pinned sections (legend, chassis, brakes, wheels, cockpit, dimensions, specs) reveal with a shared `useReveal` IntersectionObserver hook (fade + rise), not scrub timelines, per `references/brand-page.md`.

## Responsive / performance

- Desktop: full pinned scrub stages, pointer-reactive glow on the hero, GSAP timelines.
- Tablet (`md`): shorter pin height, no pointer glow, reduced grain opacity.
- Mobile (`< md`): no pinning at all (`position: static`, normal document flow), no video scrub, posters swapped for lightweight `<video>` with `preload="none"` that only assigns `src` on intersection, no pointer parallax.
- `prefers-reduced-motion: reduce`: Lenis is never instantiated, no ScrollTrigger scrub is created, all videos are swapped for their poster image, all reveal-on-scroll elements render at full opacity immediately, all data stays visible.
- Only the hero video gets `preload="metadata"`; the aero and workshop videos start with no `src` at all until they cross into the viewport (`rootMargin: "250px"`), and are paused (not just muted) the moment they leave it.

## Accessibility

- Skip-to-content link, one `<h1>` in the hero, sequential `<h2>` per section.
- Every video has an `aria-describedby` paragraph stating plainly that it shows a modified reference vehicle, not the factory NISMO.
- Every video has a visible, keyboard-reachable pause/play control with `aria-pressed`.
- All specification data lives in real text/HTML (data table, dl/dt/dd, SVG `role="img"` + `aria-label`) — nothing is conveyed only via canvas, video, or animation.
- Visible `:focus-visible` rings on every interactive control.
- Body copy kept at ≥ 16px with high contrast against the near-black ground.

## Validation

- `npm run lint` (ESLint via Next's flat config)
- `npx tsc --noEmit` (strict type check)
- A lightweight content/asset test (`node` script) asserting required copy strings and media files exist
- `npm run build` (production build) — must succeed before completion is reported
