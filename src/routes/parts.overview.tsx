import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, PackageCheck, Truck, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

const TITLE = "Parts Overview — Genuine Catalogue | MOENCO Ethiopia";
const DESCRIPTION =
  "Browse MOENCO's genuine parts catalogue: brakes, oil filters, engine components, suspension, electrical and body panels for Toyota, Suzuki and BYD.";

const BANNER =
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80";

type Group = "Engine" | "Braking" | "Filtration" | "Electrical" | "Chassis" | "Body";

type Item = {
  name: string;
  group: Group;
  blurb: string;
  img: string;
  alt: string;
};

const CATALOGUE: Item[] = [
  {
    name: "Brake pads & discs",
    group: "Braking",
    blurb:
      "Genuine friction material matched to your model's rotor hardness — consistent pedal feel on the Entoto descent and no glazing under load.",
    img: "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=900&q=80",
    alt: "Brake disc and caliper on a workshop bench",
  },
  {
    name: "Oil filters",
    group: "Filtration",
    blurb:
      "Correct bypass pressure and full-flow media. Fitted with a fresh drain washer at every MOENCO service to protect turbo and bearing surfaces.",
    img: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?auto=format&fit=crop&w=900&q=80",
    alt: "Row of automotive oil filters",
  },
  {
    name: "Engine components",
    group: "Engine",
    blurb:
      "Timing kits, water pumps, gaskets and pistons supplied to original tolerance, with torque sequences applied by factory-trained technicians.",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
    alt: "Car engine bay with components visible",
  },
  {
    name: "Air & cabin filters",
    group: "Filtration",
    blurb:
      "Dust-rated elements for Ethiopian conditions. We recommend inspection every 5,000 km on unsealed roads rather than the standard interval.",
    img: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=900&q=80",
    alt: "Mechanic inspecting an air filter",
  },
  {
    name: "Batteries & charging",
    group: "Electrical",
    blurb:
      "Road Power maintenance-free batteries, alternators and starters, tested on site and registered to your VIN for warranty.",
    img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=900&q=80",
    alt: "Car battery being connected in an engine bay",
  },
  {
    name: "Suspension & steering",
    group: "Chassis",
    blurb:
      "Shock absorbers, bushings, ball joints and rack ends specified for load-carrying Hilux and Land Cruiser duty cycles.",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
    alt: "Vehicle raised on a lift showing suspension components",
  },
  {
    name: "Lighting & sensors",
    group: "Electrical",
    blurb:
      "Genuine headlamp units, bulbs, oxygen and ABS sensors that pair correctly with the vehicle's ECU without fault codes.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    alt: "Close-up of a modern car headlamp",
  },
  {
    name: "Body panels & glass",
    group: "Body",
    blurb:
      "Bumpers, fenders, mirrors and screens supplied through our Body & Paint centre so repairs keep factory corrosion protection.",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    alt: "Side profile of a vehicle body panel",
  },
  {
    name: "Clutch & driveline",
    group: "Engine",
    blurb:
      "Clutch kits, propshaft joints and differential parts for 4x4 fleets working outside Addis, held in central warehouse stock.",
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80",
    alt: "Auto mechanic working under a vehicle",
  },
];

const GROUPS: (Group | "All parts")[] = [
  "All parts",
  "Engine",
  "Braking",
  "Filtration",
  "Electrical",
  "Chassis",
  "Body",
];

const ASSURANCES = [
  { icon: BadgeCheck, label: "100% genuine, warranty backed" },
  { icon: PackageCheck, label: "VIN-accurate part matching" },
  { icon: Truck, label: "Nationwide dealer distribution" },
];

export const Route = createFileRoute("/parts/overview")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BANNER },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: OverviewPage,
});

function OverviewPage() {
  const [group, setGroup] = useState<Group | "All parts">("All parts");
  const [query, setQuery] = useState("");

  const items = CATALOGUE.filter(
    (i) =>
      (group === "All parts" || i.group === group) &&
      (query.trim() === "" || i.name.toLowerCase().includes(query.trim().toLowerCase())),
  );

  return (
    <div>
      {/* Compact banner — deliberately different from the battery page hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <img
          src={BANNER}
          alt="Auto mechanic working in a service workshop"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-32 lg:px-8 lg:pb-16 lg:pt-40">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-silver">
            Parts / Overview
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            The genuine parts catalogue
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Over 40,000 line items held in our Addis Ababa central warehouse for Toyota, Suzuki and
            BYD. Every component is sourced through the manufacturer supply chain, barcoded on
            arrival and released against your chassis number — never a look-alike.
          </p>
          <div className="mt-7 flex flex-wrap gap-6">
            {ASSURANCES.map((a) => (
              <span key={a.label} className="flex items-center gap-2 text-xs text-foreground/80">
                <a.icon className="h-4 w-4 text-silver" />
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Side filter + catalog grid */}
      <section className="mx-auto max-w-7xl gap-10 px-5 py-14 lg:flex lg:px-8 lg:py-20">
        <aside className="lg:w-64 lg:shrink-0">
          <div className="sticky top-28 rounded-2xl border border-border bg-card p-5">
            <label className="flex items-center gap-2 rounded-full border border-border px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search catalogue"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Categories
            </p>
            <ul className="mt-3 space-y-1">
              {GROUPS.map((g) => (
                <li key={g}>
                  <button
                    type="button"
                    onClick={() => setGroup(g)}
                    className={`w-full rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                      group === g
                        ? "border border-silver/40 bg-background font-semibold text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {g}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-sm text-muted-foreground">
                Cannot find a part number? Our desk will trace it from your VIN.
              </p>
              <Button asChild className="mt-4 w-full rounded-full">
                <Link to="/parts/requisition">Raise a requisition</Link>
              </Button>
            </div>
          </div>
        </aside>

        <div className="mt-10 flex-1 lg:mt-0">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Showing {items.length} of {CATALOGUE.length} categories
          </p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.name} delay={i * 50}>
                <article className="silver-glow group h-full overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-silver">
                      {item.group}
                    </span>
                    <h2 className="mt-2 font-display text-lg font-bold text-foreground">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.blurb}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          {items.length === 0 && (
            <p className="mt-10 text-sm text-muted-foreground">
              No categories match that search. Try “brake”, “filter” or “engine”.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
