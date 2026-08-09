import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Genuine Parts | MOENCO Ethiopia";
const DESCRIPTION = "Genuine filters, brakes, batteries and body parts engineered to original specification for maximum reliability and resale value.";

export const Route = createFileRoute("/parts/genuine")({
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
      title="Genuine Parts"
      description="Factory-spec components for every model. Genuine filters, brakes, batteries and body parts engineered to original specification for maximum reliability and resale value."
      highlights={["Engineered to factory spec","Full manufacturer warranty","Available at every branch"]}
    />
  );
}
