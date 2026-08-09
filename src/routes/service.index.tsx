import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Service | MOENCO Ethiopia";
const DESCRIPTION = "Maintenance, diagnostics, body and paint — delivered by factory-trained technicians using genuine parts and calibrated tools.";

export const Route = createFileRoute("/service/")({
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
      eyebrow="Ownership"
      title="Service"
      description="Certified service, transparent pricing. Maintenance, diagnostics, body and paint — delivered by factory-trained technicians using genuine parts and calibrated tools."
      highlights={["Factory-trained technicians","Transparent fixed pricing","Digital service history"]}
    />
  );
}
