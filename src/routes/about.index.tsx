import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, Globe2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const TITLE = "About MOENCO | MOENCO Ethiopia";
const DESCRIPTION = "Founded in 1959, MOENCO is an Inchcape PLC company representing leading automotive and machinery brands across Ethiopia.";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-card pt-32"><div className="mx-auto max-w-7xl px-5 pb-20 lg:px-8"><p className="text-xs font-bold uppercase tracking-[.3em] text-silver">Our company</p><div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_.8fr]"><h1 className="text-5xl font-black leading-[.95] sm:text-7xl">Ethiopian roots.<br/><span className="text-chrome">Global standards.</span></h1><div><p className="text-lg leading-relaxed text-muted-foreground">MOENCO's story began in <strong className="text-foreground">1959</strong>. Today, as an <strong className="text-foreground">Inchcape PLC company</strong>, we connect Ethiopian drivers and businesses with globally respected vehicles, machinery, parts and aftersales expertise.</p><Button asChild variant="outline" className="mt-7 rounded-full"><Link to="/about/strategy">Our strategy <ArrowUpRight className="ml-2 h-4 w-4"/></Link></Button></div></div></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><span className="font-mono text-7xl font-black text-silver/20">1959</span><h2 className="mt-4 text-3xl font-black">A long-term commitment to mobility</h2></div><ol className="border-l border-silver/30">{[["1959","MOENCO begins operations in Ethiopia, establishing a foundation in dependable mobility."],["1970s–90s","The business expands sales, parts and technical capability to serve a growing national fleet."],["Today","As part of Inchcape PLC, MOENCO combines local knowledge with global distribution and retail standards."]].map(x=><li key={x[0]} className="grid gap-3 border-b border-border py-8 pl-8 sm:grid-cols-[140px_1fr]"><strong className="text-silver">{x[0]}</strong><p className="text-sm leading-relaxed text-muted-foreground">{x[1]}</p></li>)}</ol></div></section>
      <section className="bg-card"><div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-3">{[{i:Building2,v:"65+ years",l:"Serving Ethiopia"},{i:MapPin,v:"National network",l:"Sales, service and parts"},{i:Globe2,v:"Inchcape PLC",l:"Global distribution expertise"}].map(x=><div key={x.v} className="bg-card p-10"><x.i className="h-6 w-6 text-silver"/><strong className="mt-8 block text-2xl">{x.v}</strong><span className="mt-2 block text-sm text-muted-foreground">{x.l}</span></div>)}</div></section>
    </div>
  );
}
