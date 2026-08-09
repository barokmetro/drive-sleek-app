import sedan from "@/assets/car-sedan.jpg";
import suv from "@/assets/car-suv.jpg";
import pickup from "@/assets/car-pickup.jpg";
import ev from "@/assets/car-ev.jpg";
import hero from "@/assets/hero-suv.jpg";

export type Vehicle = {
  slug: string;
  name: string;
  brand: string;
  category: "Passenger" | "SUV" | "Commercial" | "Electric" | "Machinery";
  tagline: string;
  image: string;
  intro: string;
  body: string[];
  specs: { label: string; value: string }[];
  features: { title: string; blurb: string }[];
};

export const VEHICLES: Vehicle[] = [
  {
    slug: "land-cruiser",
    name: "Land Cruiser 300",
    brand: "Toyota",
    category: "SUV",
    tagline: "The flagship that never asks for mercy",
    image: hero,
    intro:
      "Seventy years of expedition engineering distilled into one body-on-frame flagship. The Land Cruiser 300 pairs a twin-turbo powertrain with the GA-F platform for effortless torque on gravel, highland passes and city boulevards alike.",
    body: [
      "Built on Toyota's GA-F ladder frame, the 300 Series is lighter and stiffer than the vehicle it replaces, yet keeps the mechanical honesty that made the nameplate a fixture on Ethiopian roads. Multi-Terrain Select and Crawl Control read the surface underneath and meter torque wheel-by-wheel, so mud, sand and loose rock are handled without driver drama.",
      "Inside, the cabin is quiet enough for a four-hour transfer: acoustic glass, leather-appointed seating, ventilated front chairs and a 12.3-inch display with smartphone mirroring. Every unit sold through MOENCO arrives with full factory PDI, genuine parts backing and access to our nationwide service bays.",
    ],
    specs: [
      { label: "Engine", value: "3.5L V6 twin-turbo petrol" },
      { label: "Drivetrain", value: "Full-time 4WD, 10-speed automatic" },
      { label: "Seating", value: "5 or 7 passengers" },
      { label: "Ground clearance", value: "230 mm" },
      { label: "Fuel tank", value: "110 L (dual-tank options)" },
      { label: "Warranty", value: "3 years / 100,000 km" },
    ],
    features: [
      { title: "Multi-Terrain Select", blurb: "Six drive modes tuned for rock, sand, mud and snow." },
      { title: "Kinetic Dynamic Suspension", blurb: "Disconnects the stabiliser bars for maximum articulation." },
      { title: "Toyota Safety Sense", blurb: "Pre-collision braking, radar cruise and lane tracing as standard." },
    ],
  },
  {
    slug: "hilux",
    name: "Hilux Double Cab",
    brand: "Toyota",
    category: "Commercial",
    tagline: "The workhorse Ethiopia trusts",
    image: pickup,
    intro:
      "One tonne of payload, a reinforced ladder frame and a diesel engine engineered for long service intervals. The Hilux is the pickup that keeps construction sites, NGOs and agribusinesses moving.",
    body: [
      "The Hilux Double Cab combines genuine workhorse capability with a cabin comfortable enough for daily commuting. A 2.4L or 2.8L turbo-diesel delivers torque low in the rev range, while rear leaf springs are tuned to carry load without punishing the crew on unmade roads.",
      "MOENCO supports fleet buyers with volume pricing, scheduled maintenance contracts and genuine parts held in stock across 14 branches — so downtime stays measured in hours, not weeks.",
    ],
    specs: [
      { label: "Engine", value: "2.8L turbo-diesel" },
      { label: "Payload", value: "Up to 1,000 kg" },
      { label: "Towing", value: "3,500 kg braked" },
      { label: "Drivetrain", value: "4x2 / part-time 4WD" },
      { label: "Transmission", value: "6-speed manual or automatic" },
      { label: "Warranty", value: "3 years / 100,000 km" },
    ],
    features: [
      { title: "Fleet-ready servicing", blurb: "Fixed-price maintenance plans across all 14 branches." },
      { title: "Rear differential lock", blurb: "Keeps traction when one wheel loses grip entirely." },
      { title: "Reinforced chassis", blurb: "Tuned for corrugated gravel and heavy site duty." },
    ],
  },
  {
    slug: "rav4",
    name: "RAV4 Hybrid",
    brand: "Toyota",
    category: "SUV",
    tagline: "Self-charging efficiency, zero compromise",
    image: suv,
    intro:
      "A self-charging hybrid SUV that recovers energy every time you slow down. No plug, no range anxiety — just markedly lower fuel bills on Addis traffic.",
    body: [
      "The RAV4 Hybrid pairs a 2.5L Atkinson-cycle petrol engine with electric motors that fill the torque gaps instantly. In stop-start city driving the vehicle spends a large share of its time on electric power alone, which is where the fuel savings compound.",
      "The TNGA-K platform lowers the centre of gravity for a composed, car-like drive, while 580 litres of luggage space and a flexible rear bench keep it practical for family and business use.",
    ],
    specs: [
      { label: "Powertrain", value: "2.5L petrol hybrid (HEV)" },
      { label: "System output", value: "163 kW / 218 hp" },
      { label: "Drivetrain", value: "FWD or electronic AWD-i" },
      { label: "Boot space", value: "580 L" },
      { label: "Battery", value: "Self-charging, no plug required" },
      { label: "Warranty", value: "3 years vehicle / 8 years hybrid battery" },
    ],
    features: [
      { title: "Regenerative braking", blurb: "Every deceleration tops the hybrid battery back up." },
      { title: "EV mode in traffic", blurb: "Silent, zero-emission running at low city speeds." },
      { title: "AWD-i", blurb: "A dedicated rear motor adds traction only when needed." },
    ],
  },
  {
    slug: "corolla",
    name: "Corolla",
    brand: "Toyota",
    category: "Passenger",
    tagline: "The world's best-selling sedan",
    image: sedan,
    intro:
      "Refined, frugal and famously durable — the Corolla remains the default answer for buyers who want a sedan that simply works, year after year.",
    body: [
      "Low running costs, widely available genuine parts and a resale value that holds firm make the Corolla the most sensible sedan on the Ethiopian market. The current generation adds a stiffer platform, quieter cabin and a full suite of driver-assist systems.",
      "Available in petrol and hybrid guise, it is equally at home as a private car, an executive pool vehicle or a fleet unit.",
    ],
    specs: [
      { label: "Engine", value: "1.6L petrol / 1.8L hybrid" },
      { label: "Transmission", value: "CVT" },
      { label: "Seating", value: "5 passengers" },
      { label: "Boot space", value: "471 L" },
      { label: "Service interval", value: "10,000 km" },
      { label: "Warranty", value: "3 years / 100,000 km" },
    ],
    features: [
      { title: "Low cost of ownership", blurb: "Parts availability and service pricing built around fleets." },
      { title: "Toyota Safety Sense", blurb: "Adaptive cruise, lane keeping and autonomous braking." },
      { title: "Hybrid option", blurb: "Meaningful fuel savings for high-mileage city use." },
    ],
  },
  {
    slug: "atto-3",
    name: "BYD Atto 3",
    brand: "BYD",
    category: "Electric",
    tagline: "Electric mobility, engineered end to end",
    image: ev,
    intro:
      "BYD builds its own Blade batteries, motors and power electronics. The Atto 3 is the result: a compact electric crossover with real-world range and fast charging support.",
    body: [
      "The Blade battery uses lithium iron phosphate cells arranged in a structural pack — safer under impact, tolerant of daily full charges, and rated for a long service life. Combined with a 150 kW front motor, the Atto 3 delivers immediate torque and near-silent progress.",
      "MOENCO supports BYD ownership in Ethiopia with home charger installation, workshop technicians trained on high-voltage systems, and genuine BYD parts held locally.",
    ],
    specs: [
      { label: "Battery", value: "60.5 kWh Blade LFP" },
      { label: "Range", value: "Up to 420 km (NEDC)" },
      { label: "Motor", value: "150 kW front-mounted" },
      { label: "DC charging", value: "0–80% in approx. 45 minutes" },
      { label: "AC charging", value: "7 kW home wallbox" },
      { label: "Warranty", value: "8 years / 160,000 km battery" },
    ],
    features: [
      { title: "Blade battery safety", blurb: "Structural LFP pack with exceptional thermal stability." },
      { title: "Vehicle-to-load", blurb: "Power tools or appliances directly from the car." },
      { title: "Home charging setup", blurb: "MOENCO arranges survey and wallbox installation." },
    ],
  },
  {
    slug: "dzire",
    name: "Suzuki Dzire",
    brand: "Suzuki",
    category: "Passenger",
    tagline: "Compact value, serious economy",
    image: sedan,
    intro:
      "A light, efficient compact sedan built for congested streets and tight budgets — with a boot big enough to justify itself.",
    body: [
      "Suzuki's HEARTECT platform keeps kerb weight low, which is exactly why the Dzire returns the fuel figures it does. Tight turning circle, light steering and compact dimensions make it genuinely easy in dense city traffic.",
      "For ride-hailing operators and first-time buyers, the combination of purchase price, fuel economy and parts cost is difficult to beat.",
    ],
    specs: [
      { label: "Engine", value: "1.2L petrol" },
      { label: "Transmission", value: "5-speed manual or AMT" },
      { label: "Seating", value: "5 passengers" },
      { label: "Boot space", value: "378 L" },
      { label: "Turning radius", value: "4.8 m" },
      { label: "Warranty", value: "3 years / 100,000 km" },
    ],
    features: [
      { title: "Class-leading economy", blurb: "Lightweight platform keeps consumption low." },
      { title: "City-sized footprint", blurb: "Easy parking and manoeuvring in dense traffic." },
      { title: "Affordable servicing", blurb: "Low parts cost and simple maintenance schedule." },
    ],
  },
];

export const vehicleBySlug = (slug: string) => VEHICLES.find((v) => v.slug === slug);
