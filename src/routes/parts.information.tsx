import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Necessary Information to Buy Parts | MOENCO Ethiopia";
const DESCRIPTION = "What we need from you before ordering: chassis or VIN number, model year, engine code and the exact part description. Correct details mean the right part, first time.";

export const Route = createFileRoute("/parts/information")({
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
      title="Necessary Information to Buy Parts"
      description="What we need from you before ordering: chassis or VIN number, model year, engine code and the exact part description. Correct details mean the right part, first time."
      vehicles={[]}
      highlights={["VIN or chassis number", "Model year and engine code", "Part number where available"]}
    />
  );
}
