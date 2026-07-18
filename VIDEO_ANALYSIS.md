# Video Analysis (updated — replacement videos)

All analysis performed locally this session with a local static `ffprobe`/`ffmpeg` binary; five-timestamp contact sheets were extracted per clip to `/tmp/gtr-newvids-analysis/`. No file was uploaded anywhere; originals in `Downloads/git vids/` were only read.

## Video 1 → `gtr-scene-03.mp4` (Engine / mechanical atmosphere)
- Duration / frame rate: 12.267 s / 30 fps · Resolution / ratio: 1280×676 (~1.89:1) · Codec: H.264 + AAC, ~10.3 Mb/s
- Dominant colours: warm workshop orange/rust (opening sign), then near-black with saturated green highlights
- Lighting: opening shot is flat daylight; the mesh and wheel shots are moodily underlit with a green accent light
- Camera movement: static shots with a slow rack-focus/dolly on the mesh; the wheel shots are handheld-still macros
- Vehicle position: not visible in the opening shot; wheel fills frame in the closing shots
- Visual focal points: the "STOP / Proceed with caution" sign, a backlit hexagonal mesh (vent/duct), a wheel spoke/caliper macro
- Opening frame: the stop sign (0.4 s) — an odd, non-automotive establishing beat, not used as the poster or playback start
- Closing frame: wheel/caliper macro, "Rohana Forged" hub legible
- Loop points: none good — the stop-sign/mesh/wheel beats are discrete cuts
- Transition frames: the mesh macro (~3.1 s) has no legible text and cuts cleanly to the wheel macro
- Dark/bright areas: mostly dark except the stop sign and mesh highlights
- Safe text-placement area: none inside the footage — used only as a small side-panel strip with copy in a separate block, same treatment as the previous workshop clip
- Scroll-scrub suitability: low (discrete cuts) — normal autoplay only
- Autoplay suitability: good muted background once in view, started at 1.2 s to skip the stop-sign beat
- Desktop crop: contained inside a narrow strip beside the engine diagram, never full-bleed
- Mobile crop: `object-position: 60% 55%`, 36vh
- Poster recommendation: 3.1 s (hex mesh, no legible branding)
- Compression: keep source H.264, lazy-load only, muted

## Video 2 → `gtr-scene-01.mp4` (Hero)
- Duration / frame rate: 12.203 s / 30 fps · Resolution / ratio: 1280×676 · Codec: H.264 + AAC, ~10.3 Mb/s
- Dominant colours: neon green body, warm rust/cream industrial brick, pale overcast sky
- Lighting: soft daylight overcast, even exposure, no harsh shadows
- Camera movement: close macro pans (fender→headlight, then wing→taillight) settling into a static wide hold
- Vehicle position: tight crop in the opening macros, centred and small-in-frame in the closing wide hold — excellent negative space above/around the car
- Visual focal points: headlamp cluster, rear wing/taillight, then the full silhouette against the industrial canopy
- Opening frame: fender/headlight macro (0.4 s)
- Closing frame: full car, wide static hold (9.2–11.8 s), the strongest reveal composition of all four clips
- Loop points: none needed — plays once per view, holds on the wide shot
- Transition frames: the cut into the wide hold (~6 s) is the natural "reveal" beat for hero copy to lock in
- Dark/bright areas: fairly even; the sky region above the car and the asphalt below stay visually quiet
- Safe text-placement area: left/lower-left across the whole clip (car is right-of-centre in the macros, centred with sky above in the wide hold)
- Scroll-scrub suitability: moderate — used for scale/brightness/saturation progression, not frame seeking, since the clip is cut-based
- Autoplay suitability: excellent hero candidate — muted, calm, no flash risk
- Desktop crop: full 16:9-ish, contain within a 100vh sticky stage
- Mobile crop: `object-position: 55% 40%`, 70vh
- Poster recommendation: 9.15 s (wide hold — decals present but small/illegible at this distance)
- Compression: ship source H.264 as-is; only video with `preload="metadata"` on the whole page

