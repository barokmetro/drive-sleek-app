const PARTNERS = [
  "TOYOTA",
  "SUZUKI",
  "BYD",
  "POWER BATTERY",
  "TOYO TIRES",
  "INCHCAPE",
  "HINO",
  "DENSO",
  "CASTROL",
];

export function PartnerMarquee() {
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section
      aria-label="Brand partners"
      className="border-y border-border bg-[oklch(0.125_0.002_285)] py-8"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16 pr-16">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-black uppercase tracking-[0.22em] text-chrome opacity-80 transition-opacity duration-300 hover:opacity-100 sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
