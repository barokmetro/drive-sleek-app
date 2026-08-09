import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Suzuki | MOENCO Ethiopia";
const DESCRIPTION = "Suzuki models distributed by MOENCO — from the Dzire commuter to compact crossovers, engineered for low running costs.";

export const Route = createFileRoute("/brands/suzuki")({
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
      title="Suzuki"
      description="Compact, efficient and value-first mobility. Suzuki models distributed by MOENCO — from the Dzire commuter to compact crossovers, engineered for low running costs."
      vehicles={["dzire"]}
      highlights={["Low total cost of ownership","Compact city footprint","Affordable genuine parts"]}
    />
  );
}
