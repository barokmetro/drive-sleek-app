import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import ev from "@/assets/car-ev.jpg";
import suv from "@/assets/car-suv.jpg";
import service from "@/assets/service-bay.jpg";

const POSTS = [
  {
    title: "BYD electric line-up arrives in Addis Ababa",
    date: "12 Jul 2026",
    category: "Launch",
    image: ev,
  },
  {
    title: "New hybrid SUV range opens for pre-order",
    date: "28 Jun 2026",
    category: "Vehicles",
    image: suv,
  },
  {
    title: "Express maintenance bays expand to six branches",
    date: "09 Jun 2026",
    category: "Service",
    image: service,
  },
];

export function News() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          Latest News
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-black text-foreground sm:text-5xl">
          What's moving at MOENCO
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {POSTS.map((post, i) => (
          <Reveal key={post.title} delay={i * 80}>
            <article className="card-elevated group h-full overflow-hidden rounded-3xl border border-border bg-card">
              <div className="aspect-16/10 overflow-hidden bg-secondary">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {post.category} · {post.date}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  Read story <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
