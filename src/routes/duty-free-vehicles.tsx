import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Duty Free Vehicles | MOENCO Ethiopia";
const DESCRIPTION = "Eligible diplomats, international organisations and returning professionals can purchase qualifying vehicles duty free through MOENCO.";

export const Route = createFileRoute("/duty-free-vehicles")({
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
      eyebrow="Vehicles"
      title="Duty Free Vehicles"
      description="Eligible diplomats, international organisations and returning professionals can purchase qualifying vehicles duty free through MOENCO."
      vehicles={["land-cruiser", "corolla"]}
      highlights={["Eligibility guidance", "Documentation support", "Full aftersales cover"]}
    />
  );
}
