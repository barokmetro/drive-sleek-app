import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BatteryCharging, Gauge, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import bydHeroAsset from "@/assets/byd-electric-future.jpg.asset.json";
const bydHero = bydHeroAsset.url;

const TITLE = "BYD Ethiopia | MOENCO Ethiopia";
const DESCRIPTION = "BYD Ethiopia brings Blade Battery safety, long range and rapid charging to the Ethiopian market, with MOENCO service backing.";

export const Route = createFileRoute("/byd-ethiopia/")({
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
    <div className="bg-[#061018] text-foreground">
      <section className="relative isolate min-h-[760px] overflow-hidden">
        <img src={bydHero} alt="BYD Seal and Atto 3 electric vehicles in a futuristic plaza" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03131d]/95 via-[#03131d]/65 to-transparent" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-20 pt-36 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">BYD Ethiopia / Build Your Dreams</p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none sm:text-7xl">Electric energy,<br/><span className="text-cyan-300">without compromise.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cyan-50/75">Blade Battery engineering, intelligent e-Platform 3.0 architecture and instant electric response—now supported by MOENCO's trained high-voltage team in Ethiopia.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-none bg-cyan-300 text-[#061018] hover:bg-cyan-200"><Link to="/byd-ethiopia/models">Explore the range <ArrowRight className="ml-2 h-4 w-4"/></Link></Button><Button asChild variant="outline" size="lg" className="rounded-none border-cyan-200/40 bg-transparent text-foreground hover:bg-cyan-300/10"><Link to="/byd-ethiopia/test-drive">Book a test drive</Link></Button></div>
          </div>
        </div>
      </section>
      <section className="border-y border-cyan-300/20 bg-[#071923]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {[{i:BatteryCharging,v:"Blade Battery",l:"Cell-to-pack safety"},{i:Gauge,v:"Up to 570 km",l:"Model-dependent range"},{i:Zap,v:"Fast charge",l:"10–80% capability"},{i:ShieldCheck,v:"6-year cover",l:"Vehicle warranty"}].map((x)=><div key={x.v} className="border-r border-cyan-300/15 p-6 lg:p-8"><x.i className="h-5 w-5 text-cyan-300"/><strong className="mt-4 block text-xl">{x.v}</strong><span className="mt-1 block text-xs text-cyan-50/55">{x.l}</span></div>)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><Reveal><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs uppercase tracking-[.25em] text-cyan-300">Born electric</p><h2 className="mt-4 text-4xl font-black">One platform. Three distinct ways forward.</h2></div><div className="grid gap-4 sm:grid-cols-3">{["ATTO 3 — versatile electric SUV","SEAL — low-slung performance sedan","DOLPHIN — agile urban hatch"].map((x,i)=><article key={x} className="border border-cyan-300/20 bg-cyan-300/5 p-6"><span className="text-4xl font-black text-cyan-300/25">0{i+1}</span><h3 className="mt-12 text-sm font-bold">{x}</h3></article>)}</div></div></Reveal></section>
    </div>
  );
}
