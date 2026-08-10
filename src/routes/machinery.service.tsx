import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Machinery Service | MOENCO Ethiopia";
const DESCRIPTION = "Field service teams and workshop capacity for scheduled maintenance, diagnostics and overhaul of industrial equipment.";

export const Route = createFileRoute("/machinery/service")({
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
      title="Machinery Service"
      description="Field service teams and workshop capacity for scheduled maintenance, diagnostics and overhaul of industrial equipment."
      vehicles={[]}
      highlights={["On-site field service", "Workshop overhaul", "Preventive maintenance contracts"]}
    />
  );
}
