import { ShieldCheck, Wrench, Timer, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import serviceImage from "@/assets/service-bay.jpg";

const PILLARS = [
  { icon: ShieldCheck, title: "Genuine Parts", text: "Factory-spec components with warranty coverage." },
  { icon: Wrench, title: "Certified Technicians", text: "Trained to global manufacturer standards." },
  { icon: Timer, title: "Express Maintenance", text: "Routine servicing completed in under 90 minutes." },
  { icon: PackageCheck, title: "Nationwide Stock", text: "Parts availability across 14 branches." },
];

export function ServiceParts() {
  return (
    <section id="service" className="surface-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Genuine Parts &amp; Service
              </p>
              <h2 className="mt-3 font-display text-4xl font-black text-charcoal-foreground sm:text-5xl">
                Ownership without friction
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-charcoal-foreground/70">
                Book a slot, track the work, collect the keys. Every service is carried out with
                genuine parts and logged to your vehicle's digital record.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="rounded-2xl border border-charcoal-foreground/12 bg-charcoal-foreground/5 p-5">
                    <p.icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-display text-base font-bold text-charcoal-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-charcoal-foreground/65">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-charcoal-foreground/12">
              <img
                src={serviceImage}
                alt="Certified technician performing a digital vehicle inspection"
                loading="lazy"
                width={1280}
                height={960}
                className="h-72 w-full object-cover sm:h-96"
              />
              <form
                onSubmit={(e) => e.preventDefault()}
                className="glass-panel space-y-4 p-6 sm:p-8"
              >
                <h3 className="font-display text-xl font-bold text-charcoal-foreground">
                  Book a Service
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    aria-label="Vehicle model"
                    placeholder="Vehicle model"
                    className="w-full min-w-0 rounded-xl border border-charcoal-foreground/20 bg-transparent px-4 py-3 text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    aria-label="Preferred date"
                    type="date"
                    className="w-full min-w-0 rounded-xl border border-charcoal-foreground/20 bg-transparent px-4 py-3 text-sm text-charcoal-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  aria-label="Phone number"
                  placeholder="Phone number"
                  className="w-full min-w-0 rounded-xl border border-charcoal-foreground/20 bg-transparent px-4 py-3 text-sm text-charcoal-foreground placeholder:text-charcoal-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" size="lg" className="w-full rounded-xl">
                  Reserve my slot
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
