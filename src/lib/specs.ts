/**
 * Single source of truth for 2024 Nissan GT-R R35 NISMO facts used across
 * sections. Figures only — do not mix with the standard 565 hp GT-R, prior
 * NISMO model years, GT-R50, GT3, or any tuner/widebody variant.
 */

export const heroStats = [
  { value: "600", label: "HP @ 6,800 RPM" },
  { value: "481", label: "LB-FT / 652 NM" },
  { value: "54:46", label: "WEIGHT BALANCE" },
] as const;

export const engineFacts = {
  designation: "VR38DETT",
  type: "Longitudinal 60-degree V6",
  displacement: "3,799 cc / 3.8 litres",
  induction: "Twin turbochargers derived from GT3 racing technology",
  power: "600 hp @ 6,800 rpm",
  torque: "481 lb-ft @ 3,600–5,600 rpm (approx. 652 Nm)",
  redline: "7,100 rpm maximum engine speed",
  valvetrain: "DOHC, 24 valves",
  bore_stroke: "95.5 × 88.4 mm bore × stroke",
  compression: "9.0:1 compression ratio",
  block: "Aluminium block and cylinder heads",
  fuel_system: "Sequential multi-point electronic fuel injection",
  valve_timing: "Continuously Variable Valve Timing Control System",
  fuel: "Premium unleaded recommended",
  exhaust: "Titanium dual exhaust with four outlets",
  assembly: "Hand-assembled by a Nissan Takumi technician",
} as const;

export const drivetrainFacts = {
  layout: "Front-mid-mounted engine",
  transmission_location: "Rear transaxle",
  transmission: "Six-speed dual-clutch sequential transmission",
  drive: "ATTESA E-TS all-wheel drive",
  shift: "Steering-wheel-mounted paddle shifters",
  driveshaft: "Carbon-composite driveshaft",
  rear_diff: "1.5-way mechanical limited-slip differential",
  front_diff: "Limited-slip differential",
  weight_distribution: "54% front / 46% rear",
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

export const aeroFacts = {
  drag_coefficient: "0.26 Cd",
  panels: [
    "Carbon-fibre front bumper",
    "Carbon-fibre bonnet",
    "Carbon-fibre roof",
    "Carbon-fibre side-sill covers",
    "Carbon-fibre trunk lid",
  ],
  features: [
    "Functional rear diffuser",
    "Swan-neck-style carbon-fibre rear wing — nearly 10% larger surface than the previous design",
    "Front fenders with aero blades and vents",
    "NISMO front and rear fascias",
    "Quad titanium exhaust outlets",
    "Four-ring LED taillights",
  ],
} as const;

export const chassisFacts = {
  platform: "Premium-Midship platform",
  construction: "Unibody — steel, carbon fibre and die-cast aluminium, with additional body bonding",
  front_suspension: "Independent aluminium double wishbone",
  rear_suspension: "Independent aluminium multi-link",
  dampers: "NISMO-tuned Bilstein DampTronic mono-tube, three driver-adjustable modes",
  front_springs: "Linear rate",
  rear_springs: "Progressive rate",
  front_bar: "34 mm hollow stabilizer bar",
  rear_bar: "17.3 mm hollow stabilizer bar",
  steering: "Speed-sensitive power rack-and-pinion",
  steering_ratio: "15:1",
  turns_lock_to_lock: "2.4",
  turning_diameter: "37.4 ft",
} as const;

export const suspensionModes = {
  R: "R — firmest body control",
  NORMAL: "Normal — balanced response",
  COMFORT: "Comfort — compliant road control",
} as const;

export const brakeFacts = {
  system: "Brembo carbon-ceramic brakes",
  front: { caliper: "Six-piston monoblock calipers", rotor: "410 × 38 mm ventilated and drilled rotors" },
  rear: { caliper: "Four-piston monoblock calipers", rotor: "390 × 32 mm ventilated and drilled rotors" },
  extra: [
    "Brake cooling guides",
    "Four-channel ABS",
    "Electronic Brake Force Distribution",
    "Brake Assist",
  ],
} as const;

export const wheelFacts = {
  wheels: "Lightweight nine-spoke RAYS forged aluminium, black finish (red accents optional)",
  front_wheel: "20 × 10.0 in",
  rear_wheel: "20 × 10.5 in",
  tyres: "Dunlop SP Sport Maxx GT600 — ultra-high-performance run-flat, NISMO-specific compound",
  front_tyre: "255/40ZRF20",
  rear_tyre: "285/35ZRF20",
} as const;

export const cockpitFacts = {
  capacity: "Four passengers",
  seats: "NISMO-exclusive Recaro sport seats, leather and synthetic suede, red stitching and red seat backs",
  wheel: "Alcantara-wrapped steering wheel with red centre marker",
  trim: "Carbon-fibre interior trim",
  driver_seat: "Eight-way power adjustment, heated",
  passenger_seat: "Four-way power adjustment, heated",
  climate: "Dual-zone automatic climate control",
  tech: [
    "8-inch NissanConnect multi-touch display",
    "Nissan navigation",
    "Apple CarPlay",
    "Bluetooth",
    "Bose 11-speaker audio system with two rear subwoofers",
    "Active Noise Cancellation",
    "Active Sound Enhancement",
    "RearView Monitor",
    "Intelligent Key",
  ],
} as const;

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
  length: { imperial: "184.6 in", metric: "≈4,689 mm" },
  width: { imperial: "74.6 in", metric: "≈1,895 mm" },
  height: { imperial: "53.9 in", metric: "≈1,369 mm" },
  wheelbase: { imperial: "109.4 in", metric: "≈2,779 mm" },
  front_track: { imperial: "63.0 in", metric: "≈1,600 mm" },
  rear_track: { imperial: "63.0 in", metric: "≈1,600 mm" },
  curb_weight: { imperial: "3,867 lb", metric: "≈1,754 kg" },
  weight_distribution: "54% front / 46% rear",
  fuel_capacity: { imperial: "19.5 US gal", metric: "≈73.8 L" },
  cargo_capacity: { imperial: "8.8 cu ft", metric: "≈249 L" },
  passengers: "Four",
} as const;

