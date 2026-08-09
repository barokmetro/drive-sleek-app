import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Order Parts | MOENCO Ethiopia";
const DESCRIPTION = "Send us your VIN and part details and our team will confirm availability, pricing and lead time within one business day.";

export const Route = createFileRoute("/parts/order")({
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
      title="Order Parts"
      description="Request a parts quote online. Send us your VIN and part details and our team will confirm availability, pricing and lead time within one business day."
      highlights={["VIN-accurate matching","Quote within 24 hours","Branch pickup or delivery"]}
    />
  );
}
