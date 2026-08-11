import { createFileRoute, Link } from "@tanstack/react-router";
import { BatteryCharging, Gauge, ShieldCheck, Wrench, Droplets, Sparkles, ThermometerSun } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

const TITLE = "Road Power Batteries | MOENCO Ethiopia";
const DESCRIPTION =
  "Road Power maintenance-free batteries supplied and fitted by MOENCO. Free health testing, correct CCA matching, 12-24 month warranty and expert maintenance advice.";

const HERO_IMG =
  "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=1400&q=80";
const HOOD_IMG =
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80";
const TERMINAL_IMG =
  "https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e2f?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/parts/battery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMG },
    ],
  }),
  component: BatteryPage,
});

const SPECS: { label: string; value: string }[] = [
  { label: "Range", value: "NS40 – N200 (12V / 24V)" },
  { label: "Capacity", value: "35Ah – 200Ah" },
  { label: "Cold cranking", value: "300 – 1,150 CCA" },
  { label: "Technology", value: "Calcium maintenance-free" },
  { label: "Warranty", value: "12 – 24 months, VIN registered" },
  { label: "Fitment time", value: "Under 20 minutes, while you wait" },
];

const TIPS: { icon: typeof Sparkles; title: string; body: string }[] = [
  {
    icon: Sparkles,
    title: "Keep the terminals clean",
    body:
      "White or blue powder around the posts is sulphation and it strangles current. Disconnect negative first, scrub with a stiff brush and a warm solution of bicarbonate of soda, dry fully, then refit.",
  },
  {
    icon: Droplets,
    title: "Remove and prevent rust",
    body:
      "Wipe corrosion from the clamps and tray, then coat the posts with a thin film of petroleum jelly or terminal grease. Never paint over a vent or block the gas escape channels.",
  },
  {
    icon: Wrench,
    title: "Check the hold-down clamp",
    body:
      "Addis roads vibrate a loose battery to death. The bracket should be firm enough that the case cannot rock by hand, but not so tight that the casing flexes.",
  },
  {
    icon: ThermometerSun,
    title: "Mind short trips and heat",
    body:
      "Repeated 10-minute drives never return the charge used at start-up. Once a fortnight give the vehicle a 30-minute run, and park in shade where you can — heat is harder on a battery than cold.",
  },
  {
    icon: Gauge,
    title: "Test before you are stranded",
    body:
      "Slow cranking, dim headlights at idle or a dashboard battery lamp mean under 12.4V at rest. Any MOENCO branch will load-test your battery and charging system free of charge.",
  },
  {
    icon: ShieldCheck,
    title: "Match the specification",
    body:
      "Fitting a smaller CCA rating than the factory figure shortens alternator life. Bring your VIN and we will supply the exact Road Power equivalent for your Toyota, Suzuki or BYD.",
  },
];

function BatteryPage() {
  return (
    <div>
      {/* Technical single-product showcase */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-40">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-silver">
              <BatteryCharging className="h-4 w-4" /> Parts / Battery
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Road Power Batteries
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Road Power is the battery MOENCO fits to customer vehicles across Ethiopia — a sealed,
              maintenance-free calcium unit built for high ambient temperatures, dusty air and the
              stop-start reality of Addis Ababa traffic. Every unit is date-stamped at the warehouse,
              charge-checked before fitment and registered against your chassis number for warranty.
            </p>
            <dl className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {SPECS.map((s) => (
                <div key={s.label} className="border-l border-silver/30 pl-4">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/parts/requisition">Request a battery quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-silver/40 bg-transparent px-7 text-foreground hover:bg-card"
              >
                <Link to="/service/book">Book a free battery test</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:pl-6">
            <div className="silver-glow overflow-hidden rounded-3xl border border-silver/25 bg-card">
              <img
                src={HERO_IMG}
                alt="Technician handling a 12V car battery in an engine bay"
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[440px]"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <img
                src={HOOD_IMG}
                alt="Under the hood of a modern vehicle showing the battery and engine components"
                loading="lazy"
                className="h-32 w-full rounded-2xl border border-border object-cover sm:h-40"
              />
              <img
                src={TERMINAL_IMG}
                alt="Close-up of cleaned battery terminals and clamps"
                loading="lazy"
                className="h-32 w-full rounded-2xl border border-border object-cover sm:h-40"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Maintenance tips */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-silver">
            Ownership guide
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Six habits that add a year to your battery
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TIPS.map((tip, i) => (
            <Reveal key={tip.title} delay={i * 60}>
              <article className="silver-glow h-full rounded-2xl border border-border bg-card p-6">
                <tip.icon className="h-5 w-5 text-silver" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Warranty strip */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-foreground">
              Flat battery? We come to you in Addis Ababa.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Call the MOENCO parts desk on +251 11 550 3366 and our mobile fitment team will test,
              replace and register a Road Power battery at your home or office, with the old unit
              collected for safe lead recycling.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full px-7">
            <Link to="/contact">Contact the parts desk</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
