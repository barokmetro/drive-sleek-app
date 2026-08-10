import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Genuine Batteries | MOENCO Ethiopia";
const DESCRIPTION = "Maintenance-free genuine batteries matched to your vehicle, tested on site and fitted while you wait, with full warranty registration.";

export const Route = createFileRoute("/parts/battery")({
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
      title="Genuine Batteries"
      description="Maintenance-free genuine batteries matched to your vehicle, tested on site and fitted while you wait, with full warranty registration."
      vehicles={[]}
      highlights={["Free battery health check", "Fitment while you wait", "12\u201324 month warranty"]}
    />
  );
}
