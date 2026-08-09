import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

export function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index?: number }) {
  return (
    <Link
      to="/vehicles/$slug"
      params={{ slug: vehicle.slug }}
      className="card-elevated group block h-full overflow-hidden rounded-3xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-secondary">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          loading="lazy"
          width={1024}
          height={640}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {typeof index === "number" && (
          <span className="absolute left-4 top-4 font-display text-sm font-black text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <span className="absolute bottom-4 right-4 flex translate-y-2 items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Explore <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{vehicle.brand}</p>
        <h3 className="mt-1 font-display text-xl font-bold text-foreground">{vehicle.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{vehicle.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          View details <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
