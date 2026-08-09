import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Maintenance Plans | MOENCO Ethiopia";
const DESCRIPTION = "Prepaid maintenance plans cover scheduled servicing with genuine parts, priority booking and protection against price increases.";

export const Route = createFileRoute("/service/maintenance")({
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
      title="Maintenance Plans"
      description="Fixed-price servicing, no surprises. Prepaid maintenance plans cover scheduled servicing with genuine parts, priority booking and protection against price increases."
      highlights={["Locked-in pricing","Priority booking","Fully transferable"]}
    />
  );
}
