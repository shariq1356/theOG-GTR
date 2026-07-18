# Skill Usage Plan

## Skill source

- Requested Windows root: `C:\Users\ShariqHaroon\Downloads\scroll-site-generator`
- Accessible WSL root: `/mnt/c/Users/ShariqHaroon/Downloads/scroll-site-generator`
- Actual extracted skill package (one directory nested inside the requested root): `/mnt/c/Users/ShariqHaroon/Downloads/scroll-site-generator/scroll-site-generator`
- Entrypoint read in full: `SKILL.md`
- Also read in full: `references/gsap-nextjs.md`, `references/brand-page.md`, `references/vanilla-film.md`, `references/deploy.md`, `assets/SmoothScroll.tsx`, `assets/useFrameSequence.ts`

## Architecture decision

The skill offers two architectures:
1. **Vanilla scroll-film** — an AI-generated master film sliced into ~400 WebP frames, scrubbed on a canvas (`assets/scrubber-main.js` + `useFrameSequence.ts`).
2. **GSAP/Next.js hybrid** — pinned React sections mixing frame-scrubbed canvases with GSAP timelines (`references/gsap-nextjs.md`, scaffolded with `create-next-app` + `gsap`/`lenis`).

Neither fits verbatim: this project has no AI-generated WebP frame sequence — it has three short, real MP4 clips supplied directly by the user. The hybrid architecture is the correct base (React sections, GSAP `ScrollTrigger`, one Lenis controller, `gsap.context`/`ctx.revert()` cleanup per section), but the frame-scrubbing engine (`useFrameSequence.ts`, canvas `drawImage`) is built for a *decoded WebP image sequence*, not a video element, so it is not directly reusable. In its place, sections that need scroll-scrubbed motion drive `HTMLVideoElement.currentTime` directly from `ScrollTrigger.onUpdate`, which is the correct primitive for real video assets and is explicitly listed as an acceptable technique in the brief ("frame-accurate video scrubbing").

## Reused from the skill

- **Scaffold command** — `npx create-next-app@15 --ts --tailwind --eslint --app --src-dir --import-alias "@/*"` followed by `npm i gsap lenis`, taken verbatim from `references/gsap-nextjs.md`.
- **`assets/SmoothScroll.tsx`** — copied and adapted almost verbatim as `src/components/SmoothScroll.tsx`: Lenis instance wired onto `gsap.ticker`, `ScrollTrigger.update` on scroll, `lagSmoothing(0)`, cleanup on unmount. This is the skill's proven "one smooth-scroll controller" pattern.
- **Section pattern** — `<section className="relative h-[Nvh]"><div className="sticky top-0 h-screen">` pinned stages with one `gsap.context(() => {...}, root)` timeline per section, per `references/gsap-nextjs.md`'s "Section pattern."
- **Brand-page narrative arc** — `references/brand-page.md`'s ordering logic (manifesto → origin → craft chapters → stats → specs → gallery/voices → closing CTA → real footer, sticky nav appearing after the opening cinematic) directly informed the ordering and shape of sections 3–13 (legend → aero → engine → drivetrain → chassis → brakes → wheels → cockpit → dimensions → specs → final hero), even though the underlying media differs from the skill's typical AI-film pipeline.
- **Polish rules** — film-grain overlay, one accent colour (NISMO red) against a near-black ground, vignette masking on video stages, and "the film is the opening act, not the whole site" principle, all taken from `references/gsap-nextjs.md` and `references/brand-page.md`.
- **`references/deploy.md`** was read for completeness; no deploy step was requested this session, so it was not acted on.

## Not reused, and why

- `assets/useFrameSequence.ts` / `assets/scrubber-main.js` — built around a decoded WebP frame manifest (`frames/<name>/manifest.json`), which does not exist here; the supplied media is three whole MP4 files, so direct `<video>` scrubbing replaces it.
- `scripts/hf.py`, `scripts/build_master.py`, `scripts/extract.py` — all three are steps in the Higgsfield still→clip→frame-slice pipeline. `extract.py`'s general "pull frames locally with ffmpeg" idea was followed conceptually (this project used a local static ffmpeg/ffprobe binary to extract contact-sheet frames instead of running the script directly, since the script is wired to the generation pipeline's expected file layout).
- `references/prompts.md` — purely about prompting Kling/Soul for generation; not applicable.

## Higgsfield override

`scripts/hf.py` plus the generation steps described in `SKILL.md` (steps 2–4: hero-still generation with Soul, image upload, Kling image-to-video chapter generation, QC contact sheets of *generated* clips) are the Higgsfield stage.

**Skipped, exactly:**
- Any call to `scripts/hf.py` (image, upload, or video subcommands)
- Any Higgsfield/Kling API request, client initialization, or key lookup (the `.env` `HF_KEY` in the skill folder was never read as a value or used)
- Any credit spend, retry, or placeholder generation

**Followed instead, per the task's adjusted workflow:**
1. Validate the three supplied local MP4s with `ffprobe`/`ffmpeg` (this session, fresh — see `VIDEO_ANALYSIS.md`)
2. Copy them into `public/videos/` under clear filesystem-safe names, generate poster JPGs locally, and document the mapping (`VIDEO_MAPPING.md`)
3. Build the scroll site around them as described below
4. Validate and build

## Dependencies

- Recommended and installed: `gsap`, `lenis` (skill's exact recipe), plus `motion` (the maintained successor to Framer Motion, used per the task's own technical-requirements section for component-level transitions the skill doesn't otherwise specify a tool for).
- No Three.js/React Three Fiber was installed: no licensed `.glb`/`.gltf`/`.fbx`/`.obj` model was found anywhere in the skill folder or Downloads, so per the 3D-model rule no 3D scene is built or claimed.

## Repository conflict and resolution

No pre-existing website repository occupied `gtr-nismo-launch` at the start of this run (a prior attempt at this same brief was explicitly deleted by the user beforehand, and this rebuild was required to not reuse any of that code). `create-next-app` was run into a clean directory, so there was no structural conflict to resolve. The skill's Next-specific scaffold guidance was followed as given.
