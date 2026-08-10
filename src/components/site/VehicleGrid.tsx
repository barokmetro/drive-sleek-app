import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { VehicleCard } from "./VehicleCard";
import { VEHICLES } from "@/data/vehicles";

const FILTERS = ["All", "Passenger", "SUV", "Commercial", "Electric"] as const;
const SORTS = ["Default sorting", "Sort by name", "Sort by brand"] as const;

export function VehicleGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Default sorting");

  const shown = useMemo(() => {
    const list = VEHICLES.filter((v) => filter === "All" || v.category === filter);
    if (sort === "Sort by name") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "Sort by brand") return [...list].sort((a, b) => a.brand.localeCompare(b.brand));
    return list;
  }, [filter, sort]);

  return (
    <section
      id="vehicles"
      className="grid-lines border-y border-border bg-[oklch(0.125_0.002_285)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-silver">
            Vehicle Catalogue
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-black text-chrome sm:text-5xl">
            The showroom, in obsidian
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    filter === f
                      ? "border-silver/60 bg-card text-foreground shadow-[0_0_24px_-8px_rgba(192,192,192,0.5)]"
                      : "border-border bg-transparent text-muted-foreground hover:border-silver/40 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">
                Showing 1–{shown.length} of 31 results
              </span>
              <select
                aria-label="Sort vehicles"
                value={sort}
                onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs text-foreground outline-none transition-colors hover:border-silver/40"
              >
                {SORTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((v, i) => (
            <Reveal key={v.slug} delay={i * 70}>
              <VehicleCard vehicle={v} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
