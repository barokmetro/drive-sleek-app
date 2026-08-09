import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Accessories | MOENCO Ethiopia";
const DESCRIPTION = "Roof racks, protection kits, interior upgrades and electronics — all approved accessories that keep your warranty intact.";

export const Route = createFileRoute("/parts/accessories")({
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
      eyebrow="Parts"
      title="Accessories"
      description="Personalise your vehicle with approved accessories. Roof racks, protection kits, interior upgrades and electronics — all approved accessories that keep your warranty intact."
      highlights={["Warranty-safe upgrades","Professional fitting","Model-specific catalogues"]}
    />
  );
}
