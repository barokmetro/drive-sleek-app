import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

function FooterLink(props: { to: string; className?: string; children: React.ReactNode }) {
  const AnyLink = Link as unknown as React.ComponentType<Record<string, unknown>>;
  return <AnyLink {...props} />;
}

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Vehicle",
    links: [
      { label: "Toyota Vehicles", to: "/brands/toyota" },
      { label: "Duty free vehicles", to: "/duty-free-vehicles" },
      { label: "Original Parts", to: "/parts/genuine" },
      { label: "Quality Service", to: "/service/quality" },
      { label: "Careers", to: "/about/careers" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Machinery",
    links: [
      { label: "Products", to: "/machinery/products" },
      { label: "Parts", to: "/machinery/parts" },
      { label: "Service", to: "/machinery/service" },
      { label: "Machinery Rental", to: "/machinery/rental" },
      { label: "Contact", to: "/machinery/contact" },
    ],
  },
  {
    title: "Parts",
    links: [
      { label: "Battery", to: "/parts/battery" },
      { label: "Parts Overview", to: "/parts/overview" },
      { label: "Dealers", to: "/parts/dealers" },
      { label: "Parts Requisition", to: "/parts/requisition" },
      { label: "Parts Inquiry", to: "/parts/inquiry" },
      { label: "Necessary Information to Buy Parts", to: "/parts/information" },
      { label: "About Vehicle Parts", to: "/parts/about" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Online Service Booking", to: "/service/booking" },
      { label: "Quality Service", to: "/service/quality" },
      { label: "Body & Paint", to: "/service/body-paint" },
      { label: "Warranty", to: "/service/warranty" },
      { label: "Recall", to: "/service/recall" },
      { label: "Dash Board Information", to: "/service/dashboard" },
      { label: "Do it yourself", to: "/service/diy" },
      { label: "National Skills Contests", to: "/service/skills-contest" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About", to: "/about" },
      { label: "Career", to: "/about/careers" },
      { label: "CSR", to: "/about/csr" },
      { label: "FAQs", to: "/about/faqs" },
      { label: "Our Strategy", to: "/about/strategy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[oklch(0.135_0.002_285)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap gap-3">
          <FooterLink
            to="/contact"
            className="silver-glow inline-flex items-center gap-2 rounded-full border border-silver/35 bg-gradient-to-b from-[#232327] to-[#131315] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground"
          >
            Contact Us <ArrowUpRight className="h-3.5 w-3.5" />
          </FooterLink>
          <FooterLink
            to="/subscribe"
            className="silver-glow inline-flex items-center gap-2 rounded-full border border-silver/35 bg-gradient-to-b from-[#232327] to-[#131315] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground"
          >
            Subscribe To Newsletter <ArrowUpRight className="h-3.5 w-3.5" />
          </FooterLink>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2.4fr]">
          <div>
            <div className="flex items-center gap-3 border-l border-silver/40 pl-3">
              <span>
                <span className="block font-display text-lg font-extrabold text-chrome">
                  MOENCO
                </span>
                <span className="block text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  An Inchcape Company
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              MOENCO is a subsidiary of Inchcape PLC, a global distribution &amp; retail leader
              based in London.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-silver">
                  {col.title}
                </p>
                <div className="chrome-rule mt-3 h-px w-full" />
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <FooterLink
                        to={l.to}
                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                      >
                        {l.label}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 Moenco, All right reserved. Website designed by 360Ground
        </p>
      </div>
    </footer>
  );
}
