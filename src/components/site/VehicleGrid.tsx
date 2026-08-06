import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import sedan from "@/assets/car-sedan.jpg";
import suv from "@/assets/car-suv.jpg";
import pickup from "@/assets/car-pickup.jpg";
import ev from "@/assets/car-ev.jpg";
import hero from "@/assets/hero-suv.jpg";

const FILTERS = ["All", "Passenger", "SUV", "Commercial", "Electric"] as const;

const VEHICLES = [
  { name: "Land Cruiser 300", brand: "Toyota", category: "SUV", image: hero, tag: "Flagship" },
  { name: "Corolla", brand: "Toyota", category: "Passenger", image: sedan, tag: "Best seller" },
  { name: "Atto 3", brand: "BYD", category: "Electric", image: ev, tag: "All-electric" },
  { name: "Hilux Double Cab", brand: "Toyota", category: "Commercial", image: pickup, tag: "Workhorse" },
  { name: "RAV4", brand: "Toyota", category: "SUV", image: suv, tag: "Hybrid" },
  { name: "Dzire", brand: "Suzuki", category: "Passenger", image: sedan, tag: "Value" },
];

export function VehicleGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const shown = VEHICLES.filter((v) => filter === "All" || v.category === filter);

  return (
    <section id="vehicles" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Featured Vehicles
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-black text-foreground sm:text-5xl">
              The showroom, reimagined
            </h2>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-charcoal text-charcoal-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((v, i) => (
          <Reveal key={v.name + v.brand} delay={i * 70}>
            <article className="card-elevated group h-full overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative aspect-4/3 overflow-hidden bg-secondary">
                <img
                  src={v.image}
                  alt={`${v.brand} ${v.name}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur">
                  {v.tag}
                </span>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-6">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {v.brand}
                  </p>
                  <h3 className="truncate font-display text-xl font-bold text-foreground">
                    {v.name}
                  </h3>
                </div>
                <Button variant="ghost" size="sm" className="shrink-0 rounded-full text-primary hover:text-primary">
                  View Details <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
