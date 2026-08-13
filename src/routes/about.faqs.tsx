import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const TITLE = "Frequently Asked Questions | MOENCO Ethiopia";
const DESCRIPTION = "Answers to common questions about buying, servicing, parts, warranty and duty-free vehicle purchase.";
const FAQS = [
  ["How do I confirm whether a part is genuine?", "MOENCO genuine parts are matched to your VIN, supplied through the manufacturer network and covered by the applicable parts warranty. Bring the chassis number or registration card to the parts desk."],
  ["How quickly is a service booking confirmed?", "A service advisor reviews online requests during business hours and confirms the branch, arrival time and any likely parts by phone or SMS."],
  ["What does the new-vehicle warranty cover?", "Coverage varies by brand and model. Your warranty booklet states the term, mileage limit and exclusions; MOENCO service advisors can also verify coverage against the VIN."],
  ["Can MOENCO support duty-free vehicle purchases?", "Yes. Our team can explain eligible models, required documentation, quotation validity and the process for diplomatic, NGO and qualifying customer purchases."],
  ["Where can I test a Road Power battery?", "Book a battery test online or visit a participating MOENCO workshop. The team checks resting voltage, cranking performance and charging-system output before recommending replacement."],
];

export const Route = createFileRoute("/about/faqs")({
  head: () => ({ meta: [
    { title: TITLE }, { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE }, { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState(0);
  return (
    <div className="min-h-screen bg-background px-5 pb-24 pt-36 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-silver">Customer desk</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-black sm:text-7xl">Clear answers,<br />before you visit.</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">Practical guidance from MOENCO sales, service and genuine-parts teams.</p>
        <div className="mt-14 border-t border-border">
          {FAQS.map(([question, answer], index) => {
            const expanded = open === index;
            return (
              <article key={question} className="border-b border-border">
                <Button type="button" variant="ghost" onClick={() => setOpen(expanded ? -1 : index)} aria-expanded={expanded} className="h-auto w-full justify-between rounded-none px-0 py-6 text-left font-display text-base font-bold hover:bg-transparent sm:text-xl">
                  <span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-silver transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                </Button>
                <div className={`grid transition-all duration-300 ease-out ${expanded ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden"><p className="max-w-3xl text-sm leading-7 text-muted-foreground">{answer}</p></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}