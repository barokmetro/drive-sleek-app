import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Toyota | MOENCO Ethiopia";
const DESCRIPTION = "Discover the Toyota range in Ethiopia — Corolla, RAV4, Hilux, Hiace and the Land Cruiser family, with genuine parts and certified service.";

export const Route = createFileRoute("/brands/toyota")({
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
    <PlaceholderPage
      eyebrow="Brand"
      title="Toyota"
      description="Sedans, SUVs, pickups and vans built to last. Discover the Toyota range in Ethiopia — Corolla, RAV4, Hilux, Hiace and the Land Cruiser family, with genuine parts and certified service."
      vehicles={["land-cruiser","hilux","rav4","corolla"]}
      highlights={["Land Cruiser 300 & Prado","Hilux and Hiace for business","Hybrid-ready RAV4 and Corolla"]}
    />
  );
}
