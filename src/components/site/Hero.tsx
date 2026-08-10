import { Link } from "@tanstack/react-router";
import { Search, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-suv.jpg";

const STATS = [
  { value: "60+", label: "Years in Ethiopia" },
  { value: "14", label: "Branches nationwide" },
  { value: "4", label: "Global brands" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden bg-obsidian">
      <img
        src={heroImage}
        alt="Land Cruiser 300 flagship SUV in a modern showroom"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.11_0.002_285)] via-[oklch(0.11_0.002_285)]/85 to-[oklch(0.11_0.002_285)]/35" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[oklch(0.115_0.002_285)] to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-32 pb-16 lg:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-silver/80">
          Toyota · Suzuki · BYD · Machinery
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-black leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
          Engineered for
          <span className="block text-chrome">the road ahead.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ethiopia's authorised distributor for the world's most trusted vehicles — backed by
          genuine parts and factory-certified service.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="glass-panel mt-10 grid w-full max-w-2xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl p-2 sm:rounded-full"
        >
          <div className="flex min-w-0 items-center gap-3 px-4">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              aria-label="Find your vehicle"
              placeholder="Find your vehicle — model, body type or brand"
              className="w-full min-w-0 bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="silver-glow rounded-full bg-gradient-to-b from-[#e8e8ea] to-[#a9a9ae] px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-silver-foreground"
          >
            Search
          </button>
        </form>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/e-showroom"
            className="silver-glow inline-flex items-center rounded-full bg-gradient-to-b from-[#e8e8ea] to-[#a9a9ae] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-silver-foreground"
          >
            Explore Showroom <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            to="/service/book"
            className="silver-glow inline-flex items-center rounded-full border border-silver/35 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-foreground"
          >
            Book a Service
          </Link>
        </div>

        <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-black text-chrome">{s.value}</dt>
              <dd className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
