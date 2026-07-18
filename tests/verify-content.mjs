import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};

// Media assets must exist locally (copied, not regenerated).
for (const media of [
  "public/videos/gtr-scene-01.mp4",
  "public/videos/gtr-scene-02.mp4",
  "public/videos/gtr-scene-03.mp4",
  "public/videos/gtr-scene-04.mp4",
  "public/posters/hero.jpg",
  "public/posters/exterior.jpg",
  "public/posters/engine.jpg",
  "public/posters/final.jpg",
  "public/brand/lb-works-logo.png",
]) {
  if (!existsSync(resolve(root, media))) fail(`Missing media asset: ${media}`);
}

// Retired filenames must not exist on disk or be referenced anywhere in src/.
for (const stale of [
  "public/videos/gtr-hero-reveal.mp4",
  "public/videos/gtr-exterior-detail.mp4",
  "public/videos/gtr-workshop-detail.mp4",
  "public/posters/workshop.jpg",
]) {
  if (existsSync(resolve(root, stale))) fail(`Stale media asset still present: ${stale}`);
}

// Required section components must exist.
for (const section of [
  "Hero",
  "Legend",
  "Aero",
  "Engine",
  "Drivetrain",
  "Chassis",
  "Brakes",
  "Wheels",
  "Cockpit",
  "Dimensions",
  "Specs",
  "FinalHero",
]) {
  if (!existsSync(resolve(root, `src/components/sections/${section}.tsx`)))
    fail(`Missing section component: ${section}.tsx`);
}

// Required facts for the current (Liberty Walk build) content model must be present.
const specSource = readFileSync(resolve(root, "src/lib/specs.ts"), "utf8");
for (const fact of [
  "VR38DETT",
  "ATTESA E-TS",
  "Liberty Walk",
  "Rohana",
  "Toyo",
  "Armytrix",
  "ALPHA",
]) {
  if (!specSource.includes(fact)) fail(`Missing required fact in specs.ts: ${fact}`);
}

const { readdirSync } = await import("node:fs");
const collectSourceFiles = (dir, files = []) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) collectSourceFiles(full, files);
    else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
};

const disclaimed = (content, matchIndex) => {
  const windowText = content.slice(Math.max(0, matchIndex - 80), matchIndex + 200).toLowerCase();
  return /not published|undisclosed|no dyno|isn't shown|aren't published|not disclosed/.test(
    windowText
  );
};

const sourceFiles = collectSourceFiles(resolve(root, "src"));
for (const file of sourceFiles) {
  const content = readFileSync(file, "utf8");

  // No specific horsepower/torque figure may be asserted for this build without
  // hedging language nearby — no dyno sheet was supplied for this specific car.
  const hpMatch = /\d+\s*(hp|bhp|lb-ft|nm)\b/i.exec(content);
  if (hpMatch && !disclaimed(content, hpMatch.index)) {
    fail(`Unhedged performance figure "${hpMatch[0]}" found in ${file} — no dyno data exists for this build`);
  }

  // The old factory-NISMO branding must not resurface.
  if (/gt-r\s*nismo/i.test(content)) {
    fail(`Old "GT-R NISMO" branding resurfaced in ${file}`);
  }

  for (const staleName of [
    "gtr-hero-reveal.mp4",
    "gtr-exterior-detail.mp4",
    "gtr-workshop-detail.mp4",
    "posters/workshop.jpg",
  ]) {
    if (content.includes(staleName)) fail(`Stale reference to ${staleName} in ${file}`);
  }
}

if (process.exitCode === 1) {
  console.error("Content and media checks FAILED.");
} else {
  console.log("Content and media checks passed.");
}
