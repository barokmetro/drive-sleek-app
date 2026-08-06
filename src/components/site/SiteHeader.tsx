import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

type MenuGroup = { title: string; items: { label: string; blurb: string; href: string }[] };

const MENU: Record<string, MenuGroup[]> = {
  Vehicles: [
    {
      title: "Passenger",
      items: [
        { label: "Corolla", blurb: "Efficient everyday sedan", href: "#vehicles" },
        { label: "Yaris", blurb: "Compact city companion", href: "#vehicles" },
        { label: "Suzuki Dzire", blurb: "Value-first commuter", href: "#vehicles" },
      ],
    },
    {
      title: "SUV & Crossover",
      items: [
        { label: "Land Cruiser 300", blurb: "Flagship capability", href: "#vehicles" },
        { label: "RAV4", blurb: "Hybrid-ready adventure", href: "#vehicles" },
        { label: "BYD Atto 3", blurb: "All-electric crossover", href: "#vehicles" },
      ],
    },
    {
      title: "Commercial",
      items: [
        { label: "Hilux", blurb: "Built for the worksite", href: "#vehicles" },
        { label: "Hiace", blurb: "Passenger & cargo vans", href: "#vehicles" },
        { label: "Land Cruiser Pickup", blurb: "Extreme-duty hauling", href: "#vehicles" },
      ],
    },
  ],
  Machinery: [
    {
      title: "Equipment",
      items: [
        { label: "Forklifts", blurb: "Warehouse & yard handling", href: "#machinery" },
        { label: "Generators", blurb: "Standby & prime power", href: "#machinery" },
        { label: "Construction", blurb: "Excavators and loaders", href: "#machinery" },
      ],
    },
  ],
  "Parts & Service": [
    {
      title: "Ownership",
      items: [
        { label: "Book a Service", blurb: "Reserve a bay in minutes", href: "#service" },
        { label: "Genuine Parts", blurb: "Factory-spec components", href: "#service" },
        { label: "Body & Paint", blurb: "Certified collision repair", href: "#service" },
      ],
    },
  ],
  About: [
    {
      title: "Company",
      items: [
        { label: "Our Story", blurb: "Six decades in Ethiopia", href: "#about" },
        { label: "Branches", blurb: "Showrooms nationwide", href: "#about" },
        { label: "Careers", blurb: "Join the team", href: "#about" },
      ],
    },
  ],
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary font-display text-sm font-black text-primary-foreground">
            M
          </span>
          <span
            className={`truncate font-display text-lg font-extrabold tracking-tight ${
              scrolled ? "text-foreground" : "text-charcoal-foreground"
            }`}
          >
            MOENCO
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {Object.keys(MENU).map((key) => (
            <button
              key={key}
              onMouseEnter={() => setOpen(key)}
              onFocus={() => setOpen(key)}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-charcoal-foreground/85 hover:text-charcoal-foreground"
              }`}
            >
              {key}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${open === key ? "rotate-180" : ""}`}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href="tel:+251115503366"
            className={`hidden items-center gap-2 text-sm font-medium md:flex ${
              scrolled ? "text-muted-foreground" : "text-charcoal-foreground/80"
            }`}
          >
            <Phone className="h-4 w-4" />
            +251 11 550 3366
          </a>
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#service">Book a Service</a>
          </Button>
          <button
            aria-label="Toggle menu"
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full lg:hidden ${
              scrolled ? "text-foreground" : "text-charcoal-foreground"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <div
        className={`hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:block ${
          open ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-8 py-10 md:grid-cols-3">
          {(open ? (MENU[open] ?? []) : []).map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(null)}
                      className="group block rounded-lg px-3 py-2 transition-colors hover:bg-secondary"
                    >
                      <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                        {item.label}
                      </span>
                      <span className="block text-xs text-muted-foreground">{item.blurb}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-5 py-6 lg:hidden">
          {Object.entries(MENU).map(([key, groups]) => (
            <div key={key} className="border-b border-border py-4 last:border-0">
              <p className="font-display text-base font-bold text-foreground">{key}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {groups.flatMap((g) => g.items).map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
