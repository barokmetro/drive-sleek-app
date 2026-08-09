import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Parts | MOENCO Ethiopia";
const DESCRIPTION = "Order genuine parts and accessories for Toyota, Suzuki and BYD vehicles with guaranteed fitment and nationwide availability.";

export const Route = createFileRoute("/parts/")({
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
      title="Parts"
      description="Genuine components, backed by warranty. Order genuine parts and accessories for Toyota, Suzuki and BYD vehicles with guaranteed fitment and nationwide availability."
      highlights={["100% genuine components","Warranty-backed fitment","Nationwide parts distribution"]}
    />
  );
}
