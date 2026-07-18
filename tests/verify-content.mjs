import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};

// Media assets must exist locally (copied, not regenerated).
for (const media of [
  "public/videos/gtr-hero-reveal.mp4",
  "public/videos/gtr-exterior-detail.mp4",
  "public/videos/gtr-workshop-detail.mp4",
  "public/posters/hero.jpg",
  "public/posters/exterior.jpg",
  "public/posters/workshop.jpg",
]) {
  if (!existsSync(resolve(root, media))) fail(`Missing media asset: ${media}`);
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

// Required factual copy must be present somewhere in the spec data or section source,
// and the incorrect 565 hp figure must never appear anywhere in src/.
const specSource = readFileSync(resolve(root, "src/lib/specs.ts"), "utf8");
for (const fact of [
  "VR38DETT",
  "600 hp",
  "ATTESA E-TS",
  "Brembo carbon-ceramic",
  "3,867 lb",
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
  const windowText = content.slice(Math.max(0, matchIndex - 60), matchIndex + 20).toLowerCase();
  return /standard|not the|do not|non-nismo|prior|regular/.test(windowText);
};

const sourceFiles = collectSourceFiles(resolve(root, "src"));
for (const file of sourceFiles) {
  const content = readFileSync(file, "utf8");
  const hpMatch = /565\s*hp/i.exec(content);
  if (hpMatch && !disclaimed(content, hpMatch.index)) {
    fail(`Undisclaimed 565 hp figure found in ${file}`);
  }
  const lwMatch = /liberty\s*walk/i.exec(content);
  if (lwMatch && !disclaimed(content, lwMatch.index)) {
    fail(`Liberty Walk mentioned without a disclaiming context in ${file}`);
  }
}

if (process.exitCode === 1) {
  console.error("Content and media checks FAILED.");
} else {
  console.log("Content and media checks passed.");
}
