const COLUMNS = [
  { title: "Vehicles", links: ["Passenger", "SUV & Crossover", "Commercial", "Electric"] },
  { title: "Machinery", links: ["Forklifts", "Generators", "Construction"] },
  { title: "Ownership", links: ["Book a Service", "Genuine Parts", "Body & Paint"] },
  { title: "Company", links: ["Our Story", "Branches", "Careers", "Contact"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary font-display text-sm font-black text-primary-foreground">
                M
              </span>
              <span className="font-display text-lg font-extrabold text-foreground">MOENCO</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Authorised distributor of Toyota, Suzuki and BYD vehicles, machinery, genuine parts
              and certified service across Ethiopia.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} MOENCO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
