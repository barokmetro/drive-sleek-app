import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Parts Requisition | MOENCO Ethiopia";
const DESCRIPTION = "Submit a requisition for the parts you need. Send us your VIN and part numbers and our team will confirm availability, pricing and lead time.";

export const Route = createFileRoute("/parts/requisition")({
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
      title="Parts Requisition"
      description="Submit a requisition for the parts you need. Send us your VIN and part numbers and our team will confirm availability, pricing and lead time."
      vehicles={[]}
      highlights={["Submit VIN and part numbers", "Availability confirmed in 24 hours", "Fleet and workshop accounts"]}
    />
  );
}
