import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "BYD Models | MOENCO Ethiopia";
const DESCRIPTION = "Compare the BYD range available in Ethiopia by range, charging speed, interior space and price.";

export const Route = createFileRoute("/byd-ethiopia/models")({
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
      eyebrow="Line-up"
      title="BYD Models"
      description="Atto 3, Seal, Dolphin and more. Compare the BYD range available in Ethiopia by range, charging speed, interior space and price."
      vehicles={["atto-3"]}
      highlights={["Atto 3 crossover","Seal performance sedan","Dolphin city hatch"]}
    />
  );
}
