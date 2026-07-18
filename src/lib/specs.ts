/**
 * Facts about the featured build: a Liberty Walk widebody Nissan GT-R (R35
 * platform), as shown in the site's reference footage.
 *
 * "Platform" facts are genuine characteristics of the R35 GT-R chassis
 * (engine type, drivetrain layout, transmission, stock dimensions) — true
 * regardless of this car's modifications. "Build" facts are this specific
 * car's visually evidenced aftermarket parts (Liberty Walk widebody kit,
 * Rohana wheels, Toyo tyres, Armytrix exhaust, ALPHA intercooler).
 *
 * No horsepower, torque, or performance figures are asserted for this
 * specific car — no dyno sheet or manufacturer spec sheet was supplied for
 * this individual build, so none is invented. This is an independent,
 * unofficial showcase — not a Nissan, Liberty Walk, or Rohana publication.
 */

export const heroStats = [
  { value: "3.8L", label: "TWIN-TURBO V6 PLATFORM" },
  { value: "AWD", label: "ATTESA E-TS" },
  { value: "LB", label: "WIDEBODY KIT" },
] as const;

export const platformFacts = {
  chassis: "Nissan GT-R, R35 platform",
  engineType: "Longitudinal 60-degree twin-turbocharged V6 (VR38DETT)",
  displacement: "3,799 cc / 3.8 litres",
  valvetrain: "DOHC, 24 valves",
  drive: "ATTESA E-TS all-wheel drive",
  transmission: "Six-speed dual-clutch rear transaxle",
  frontSuspension: "Independent double wishbone (factory layout)",
  rearSuspension: "Independent multi-link (factory layout)",
} as const;

export const buildFacts = {
  bodyKit: "Liberty Walk (LB★Performance / LB Works) complete widebody kit",
  bodyKitFeatures: [
    "Riveted wide front and rear overfenders",
    "Aggressive front bumper and splitter",
    "Functional rear diffuser",
    "LBWK-badged GT-style rear wing",
  ],
  wheels: "Rohana forged multi-spoke wheels",
  tyres: "Toyo performance tyres",
  exhaust: "Armytrix valvetronic exhaust system",
  intercooler: "ALPHA Performance front-mount intercooler",
  finish: "Custom green paint / wrap",
  stance:
    "Aggressively lowered stance, consistent with a coilover or air-suspension setup typical of widebody show builds",
  brakes: "Brembo brake calipers, finished in red for this build",
} as const;

export const gearRatios = [
  { gear: "1st", ratio: "4.056" },
  { gear: "2nd", ratio: "2.301" },
  { gear: "3rd", ratio: "1.595" },
  { gear: "4th", ratio: "1.248" },
  { gear: "5th", ratio: "1.001" },
  { gear: "6th", ratio: "0.796" },
] as const;

export const finalDrive = {
  reverse: "3.383",
  front: "2.937",
  rear: "3.700",
} as const;

export const suspensionNote =
  "This build's exact coilover/air-suspension setup is not published — the stanced ride height is visually evident but not itemized here.";

export const cockpitNote =
  "No interior footage was supplied for this build, so cabin details aren't shown on this page.";

export const platformCockpitFeatures = [
  "NissanConnect touchscreen (platform feature)",
  "Bose premium audio (platform feature)",
  "Real-time AWD torque-split display (platform feature)",
] as const;

export const performanceDisplayMetrics = [
  "Turbo boost",
  "Water temperature",
  "Engine temperature",
  "Oil pressure",
  "Transmission temperature",
  "Transmission pressure",
  "Speed",
  "Acceleration",
  "Braking",
  "G-force",
  "Fuel flow",
  "Front-to-rear torque split",
  "Steering angle",
  "Accelerator position",
  "Brake position",
  "Lap timing",
  "Tyre pressure",
] as const;

export const dimensions = {
  lengthStock: { imperial: "184.6 in", metric: "≈4,689 mm" },
  heightStock: { imperial: "53.9 in", metric: "≈1,369 mm" },
  wheelbaseStock: { imperial: "109.4 in", metric: "≈2,779 mm" },
  widthNote:
    "The Liberty Walk widebody kit widens the car beyond the factory 74.6 in figure; the exact widened measurement for this build isn't published, so it isn't shown as a number here.",
} as const;

export type SpecCategory = "platform" | "build";

export const specRows: { system: string; spec: string; category: SpecCategory }[] = [
  { system: "Base platform", spec: "Nissan GT-R, R35 chassis", category: "platform" },
  { system: "Engine", spec: "VR38DETT 3.8-litre twin-turbo V6 (platform)", category: "platform" },
  { system: "Drive", spec: "ATTESA E-TS all-wheel drive", category: "platform" },
  { system: "Transmission", spec: "Six-speed dual-clutch rear transaxle", category: "platform" },
  { system: "Suspension (factory)", spec: "Double wishbone front · multi-link rear", category: "platform" },
  { system: "Body kit", spec: "Liberty Walk complete widebody kit", category: "build" },
  { system: "Wheels", spec: "Rohana forged multi-spoke wheels", category: "build" },
  { system: "Tyres", spec: "Toyo performance tyres", category: "build" },
  { system: "Exhaust", spec: "Armytrix valvetronic exhaust system", category: "build" },
  { system: "Intercooler", spec: "ALPHA Performance front-mount intercooler", category: "build" },
  { system: "Brakes", spec: "Brembo calipers, finished red", category: "build" },
  { system: "Stance", spec: "Lowered widebody stance (coilover/air suspension typical)", category: "build" },
];
