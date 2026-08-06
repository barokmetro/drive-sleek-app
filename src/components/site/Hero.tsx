import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-suv.jpg";

const STATS = [
  { value: "60+", label: "Years in Ethiopia" },
  { value: "14", label: "Branches nationwide" },
  { value: "4", label: "Global brands" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden bg-charcoal">
      <img
        src={heroImage}
        alt="Land Cruiser 300 flagship SUV in a modern showroom"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/90 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-32 pb-16 lg:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-charcoal-foreground/70">
          Toyota · Suzuki · BYD · Machinery
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-black leading-[1.02] text-charcoal-foreground sm:text-6xl lg:text-7xl">
          Engineered for
          <span className="block text-primary">the road ahead.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-foreground/75 sm:text-lg">
          Ethiopia's authorised distributor for the world's most trusted vehicles — backed by
          genuine parts and factory-certified service.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid w-full max-w-2xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl glass-panel p-2 sm:rounded-full"
        >
          <div className="flex min-w-0 items-center gap-3 px-4">
            <Search className="h-4 w-4 shrink-0 text-charcoal-foreground/70" />
            <input
              aria-label="Find your vehicle"
              placeholder="Find your vehicle — model, body type or brand"
              className="w-full min-w-0 bg-transparent py-3 text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/55 focus:outline-none"
            />
          </div>
          <Button type="submit" className="rounded-full px-6" size="lg">
            Search
          </Button>
        </form>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <a href="#vehicles">
              Explore Showroom <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-charcoal-foreground/30 bg-transparent px-7 text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground"
          >
            <a href="#service">Book a Service</a>
          </Button>
        </div>

        <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-charcoal-foreground/15 pt-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-black text-charcoal-foreground">
                {s.value}
              </dt>
              <dd className="text-xs uppercase tracking-[0.14em] text-charcoal-foreground/60">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
