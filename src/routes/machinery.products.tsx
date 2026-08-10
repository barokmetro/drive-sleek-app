import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Machinery Products | MOENCO Ethiopia";
const DESCRIPTION = "Forklifts, generators, excavators and compaction equipment supplied and supported by MOENCO's industrial division.";

export const Route = createFileRoute("/machinery/products")({
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
      eyebrow="Machinery"
      title="Machinery Products"
      description="Forklifts, generators, excavators and compaction equipment supplied and supported by MOENCO's industrial division."
      vehicles={[]}
      highlights={["Material handling", "Power generation", "Earth-moving equipment"]}
    />
  );
}
