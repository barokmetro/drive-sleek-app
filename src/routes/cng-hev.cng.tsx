import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "CNG Vehicles | MOENCO Ethiopia";
const DESCRIPTION = "CNG-ready vehicles and conversions engineered for fleets that need predictable running costs over high mileage.";

export const Route = createFileRoute("/cng-hev/cng")({
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
      eyebrow="Powertrain"
      title="CNG Vehicles"
      description="Compressed natural gas, lower cost per kilometre. CNG-ready vehicles and conversions engineered for fleets that need predictable running costs over high mileage."
      highlights={["Lower cost per kilometre","Fleet-friendly maintenance","Certified conversions"]}
    />
  );
}
