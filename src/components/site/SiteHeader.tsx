import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Search, Phone } from "lucide-react";
import { NAV } from "@/components/site/nav-config";
import { Button } from "@/components/ui/button";

// TanStack's Link is strictly typed against the generated route tree; the nav
// config is data-driven, so route strings are passed through this thin wrapper.
function NavLink(props: {
  to: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const AnyLink = Link as unknown as React.ComponentType<Record<string, unknown>>;
  return <AnyLink {...props} />;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setMobileSection(null);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [searchOpen]);

  const activeChildren = NAV.find((n) => n.label === open)?.children ?? [];
  const searchableLinks = [
    { label: "Battery", to: "/parts/battery", detail: "Road Power batteries and testing" },
    { label: "BYD Ethiopia", to: "/byd-ethiopia", detail: "Electric vehicles and charging" },
    { label: "Body and Paint", to: "/service/body-paint", detail: "Certified collision repair" },
    { label: "Booking", to: "/service/booking", detail: "Reserve a service appointment" },
    ...NAV.flatMap((item) => [
      { label: item.label, to: item.to, detail: "MOENCO" },
      ...(item.children?.map((child) => ({
        label: child.label,
        to: child.to,
        detail: child.blurb,
      })) ?? []),
    ]),
  ].filter(
    (item, index, items) => items.findIndex((candidate) => candidate.to === item.to) === index,
  );
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const suggestions = searchableLinks
    .filter((item) => normalizedQuery === "" || item.label.toLowerCase().includes(normalizedQuery))
    .slice(0, 8);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-chrome shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)]" : "glass-chrome"
      }`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 py-3.5 lg:px-8">
        <NavLink to="/" className="group flex min-w-0 items-center gap-3">
          <span className="min-w-0 border-l border-silver/40 pl-3 leading-none transition-colors group-hover:border-silver">
            <span className="block truncate font-display text-xl font-extrabold text-chrome">
              MOENCO
            </span>
            <span className="mt-1 block truncate text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              An Inchcape Company
            </span>
          </span>
        </NavLink>

        <nav className="ml-auto hidden items-center gap-0.5 xl:flex">
          {NAV.map((item) =>
            item.variant === "button" ? (
              <NavLink
                key={item.label}
                to={item.to}
                className="silver-glow ml-3 whitespace-nowrap rounded-full border border-silver/40 bg-gradient-to-b from-[#3a1417] to-[#170a0c] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-foreground"
              >
                {item.label}
              </NavLink>
            ) : item.children ? (
              <div key={item.label} onMouseEnter={() => setOpen(item.label)}>
                <button
                  type="button"
                  aria-expanded={open === item.label}
                  onClick={() => setOpen(item.label)}
                  className={`nav-underline flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                    open === item.label ? "text-foreground" : "text-foreground/70"
                  } hover:text-foreground`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${
                      open === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setOpen(null)}
                className="nav-underline whitespace-nowrap px-2.5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </NavLink>
            ),
          )}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="ml-2 rounded-full border border-border text-foreground/70 hover:border-silver/50 hover:text-foreground"
          >
            {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </Button>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <a
            href="tel:+251115503366"
            aria-label="Call MOENCO"
            className="grid h-9 w-9 place-items-center rounded-full text-foreground/70"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="rounded-full text-foreground/70"
          >
            <Search className="h-4 w-4" />
          </Button>
          <NavLink
            to="/machineries"
            className="rounded-full border border-silver/40 bg-gradient-to-b from-[#3a1417] to-[#170a0c] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-foreground"
          >
            Machineries
          </NavLink>
          <button
            aria-label="Toggle menu"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Search modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search MOENCO"
        className={`fixed inset-0 z-[70] overflow-y-auto bg-background px-5 pt-24 transition-all duration-300 ${
          searchOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className={`mx-auto max-w-3xl transition-transform duration-300 ${searchOpen ? "translate-y-0" : "-translate-y-4"}`}>
          <div className="flex items-center gap-3 border-b border-silver/35 py-4">
            <Search className="h-5 w-5 text-silver" />
            <input
              ref={searchRef}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search vehicles, parts, services…"
              className="w-full bg-transparent text-lg text-foreground outline-none placeholder:text-muted-foreground sm:text-2xl"
            />
            <Button type="button" variant="ghost" size="icon" aria-label="Close search" onClick={() => setSearchOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {normalizedQuery ? `${suggestions.length} suggestions` : "Popular destinations"}
          </p>
          <div className="mt-3 divide-y divide-border border-y border-border bg-background">
            {suggestions.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="group flex items-center justify-between gap-5 py-4"
              >
                <span className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-silver">{item.label}</span>
                <span className="hidden text-sm text-muted-foreground sm:block">{item.detail}</span>
              </NavLink>
            ))}
            {suggestions.length === 0 && (
              <p className="py-8 text-sm text-muted-foreground">No matches found. Try “battery”, “BYD”, “body” or “booking”.</p>
            )}
          </div>
        </div>
      </div>

      {/* Mega menu — smooth height + opacity */}
      <div
        className={`hidden overflow-hidden border-t border-border/60 bg-background/90 backdrop-blur-xl transition-all duration-300 ease-out xl:block ${
          open ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-[1440px] gap-3 px-8 py-8 md:grid-cols-4">
          {activeChildren.map((child, i) => (
            <NavLink
              key={child.label}
              to={child.to}
              onClick={() => setOpen(null)}
              className="group block rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 hover:border-silver/40 hover:bg-card"
            >
              <span
                style={{ transitionDelay: `${i * 25}ms` }}
                className="block text-sm font-semibold text-foreground transition-colors group-hover:text-silver"
              >
                {child.label}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">{child.blurb}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-5 py-5 xl:hidden">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-border py-3 last:border-0">
              <div className="flex items-center justify-between gap-3">
                <NavLink
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-base font-bold text-foreground"
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <button
                    aria-label={`Toggle ${item.label} links`}
                    onClick={() =>
                      setMobileSection((v) => (v === item.label ? null : item.label))
                    }
                    className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        mobileSection === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.children && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileSection === item.label
                      ? "max-h-[420px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-3 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-xl bg-card px-3 py-2 text-sm text-foreground/85"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
