import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV } from "@/components/site/nav-config";

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
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const textIdle = solid ? "text-foreground/75" : "text-charcoal-foreground/85";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 py-3.5 lg:px-8">
        <NavLink to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary font-display text-sm font-black text-primary-foreground">
            M
          </span>
          <span
            className={`truncate font-display text-lg font-extrabold tracking-tight ${
              solid ? "text-foreground" : "text-charcoal-foreground"
            }`}
          >
            MOENCO
          </span>
        </NavLink>

        <nav className="ml-auto hidden items-center gap-0.5 xl:flex">
          {NAV.map((item) =>
            item.variant === "button" ? (
              <NavLink
                key={item.label}
                to={item.to}
                className="ml-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-primary/90"
              >
                {item.label}
              </NavLink>
            ) : item.children ? (
              <div key={item.label} onMouseEnter={() => setOpen(item.label)}>
                <NavLink
                  to={item.to}
                  className={`nav-underline flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${textIdle} hover:text-primary`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${
                      open === item.label ? "rotate-180" : ""
                    }`}
                  />
                </NavLink>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setOpen(null)}
                className={`nav-underline px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${textIdle} hover:text-primary`}
              >
                {item.label}
              </NavLink>
            ),
          )}
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={`ml-2 grid h-9 w-9 place-items-center rounded-full transition-colors hover:text-primary ${textIdle}`}
          >
            {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </button>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <a
            href="tel:+251115503366"
            aria-label="Call MOENCO"
            className={`grid h-9 w-9 place-items-center rounded-full ${textIdle}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={`grid h-9 w-9 place-items-center rounded-full ${textIdle}`}
          >
            <Search className="h-4 w-4" />
          </button>
          <Button asChild size="sm" className="rounded-full px-4 text-xs">
            <NavLink to="/machineries">Machineries</NavLink>
          </Button>
          <button
            aria-label="Toggle menu"
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
              solid ? "text-foreground" : "text-charcoal-foreground"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-[1440px] items-center gap-3 px-5 py-4 lg:px-8"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              ref={searchRef}
              placeholder="Search vehicles, parts, services…"
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </form>
        </div>
      )}

      {/* Mega menu */}
      <div
        className={`hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-300 xl:block ${
          open ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-[1440px] gap-4 px-8 py-8 md:grid-cols-4">
          {(NAV.find((n) => n.label === open)?.children ?? []).map((child) => (
            <NavLink
              key={child.label}
              to={child.to}
              onClick={() => setOpen(null)}
              className="group block rounded-2xl px-4 py-3 transition-colors hover:bg-secondary"
            >
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
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
            <div key={item.label} className="border-b border-border py-4 last:border-0">
              <NavLink
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="font-display text-base font-bold text-foreground"
              >
                {item.label}
              </NavLink>
              {item.children && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.to}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
