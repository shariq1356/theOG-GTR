# Updated Video Mapping

All four videos were supplied at `Downloads/git vids/{1,2,3,4}.mp4` and re-inspected this session with `ffprobe`/`ffmpeg` (never uploaded anywhere). They replace the three lower-quality clips used in the previous build. **Vehicle-identity note carried over unchanged:** all four clips show the same single vehicle — a neon-green R35 GT-R wearing a Liberty Walk ("LBWK"/"LB★Performance") widebody kit, Rohana Forged wheels, an Armytrix exhaust and an ALPHA front-mount intercooler, shot on location in a derelict industrial lot. None of the four shows the factory 2024 GT-R R35 NISMO. They are used exactly as before: cinematic pacing/camera/lighting reference only, never as a source of factory specification, with generic section headings and no Liberty Walk callouts.

## Video 1 (source `1.mp4`)
- Source: `Downloads/git vids/1.mp4`
- Destination: `public/videos/gtr-scene-03.mp4`
- Duration: 12.27 s · Resolution: 1280×676 (16:9-ish, 30 fps, H.264/AAC, ~10.3 Mb/s)
- Best section: **Engine / mechanical atmosphere strip** (replaces the old workshop clip)
- Usage: Opens on an unrelated "STOP / Proceed with caution" sign (a stylistic title-card beat), then cuts to a dark green-lit hexagonal mesh macro (likely a vent or duct grille) and closes on two wheel/caliper macro passes. None of it is engine-bay footage — same caveat as the previous build's workshop clip — so it plays only as a small, muted side-panel atmosphere strip next to the independent VR38DETT diagram, starting at 1.2 s to skip the STOP-sign beat.
- Playback strategy: Normal (autoplay-in-view, no scrub) — the STOP-sign/mesh/wheel cuts are discrete beats, not a continuous progression.
- Mobile strategy: `object-position: 60% 55%`, 36vh strip, poster-only until in view, paused offscreen.

## Video 2 (source `2.mp4`)
- Source: `Downloads/git vids/2.mp4`
- Destination: `public/videos/gtr-scene-01.mp4`
- Duration: 12.20 s · Resolution: 1280×676, 30 fps, H.264/AAC, ~10.3 Mb/s
- Best section: **Hero reveal**
- Usage: Front-fender/headlight macro → rear wing/taillight macro → a clean wide dolly-hold of the full car standing under an open industrial canopy, sky and negative space on both sides. That wide shot is the strongest full-vehicle reveal of the four clips and the least visually cluttered, so it anchors the hero; the macro passes play first as a slow build before the reveal.
- Playback strategy: Hybrid — plays on load (muted, autoplay), with scroll tied to scale/brightness/saturation ramp (matched to the wide-shot arrival point) rather than raw frame-scrubbing, since the clip is cut-based rather than one continuous move.
- Mobile strategy: `object-position: 55% 40%`, 70vh fixed band, metadata-preloaded (only video preloaded on the whole page).

## Video 3 (source `3.mp4`)
- Source: `Downloads/git vids/3.mp4`
- Destination: `public/videos/gtr-scene-02.mp4`
- Duration: 9.94 s · Resolution: 1280×676, 30 fps, H.264/AAC, ~10.2 Mb/s
- Best section: **Exterior / aerodynamic inspection**
- Usage: Rear-quarter/wheel macro → hood-vent/headlight macro → wheel/brake macro → a static wide side-profile hold showing the full silhouette. The macro sequence is the richest "surface and form" material of the four clips (headlight, hood vents, wheel, brake, side skirt), matching the aero section's role; captioned generically ("Aerodynamic Form") with no labels pointed at the visible widebody hardware.
- Playback strategy: Scroll-scrub (`currentTime` tied to scroll progress) — slow, continuous macro passes with no hard cuts in the first 7 s, same technique as the previous build's exterior clip.
- Mobile strategy: `object-position: 50% 55%`, 62vh fixed band, `preload="none"` until near-viewport.

## Video 4 (source `4.mp4`)
- Source: `Downloads/git vids/4.mp4`
- Destination: `public/videos/gtr-scene-04.mp4`
- Duration: 13.03 s · Resolution: 1280×676, 30 fps, H.264/AAC, ~10.3 Mb/s
- Best section: **Final hero sequence**
- Usage: Dark wheel-spoke macro → wide front three-quarter hold → rear three-quarter (wing/diffuser) → side push-in → a high-angle dramatic front three-quarter close. This is the most "finale-shaped" clip of the four — it ends on the most dramatic framing — so it closes the page rather than opening it, giving the hero (video 2) and the final scene distinct compositions instead of repeating the same reveal twice.
- Playback strategy: Normal (autoplay once the section is ~30% in view, no scrub, no forced loop) — multiple cuts, not a single continuous move.
- Mobile strategy: `object-position: 60% 50%`, 55vh band, paused offscreen, poster-first.

## Poster-frame selection note

Because this footage is a bright outdoor promo shoot (unlike the previous dark-studio clips), almost every frame carries some legible aftermarket decal ("Rohana", "LB★Performance", "LBWK", "Toyo Tires"). Poster frames were chosen to minimize legibility rather than eliminate the car entirely: the two wide establishing shots (hero, exterior) hold decals at a distance where they read as texture, not text; the engine-strip poster uses the fully abstract mesh macro; the final-hero poster is a cropped wheel-spoke macro with the tire lettering cropped out of frame.
