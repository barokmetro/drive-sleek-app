import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Do It Yourself | MOENCO Ethiopia";
const DESCRIPTION = "Simple owner maintenance you can carry out between services: fluid checks, tyre pressures, wiper blades and cabin filters.";

export const Route = createFileRoute("/service/diy")({
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
      title="Do It Yourself"
      description="Simple owner maintenance you can carry out between services: fluid checks, tyre pressures, wiper blades and cabin filters."
      vehicles={[]}
      highlights={["Weekly fluid and tyre checks", "Wiper and bulb replacement", "Cabin filter guidance"]}
    />
  );
}
