import { useState } from "react";
import { Reveal } from "./Reveal";
import { VehicleCard } from "./VehicleCard";
import { VEHICLES } from "@/data/vehicles";

const FILTERS = ["All", "Passenger", "SUV", "Commercial", "Electric"] as const;

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
          <Reveal key={v.slug} delay={i * 70}>
            <VehicleCard vehicle={v} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
