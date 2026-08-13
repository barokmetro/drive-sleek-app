import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HardHat, Settings, Shield, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import machineryHeroAsset from "@/assets/machinery-heavy-duty.jpg.asset.json";
const machineryHero = machineryHeroAsset.url;

const TITLE = "Machineries | MOENCO Ethiopia";
const DESCRIPTION = "Forklifts, generators and construction equipment supplied, serviced and supported by MOENCO's industrial division.";

export const Route = createFileRoute("/machineries")({
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
    <div className="bg-[#15130f] text-foreground">
      <section className="relative min-h-[720px] overflow-hidden border-b-8 border-amber-400">
        <img src={machineryHero} alt="Yellow tracked excavator and agricultural tractor at an Ethiopian earthworks site" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" / loading="lazy">
        <div className="absolute inset-0 bg-gradient-to-r from-[#100f0b]/95 via-[#100f0b]/60 to-transparent" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pt-24 lg:px-8"><div className="max-w-2xl"><span className="inline-flex items-center gap-2 border border-amber-400 bg-[#17130a]/70 px-3 py-2 text-xs font-bold uppercase tracking-[.25em] text-amber-300"><HardHat className="h-4 w-4"/> Industrial division</span><h1 className="mt-6 text-5xl font-black uppercase leading-[.9] sm:text-7xl">Built to move<br/><span className="text-amber-400">Ethiopia.</span></h1><p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/70">Excavators, tractors, material-handling equipment and power systems selected for altitude, dust and demanding duty cycles—backed by field technicians and genuine parts.</p><Button asChild size="lg" className="mt-9 rounded-none bg-amber-400 text-[#15130f] hover:bg-amber-300"><Link to="/machinery/products">View equipment <ArrowRight className="ml-2 h-4 w-4"/></Link></Button></div></div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-px bg-amber-400/20 md:grid-cols-3">{[{n:"01",t:"Earthmoving",d:"Tracked excavators and loaders configured for quarry, road and civil works."},{n:"02",t:"Agriculture",d:"High-traction tractors and implements built around productive field hours."},{n:"03",t:"Material handling",d:"Forklifts, warehouse equipment and fleet support for safer throughput."}].map(x=><article key={x.n} className="bg-[#1c1912] p-8"><span className="font-mono text-sm text-amber-400">{x.n}</span><h2 className="mt-16 text-2xl font-black uppercase">{x.t}</h2><p className="mt-3 text-sm leading-relaxed text-foreground/60">{x.d}</p></article>)}</div></section>
      <section className="border-y border-amber-400/20 bg-[#0f0e0b]"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-3 lg:px-8">{[{i:Timer,t:"Uptime planning",d:"Preventive schedules built around machine hours."},{i:Settings,t:"Field service",d:"Mobile diagnosis and repairs at your worksite."},{i:Shield,t:"Genuine support",d:"Serial-number matched parts and documented warranty."}].map(x=><div key={x.t} className="flex gap-4"><x.i className="h-6 w-6 shrink-0 text-amber-400"/><div><h3 className="font-bold">{x.t}</h3><p className="mt-1 text-sm text-foreground/55">{x.d}</p></div></div>)}</div></section>
    </div>
  );
}
