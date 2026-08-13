import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Check, ChevronLeft, ChevronRight, MapPin, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import workshopAsset from "@/assets/service-workshop.jpg.asset.json";

const TITLE = "Book a Service | MOENCO Ethiopia";
const DESCRIPTION = "Book a MOENCO service appointment in four simple steps: vehicle, workshop, date and contact details.";
const STEPS = ["Vehicle", "Workshop", "Schedule", "Confirm"];
const VEHICLES = ["Toyota Land Cruiser", "Toyota Hilux", "Toyota Corolla / Cross", "Suzuki", "BYD electric vehicle", "Other model"];
const BRANCHES = ["MOENCO Head Office — Addis Ababa", "Kaliti Service Centre", "Bole Service Reception"];

export const Route = createFileRoute("/service/booking")({
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
  component: BookingPage,
});

function BookingPage() {
  const [step, setStep] = useState(0);
  const [vehicle, setVehicle] = useState("");
  const [branch, setBranch] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="min-h-screen bg-background pt-24 text-foreground">
      <div className="grid min-h-[760px] lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="relative hidden overflow-hidden border-r border-border lg:block">
          <img src={workshopAsset.url} alt="MOENCO technician inspecting a vehicle in a modern service workshop" width={1600} height={1000} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-x-12 bottom-12">
            <Wrench className="h-7 w-7 text-silver" />
            <h1 className="mt-5 font-display text-4xl font-black">Your vehicle.<br />Factory-standard care.</h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/70">Tell us what you drive and when you prefer to visit. Our advisors will confirm the bay and prepare likely parts before arrival.</p>
          </div>
        </aside>

        <main className="bg-charcoal px-5 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-silver">Online service booking</p>
            <div className="mt-8 grid grid-cols-4 gap-2">
              {STEPS.map((label, index) => (
                <div key={label}>
                  <div className={`h-1 transition-colors ${index <= step ? "bg-silver" : "bg-steel"}`} />
                  <span className={`mt-2 block text-[10px] uppercase ${index === step ? "font-bold text-foreground" : "text-muted-foreground"}`}>{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 min-h-[380px]">
              {step === 0 && (
                <section>
                  <h2 className="font-display text-3xl font-black">What are you bringing in?</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Your model helps us allocate the right technician and tooling.</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {VEHICLES.map((option) => (
                      <Button key={option} type="button" variant="outline" onClick={() => setVehicle(option)} className={`h-auto min-h-16 justify-between rounded-none p-5 text-left ${vehicle === option ? "border-silver bg-background" : "border-border bg-card"}`}>
                        {option}{vehicle === option && <Check className="h-4 w-4 text-silver" />}
                      </Button>
                    ))}
                  </div>
                </section>
              )}
              {step === 1 && (
                <section>
                  <h2 className="font-display text-3xl font-black">Choose your workshop</h2>
                  <div className="mt-8 space-y-3">
                    {BRANCHES.map((option) => (
                      <Button key={option} type="button" variant="outline" onClick={() => setBranch(option)} className={`h-auto min-h-16 w-full justify-start rounded-none p-5 ${branch === option ? "border-silver bg-background" : "border-border bg-card"}`}>
                        <MapPin className="h-5 w-5 text-silver" /><span>{option}</span>
                      </Button>
                    ))}
                  </div>
                </section>
              )}
              {step === 2 && (
                <section>
                  <h2 className="font-display text-3xl font-black">Select a preferred date</h2>
                  <label className="mt-8 block border border-border bg-card p-6">
                    <span className="flex items-center gap-2 text-sm font-semibold"><CalendarDays className="h-5 w-5 text-silver" />Preferred appointment</span>
                    <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="mt-5 w-full border-t border-border bg-transparent pt-5 text-lg text-foreground outline-none [color-scheme:dark]" />
                  </label>
                  <p className="mt-4 text-sm text-muted-foreground">A service advisor will call to confirm the exact arrival time.</p>
                </section>
              )}
              {step === 3 && (
                <section>
                  <h2 className="font-display text-3xl font-black">Review your request</h2>
                  <dl className="mt-8 divide-y divide-border border-y border-border">
                    {[["Vehicle", vehicle || "Not selected"], ["Workshop", branch || "Not selected"], ["Preferred date", date || "Not selected"]].map(([label, value]) => (
                      <div key={label} className="grid grid-cols-2 gap-4 py-5"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="text-sm font-bold">{value}</dd></div>
                    ))}
                  </dl>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <input aria-label="Full name" placeholder="Full name" className="border border-border bg-card p-4 text-sm text-foreground outline-none focus:border-silver" />
                    <input aria-label="Phone number" placeholder="Phone number" className="border border-border bg-card p-4 text-sm text-foreground outline-none focus:border-silver" />
                  </div>
                </section>
              )}
            </div>

            <div className="mt-10 flex justify-between border-t border-border pt-6">
              <Button variant="outline" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))} className="rounded-none border-silver/40 bg-transparent"><ChevronLeft className="h-4 w-4" />Back</Button>
              <Button onClick={() => step < 3 && setStep((current) => current + 1)} className="rounded-none">{step === 3 ? "Submit booking" : "Continue"}<ChevronRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}