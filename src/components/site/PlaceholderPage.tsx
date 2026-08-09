import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
};

export function PlaceholderPage({ eyebrow, title, description, highlights = [] }: Props) {
  return (
    <div>
      <section className="surface-charcoal">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal-foreground/60">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold text-charcoal-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-foreground/70">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">
                Talk to a specialist <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-charcoal-foreground/25 bg-transparent px-7 text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground"
            >
              <Link to="/e-showroom">Explore the e-showroom</Link>
            </Button>
          </div>
        </div>
      </section>

      {highlights.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item} delay={i * 90}>
                <div className="card-elevated h-full rounded-3xl border border-border bg-card p-8">
                  <span className="font-display text-sm font-black text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-base font-semibold text-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
