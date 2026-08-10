import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Quality Service | MOENCO Ethiopia";
const DESCRIPTION = "Factory-trained technicians, calibrated diagnostic equipment and a documented digital service record for every vehicle that enters our bays.";

export const Route = createFileRoute("/service/quality")({
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
      eyebrow="Service"
      title="Quality Service"
      description="Factory-trained technicians, calibrated diagnostic equipment and a documented digital service record for every vehicle that enters our bays."
      vehicles={[]}
      highlights={["Factory-trained technicians", "Digital vehicle inspection", "Genuine parts only"]}
    />
  );
}