## Video 3 → `gtr-scene-02.mp4` (Exterior / aerodynamic inspection)
- Duration / frame rate: 9.941 s / 30 fps · Resolution / ratio: 1280×676 · Codec: H.264 + AAC, ~10.2 Mb/s
- Dominant colours: neon green, black carbon-look trim, warm brick backdrop
- Lighting: even daylight, slightly warmer than video 2
- Camera movement: continuous macro dolly — rear quarter/wheel → hood vents/headlight → wheel/brake → static wide side-profile hold
- Vehicle position: extreme close-up throughout the first 7 s, full profile in the final 2.5 s
- Visual focal points: hood vents, headlight cluster, wheel/brake assembly, full side silhouette
- Opening frame: rear-quarter/wheel macro with an "Armytrix" decal
- Closing frame: static wide side-profile hold, full car
- Loop points: none — single scroll-scrubbed pass, same treatment as the previous exterior clip
- Transition frames: the headlight macro (~2.5 s) is a clean, brand-quiet cut point
- Dark/bright areas: evenly lit, no deep shadow to hide text in — text stays in a dedicated overlay panel, never on the footage
- Safe text-placement area: none on the footage itself
- Scroll-scrub suitability: excellent — slow, continuous macro moves scrub cleanly at any speed, same as before
- Autoplay suitability: fine as a scroll-scrubbed background, not for unattended looping with factual callouts
- Desktop crop: cover at 16:9-ish inside a pinned stage
- Mobile crop: `object-position: 50% 55%`, 62vh
- Poster recommendation: 9.64 s (wide side-profile hold, decals small/illegible)
- Compression: keep source H.264, `preload="none"` until near-viewport

## Video 4 → `gtr-scene-04.mp4` (Final hero sequence)
- Duration / frame rate: 13.035 s / 30 fps · Resolution / ratio: 1280×676 · Codec: H.264 + AAC, ~10.3 Mb/s
- Dominant colours: neon green, dark wheel/carbon-look tones, warm industrial backdrop
- Lighting: even daylight, slightly cooler/darker in the opening wheel macro
- Camera movement: dark wheel-spoke macro → wide front three-quarter hold → rear three-quarter (wing/diffuser) → side push-in → high-angle dramatic front three-quarter
- Vehicle position: full car in three of five sampled frames, extreme macro in the other two
- Visual focal points: wheel spokes, front splitter/grille ("LB★Performance", "ALPHA" intercooler legible), rear wing ("LBWK" legible), final high-angle three-quarter
- Opening frame: dark wheel-spoke macro (cropped for the poster to remove the tire-lettering edge)
- Closing frame: high-angle dramatic front three-quarter — the strongest "closing statement" framing of the four clips
- Loop points: none — plays once, multiple cuts
- Transition frames: the wheel macro doubles as a visual echo of the engine-atmosphere clip's wheel macro, useful for bookending the page
- Dark/bright areas: opening macro is dark/moody; the three-quarter shots are bright and even
- Safe text-placement area: sky/negative space above the car in the wide front three-quarter shot
- Scroll-scrub suitability: low (discrete cuts) — normal autoplay-once-in-view
- Autoplay suitability: good as a closing statement, muted, no loop
- Desktop crop: full-bleed behind the closing headline and CTA
- Mobile crop: `object-position: 60% 50%`, 55vh
- Poster recommendation: 1.2 s, cropped to `840×676` (right-hand 65% of frame) to remove the tire-lettering edge, keeping the spoke/rotor detail
- Compression: keep source H.264, lazy-load, muted, paused offscreen

## Cross-video confirmation

Re-confirmed by direct frame inspection: all four clips show the same modified, Liberty Walk-bodied, neon-green GT-R (visible decals: "LBWK", "LB★Performance", "Rohana", "Toyo Tires", "Armytrix", "ALPHA") — not the factory 2024 NISMO. Treated throughout as a cinematic pacing/lighting/camera reference only, exactly as the previous video set was, with generic section headings and no aftermarket branding surfaced in copy.
