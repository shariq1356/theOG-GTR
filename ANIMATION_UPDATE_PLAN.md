# Animation Update Plan

## Existing problems identified before changing anything

- The three original clips were 720p/~2 Mb/s dark-studio footage; the hero and aero timelines were tuned around their specific brightness curves and cut points, which no longer match the new, brighter, cut-based footage.
- `FinalHero` had no video at all — just a CSS radial glow — making the closing scene feel disconnected from the rest of the cinematic page (each video section reads as an isolated block rather than part of one journey).
- There was no shared transition treatment between sections; cuts between the hero, aero and engine sections were plain scroll continuation with no deliberate visual handoff (no light/line sweep, no grid flash).
- Hero and aero both used the same "scale + brightness" scroll-linked treatment; with the new footage's wide static holds, a straight `currentTime` scrub reads better for aero while hero benefits more from timed scale/brightness against its cut point.

## Old video references removed

- `public/videos/gtr-hero-reveal.mp4`, `gtr-exterior-detail.mp4`, `gtr-workshop-detail.mp4` deleted.
- `public/posters/hero.jpg`, `exterior.jpg`, `workshop.jpg` deleted and regenerated from the new footage (workshop poster renamed `engine.jpg` to match the section's actual role).
- All component `src`/`poster` props, `sr-only` descriptions, and `VIDEO_MAPPING.md`/`VIDEO_ANALYSIS.md` content referencing the old files were replaced — verified with a repo-wide grep for the old filenames after the change (see Validation).

## New scene mapping

| Section | New file | Source | Strategy |
|---|---|---|---|
| Hero | `gtr-scene-01.mp4` | `2.mp4` | Hybrid: autoplay + scroll-linked scale/brightness |
| Exterior / Aero | `gtr-scene-02.mp4` | `3.mp4` | Scroll-scrub (`currentTime`) |
| Engine atmosphere strip | `gtr-scene-03.mp4` | `1.mp4` | Normal autoplay-in-view, starts at 1.2 s |
| Final hero (new) | `gtr-scene-04.mp4` | `4.mp4` | Normal autoplay-in-view, no scrub |

## GSAP / ScrollTrigger changes

- `Hero.tsx`: kept the existing scale/brightness/opacity `ScrollTrigger` (unchanged mechanism), retuned constants for the brighter daylight footage (lower peak brightness delta since the source is already well-lit, avoids blow-out) and extended the pin height slightly to give the new 12 s clip room to reach its wide-hold beat before the copy fully fades.
- `Aero.tsx`: kept the existing `currentTime`-scrub ScrollTrigger; no structural change, since video 3's continuous macro dolly is still scrub-friendly.
- `Engine.tsx`: workshop strip is unchanged structurally (still a small non-pinned autoplay strip); video only swapped, and playback now starts at `1.2s` (skipping the stop-sign beat) via an `onLoadedData` seek.
- `FinalHero.tsx`: new — added a background `VideoStage` (normal autoplay-in-view via the existing `IntersectionObserver` gating, no scroll pin, no scrub) sitting behind the existing radial-glow overlay and closing copy.
- New shared `SceneTransition` component: a thin NISMO-red line sweep + brief technical-grid flash, mounted at the boundary of Hero→Legend, Aero→Engine, and before FinalHero, each triggered by its own `ScrollTrigger` (`start: "top 80%"`, `toggleActions: "play none none reverse"`) so the sweep fires once per pass through that boundary. This is the specific fix for "each video feels like an isolated block" — the same red-line/grid motif now marks every major scene handoff.

## Preload / performance strategy (unchanged principles, reconfirmed)

- Only the hero video (`gtr-scene-01.mp4`) gets `preload="metadata"`; all others start with no `src` at all until `IntersectionObserver` fires (`rootMargin: "250px"`), and are paused (not just muted) the instant they leave the viewport — same `VideoStage` component as before, now also used by `FinalHero`.
- No two full-resolution videos ever play at once in normal scrolling, since each is gated by its own observer and the sections are far enough apart that only one is in the `rootMargin` window at a time.

## Poster-frame changes

New posters generated from the new footage (see `VIDEO_ANALYSIS.md` for exact timestamps and the reasoning behind each choice — this footage is a bright outdoor shoot where most frames carry legible aftermarket decals, unlike the previous dark-studio clips, so frame choice leaned on wide shots and a cropped macro to keep branding illegible rather than prominent).

## Mobile changes

- Recalibrated `object-position` per new video framing (documented per-video in `VIDEO_MAPPING.md`) since the car's position in frame shifted with the new footage.
- No pinned sections on mobile (unchanged policy); `FinalHero`'s new video follows the same mobile rule — normal document flow, no pin, poster until in view.

## Reduced-motion changes

- No behavioral change needed: `VideoStage`'s reduced-motion branch (swap to a static `<Image>` of the poster, no video element at all) already covers the new `FinalHero` video automatically since it reuses the same component.
- `SceneTransition` is a no-op under reduced motion (its GSAP timeline is skipped, matching the existing `useReducedMotion` gate pattern used elsewhere).

## Performance improvements

- New source clips are ~10.3 Mb/s vs. the old ~2 Mb/s — noticeably larger (12-17 MB each vs. 2.5-2.8 MB). Kept as-is per the instruction to preserve sharp body lines/reflections/carbon texture rather than aggressively recompress; mitigated by the existing lazy-load/pause-offscreen discipline so total simultaneous decode load doesn't increase (still at most one video decoding at a time during normal scroll).
