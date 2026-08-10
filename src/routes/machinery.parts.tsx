import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Machinery Parts | MOENCO Ethiopia";
const DESCRIPTION = "Genuine consumables and wear parts held in stock for the machines we supply, so planned maintenance never waits on shipping.";

export const Route = createFileRoute("/machinery/parts")({
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
      title="Machinery Parts"
      description="Genuine consumables and wear parts held in stock for the machines we supply, so planned maintenance never waits on shipping."
      vehicles={[]}
      highlights={["Filters and consumables", "Wear parts in stock", "Scheduled kit supply"]}
    />
  );
}
