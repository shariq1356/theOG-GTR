# Video Mapping

## Source files

### Hero reveal
Source: `C:\Users\ShariqHaroon\Downloads\Midnight_purple_GT-R_studio_reveal_202607181444.mp4`
(WSL: `/mnt/c/Users/ShariqHaroon/Downloads/Midnight_purple_GT-R_studio_reveal_202607181444.mp4`)

Project destination: `public/videos/gtr-hero-reveal.mp4`

### Exterior detail
Source: `C:\Users\ShariqHaroon\Downloads\Nissan_GT-R_Liberty_Walk_detail_202607181448.mp4`
(WSL: `/mnt/c/Users/ShariqHaroon/Downloads/Nissan_GT-R_Liberty_Walk_detail_202607181448.mp4`)

Project destination: `public/videos/gtr-exterior-detail.mp4`

### Workshop detail
Source: `C:\Users\ShariqHaroon\Downloads\Nissan_GT-R_workshop_detailing_202607181448.mp4`
(WSL: `/mnt/c/Users/ShariqHaroon/Downloads/Nissan_GT-R_workshop_detailing_202607181448.mp4`)

Project destination: `public/videos/gtr-workshop-detail.mp4`

Originals were copied, never moved or edited; all three remain untouched in `Downloads/`.

## Scene 1 — Cinematic Reveal
- File: `public/videos/gtr-hero-reveal.mp4`
- Duration: 10.006 s (confirmed via `ffprobe`)
- Resolution: 1280 × 720 (16:9), H.264 + AAC, ~2.04 Mb/s
- Frame rate: 24 fps
- Usage: Muted, autoplaying hero backdrop and scroll-scrubbed camera-movement reference. The car in this footage is a modified Liberty Walk widebody GT-R in midnight-purple, not the factory 2024 NISMO — used strictly for pacing, lighting and silhouette-to-reveal camera choreography behind independent NISMO hero copy.
- Loop suitability: Low — opens near-black, ends on a lit three-quarter hold. Treated as a one-pass scroll-scrub, not a loop.
- Mobile crop: `object-position: 62% 45%` inside a shorter (68vh) fixed stage; poster shown until the hero section enters the viewport.

## Scene 2 — Exterior Details
- File: `public/videos/gtr-exterior-detail.mp4`
- Duration: 10.006 s
- Resolution: 1280 × 720 (16:9), H.264 + AAC, ~2.24 Mb/s
- Frame rate: 24 fps
- Usage: Scroll-scrubbed macro pass (splitter → fender/wheel → exhaust) used under the generic heading "Aerodynamic Form." Visible Liberty Walk decals, deep-dish wheels and the oversized wing are never labelled as factory parts; all factual carbon-fibre/diffuser/wing callouts sit in separate text blocks describing the real NISMO.
- Scroll-scrub suitability: High — slow, continuous macro moves read cleanly at any scrub speed.
- Mobile crop: `object-position: 55% 50%`, capped at 60vh, no full-body wide shot (keeps aftermarket proportions out of frame next to factory spec text).

## Scene 5 — Workshop Detail (used as VR38DETT-section atmosphere)
- File: `public/videos/gtr-workshop-detail.mp4`
- Duration: 10.006 s
- Resolution: 1280 × 720 (16:9), H.264 + AAC, ~2.08 Mb/s
- Frame rate: 24 fps
- Usage: Ambient side-panel motion beside the VR38DETT technical diagram. Frame-by-frame inspection (0.3 s / 2.5 s / 5.0 s / 7.5 s / 9.7 s) shows a front-wheel/caliper macro, a fender/vent close-up, and a rear-quarter/wing-mount pass in a real workshop bay — **no engine bay or open bonnet appears at any point.** It is therefore never captioned as an engine reveal; all VR38DETT facts come from the adjacent SVG diagram, independent of this footage.
- Scroll-scrub suitability: Moderate — usable as a slow lateral background pass, not for frame-accurate callouts.
- Mobile crop: `object-position: 58% 50%`, shown as a narrow (40vh) side band, muted, paused off-screen.

## Verification note

All three files were re-inspected in this session with `ffprobe` (duration/resolution/codec) and `ffmpeg` frame extraction at five timestamps each. Findings:
- Every clip is exactly 1280×720, 24 fps, 10.006 s, H.264/AAC — the filenames' implied scene order is otherwise accurate.
- The reveal and exterior clips visibly show "Liberty Walk" / "LB WORKS" decals and an aftermarket wing; the workshop clip shows a caliper reading "Libert…" and deep-dish wheels. None of this is depicted as NISMO factory equipment anywhere on the site.
- No frame in any clip shows an open engine bay, so "Scene 5" is used as atmosphere next to the engine section rather than as engine content itself.
