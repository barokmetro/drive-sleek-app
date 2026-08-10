import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "About Vehicle Parts | MOENCO Ethiopia";
const DESCRIPTION = "Why genuine matters. Every genuine part is engineered, tested and warrantied as part of the vehicle it belongs to — unlike look-alike alternatives.";

export const Route = createFileRoute("/parts/about")({
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
      title="About Vehicle Parts"
      description="Why genuine matters. Every genuine part is engineered, tested and warrantied as part of the vehicle it belongs to — unlike look-alike alternatives."
      vehicles={[]}
      highlights={["Engineered for your model", "Warranty protected", "Tested to factory standards"]}
    />
  );
}
