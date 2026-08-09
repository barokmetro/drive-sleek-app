import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "E-Showroom | MOENCO Ethiopia";
const DESCRIPTION = "Configure models, compare specifications and reserve your vehicle online — then complete the handover at your nearest branch.";

export const Route = createFileRoute("/e-showroom")({
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
      eyebrow="Digital"
      title="E-Showroom"
      description="Browse the entire range online. Configure models, compare specifications and reserve your vehicle online — then complete the handover at your nearest branch."
      vehicles={["land-cruiser","hilux","rav4","corolla","atto-3","dzire"]}
      highlights={["360° model views","Side-by-side comparison","Online reservation"]}
    />
  );
}
