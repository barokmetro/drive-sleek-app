import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

export function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index?: number }) {
  const quickSpecs = vehicle.specs.slice(0, 3);
  // Studio cut-outs (PNG) sit inside the frame; photography fills it.
  const cutout = vehicle.image.includes(".png");

  return (
    <Link
      to="/vehicles/$slug"
      params={{ slug: vehicle.slug }}
      className="card-elevated group relative block h-full overflow-hidden rounded-3xl border border-border bg-card"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-[oklch(0.175_0.003_285)]">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          loading="lazy"
          width={1024}
          height={640}
          className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
            cutout ? "object-contain p-4" : "object-cover opacity-90"
          }`}
        />
        {typeof index === "number" && (
          <span className="absolute left-4 top-4 font-display text-sm font-black text-silver/70">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        {/* Hover-reveal spec sheet */}
        <div className="absolute inset-0 flex translate-y-3 flex-col justify-end bg-gradient-to-t from-[oklch(0.12_0.002_285)] via-[oklch(0.12_0.002_285)]/80 to-transparent p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <dl className="space-y-1.5">
            {quickSpecs.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-4 text-xs">
                <dt className="uppercase tracking-[0.14em] text-muted-foreground">{s.label}</dt>
                <dd className="text-right font-medium text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-border p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{vehicle.brand}</p>
        <h3 className="mt-1 font-display text-xl font-bold text-foreground">{vehicle.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{vehicle.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-silver">
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