export const fuelEconomy = {
  city: "16 mpg",
  highway: "22 mpg",
  combined: "18 mpg",
} as const;

export type SpecCategory = "powertrain" | "chassis" | "body" | "cockpit";

export const specRows: { system: string; spec: string; category: SpecCategory }[] = [
  { system: "Engine", spec: "VR38DETT · 3.8-litre twin-turbocharged V6", category: "powertrain" },
  { system: "Output", spec: "600 hp @ 6,800 rpm · 481 lb-ft @ 3,600–5,600 rpm", category: "powertrain" },
  { system: "Transmission", spec: "Six-speed dual-clutch rear transaxle", category: "powertrain" },
  { system: "Drive", spec: "ATTESA E-TS all-wheel drive", category: "powertrain" },
  { system: "Redline", spec: "7,100 rpm maximum engine speed", category: "powertrain" },
  { system: "Suspension", spec: "Double wishbone front · multi-link rear · Bilstein DampTronic", category: "chassis" },
  { system: "Steering", spec: "Speed-sensitive rack-and-pinion · 15:1 ratio", category: "chassis" },
  { system: "Brakes", spec: "Brembo carbon-ceramic · 410 mm front / 390 mm rear", category: "chassis" },
  { system: "Wheels / Tyres", spec: "20 × 10.0 in front / 20 × 10.5 in rear · Dunlop SP Sport Maxx GT600", category: "chassis" },
  { system: "Aerodynamics", spec: "0.26 Cd · carbon-fibre bumper, bonnet, roof, sills, trunk lid", category: "body" },
  { system: "Dimensions", spec: "184.6 × 74.6 × 53.9 in · 109.4 in wheelbase", category: "body" },
  { system: "Weight", spec: "3,867 lb (≈1,754 kg) · 54% front / 46% rear", category: "body" },
  { system: "Fuel economy", spec: "16 city / 22 highway / 18 combined mpg", category: "body" },
  { system: "Seating", spec: "Four passengers · NISMO Recaro sport seats", category: "cockpit" },
  { system: "Technology", spec: "8-in NissanConnect · Apple CarPlay · Bose 11-speaker audio", category: "cockpit" },
];
