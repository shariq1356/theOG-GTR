# Video Analysis

All analysis performed locally in this session with a local static `ffprobe`/`ffmpeg` binary and frame extraction to `/tmp/gtr-fresh-analysis/` (five timestamps per clip: 0.3 s, 2.5 s, 5.0 s, 7.5 s, 9.7 s). No file was uploaded anywhere; originals in `Downloads/` were only read, never modified.

## Scene 1 — `gtr-hero-reveal.mp4`
- Duration / frame rate: 10.006 s / 24 fps
- Resolution / aspect ratio: 1280 × 720 / 16:9
- Codec: H.264 video + AAC audio, ~2.04 Mb/s
- Dominant colours: near-black, graphite, midnight purple, cool white speculars
- Lighting direction: single overhead strip light + low front key light; broad dark studio walls
- Camera movement: static-feeling lock-off that reveals through lighting, not camera travel — silhouette (0.3 s) → headlamp macro (2.5 s) → lit frontal three-quarter (5–9.7 s)
- Vehicle position: centred, slightly left-biased in the wide shots
- Visual focal points: headlamp ignition, grille, windshield speculars, floor reflection
- Opening frame: near-total silhouette, only the overhead strip and a sliver of headlamp visible
- Closing frame: fully lit three-quarter stance, wing and profile clearly visible
- Suitable loop points: none — recommend a single scroll-driven pass from black to lit, not a loop
- Suitable transition frames: the 2.5 s headlamp-ignition moment reads well as a hard cut/dissolve point into copy
- Dark / bright areas: background and lower body stay near-black throughout; brightness concentrates on the headlamp and roofline speculars
- Safe text-placement areas: left third and lower-left, which stay dark and empty at every timestamp
- Scroll-scrub suitability: good for a slow scrub (brightness/scale progression); poor for fast seeking since the silhouette-to-lit transition is subtle
- Autoplay suitability: good — muted, no motion-sickness risk, dark enough not to flash
- Desktop crop: full 16:9, contain within a 100vh sticky stage
- Mobile crop: `object-position: 62% 45%`, cropped to a 68vh band to keep the headlamp/grille in frame
- Poster-frame recommendation: 0.4 s (near-black silhouette) — the only timestamp with no legible aftermarket decal text, and it matches the requested "dark technical studio" mood
- Compression recommendation: ship the supplied 720p H.264 as-is; it is already web-reasonable at ~2.6 MB and further compression would visibly degrade the low-light gradients

## Scene 2 — `gtr-exterior-detail.mp4`
- Duration / frame rate: 10.006 s / 24 fps
- Resolution / aspect ratio: 1280 × 720 / 16:9
- Codec: H.264 + AAC, ~2.24 Mb/s
- Dominant colours: midnight purple paint, charcoal carbon-look trim, bright studio white, one red brake-caliper accent
- Lighting direction: bright, even overhead studio strips; soft floor bounce
- Camera movement: continuous macro dolly — front splitter/vent (0.3–2.5 s) → front fender & wheel (5.0 s) → side skirt/door (7.5 s) → rear diffuser/exhaust tips (9.7 s)
- Vehicle position: extreme close-up throughout; no full-body framing
- Visual focal points: splitter texture, wheel/caliper, "Liberty Walk" door decal, titanium-blue dual exhaust tips
- Opening frame: front splitter/vent macro
- Closing frame: rear diffuser and exhaust-tip macro
- Suitable loop points: none — beginning and end frames don't match; use as a single scroll-scrubbed pass
- Suitable transition frames: the wheel/caliper frame (5.0 s) is the cleanest cut point — no legible branding, strong red accent
- Dark / bright areas: evenly lit; no deep shadow regions to hide text in
- Safe text-placement areas: none inside the footage itself — text is placed in a dedicated dark panel beside/over the frame, not directly on the car
- Scroll-scrub suitability: excellent — slow, continuous macro moves stay legible at any scrub speed
- Autoplay suitability: acceptable muted background once in view; not suitable for an unattended loop paired with factual callouts, since the visible parts are aftermarket
- Desktop crop: cover at 16:9 inside a pinned stage
- Mobile crop: `object-position: 55% 50%`, capped at 60vh so the widebody stance isn't the dominant silhouette next to factory spec text
- Poster-frame recommendation: 5.0 s (fender/wheel/caliper macro) — no legible decal text
- Compression recommendation: keep source H.264; defer loading until the section nears the viewport (`preload="none"`, assigned on intersection)

## Scene 5 — `gtr-workshop-detail.mp4` (workshop atmosphere, not an engine bay)
- Duration / frame rate: 10.006 s / 24 fps
- Resolution / aspect ratio: 1280 × 720 / 16:9
- Codec: H.264 + AAC, ~2.08 Mb/s
- Dominant colours: workshop white/grey, midnight purple body, gunmetal wheel, one red caliper accent
- Lighting direction: bright overhead workshop fluorescents + a softbox visible in the background at points
- Camera movement: slow lateral macro drift — front wheel/caliper (0.3–5.0 s) → fender/vent with tool cabinets behind (5.0–7.5 s) → rear-quarter/wing-mount (9.7 s)
- Vehicle position: cropped detail throughout; a genuine workshop bay is visible in the background (tool chests, softbox, floor markings)
- Visual focal points: wheel construction, red caliper (partially legible "Libert…" text), rivets along the fender, wing mounting hardware
- Opening frame: front-wheel/caliper macro
- Closing frame: rear-quarter with wing mount and workshop background
- Suitable loop points: low — not designed to loop; used as a single masked pass
- Suitable transition frames: 9.7 s (rear-quarter/workshop) has no legible caliper text and reads as pure atmosphere
- Dark / bright areas: mostly even bright light; the tool-cabinet background at 5–7.5 s is comparatively darker and could hide a caption panel
- Safe text-placement areas: a translucent panel over the tool-cabinet background (5.0–7.5 s framing)
- Scroll-scrub suitability: moderate — fine as a slow ambient pass, not for frame-accurate labelling
- Autoplay suitability: acceptable as a small muted side-panel loader once in view; not used as primary content
- Desktop crop: cover, contained to a narrow strip beside the engine diagram, never full-bleed hero-sized
- Mobile crop: `object-position: 58% 50%`, 40vh band
- Poster-frame recommendation: 9.7 s (rear-quarter, no legible branding)
- Compression recommendation: keep source H.264, lazy-load only, no audio autoplay

## Cross-video confirmation

**Critical finding, confirmed by direct frame inspection (not filename):** none of the three clips shows the actual 2024 GT-R R35 NISMO. All three show the same modified, Liberty Walk-bodied, midnight-purple GT-R (visible decals: "Liberty Walk", "LB Works", partial caliper branding; visible aftermarket deep-dish wheels; visible oversized rear wing). This is treated throughout the site strictly as a cinematic pacing/lighting/camera reference, per the critical vehicle-identity rule — never as a source of factual NISMO specification, and never captioned as the factory car.
