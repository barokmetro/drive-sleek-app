import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { VehicleCard } from "@/components/site/VehicleCard";
import { VEHICLES, vehicleBySlug, type Vehicle } from "@/data/vehicles";

export const Route = createFileRoute("/vehicles/$slug")({
  loader: ({ params }) => {
    const vehicle = vehicleBySlug(params.slug);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Vehicle unavailable | MOENCO Ethiopia" }, { name: "robots", content: "noindex" }],
      };
    }
    const { vehicle } = loaderData;
    const title = `${vehicle.brand} ${vehicle.name} | MOENCO Ethiopia`;
    const description = vehicle.intro.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: VehicleDetail,
});

function VehicleDetail() {
  const { vehicle } = Route.useLoaderData() as { vehicle: Vehicle };
  const related = VEHICLES.filter((v) => v.slug !== vehicle.slug).slice(0, 3);

  return (
    <div>
      <section className="relative min-h-[72vh] w-full overflow-hidden bg-charcoal">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/20" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-36 lg:px-8">
          <Link
            to="/e-showroom"
            className="mb-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-foreground/70 hover:text-charcoal-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to showroom
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{vehicle.brand}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-black leading-[1.03] text-charcoal-foreground sm:text-6xl">
            {vehicle.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-foreground/75 sm:text-lg">
            {vehicle.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">
                Request a quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-charcoal-foreground/30 bg-transparent px-7 text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground"
            >
              <Link to="/service/booking">Book a test drive</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Overview</p>
              <p className="mt-5 text-lg leading-relaxed text-foreground">{vehicle.intro}</p>
              {vehicle.body.map((p) => (
                <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-elevated rounded-3xl border border-border bg-card p-8">
              <h2 className="font-display text-lg font-black text-foreground">Key specifications</h2>
              <dl className="mt-6 divide-y divide-border">
                {vehicle.specs.map((s) => (
                  <div key={s.label} className="flex items-start justify-between gap-6 py-3">
                    <dt className="text-sm text-muted-foreground">{s.label}</dt>
                    <dd className="text-right text-sm font-semibold text-foreground">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {vehicle.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="card-elevated h-full rounded-3xl border border-border bg-card p-8">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl">You may also consider</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((v, i) => (
              <Reveal key={v.slug} delay={i * 80}>
                <VehicleCard vehicle={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
