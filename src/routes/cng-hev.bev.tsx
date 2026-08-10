import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Battery Electric Vehicles | MOENCO Ethiopia";
const DESCRIPTION = "Fully electric vehicles supplied, charged and serviced by MOENCO — with high-voltage trained technicians and genuine parts held locally.";

export const Route = createFileRoute("/cng-hev/bev")({
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
      eyebrow="Electrification"
      title="Battery Electric Vehicles"
      description="Fully electric vehicles supplied, charged and serviced by MOENCO — with high-voltage trained technicians and genuine parts held locally."
      vehicles={["atto-3"]}
      highlights={["Zero tailpipe emissions", "Home wallbox installation", "High-voltage trained technicians"]}
    />
  );
}
