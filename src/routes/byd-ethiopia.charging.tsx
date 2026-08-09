import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Charging | MOENCO Ethiopia";
const DESCRIPTION = "Home wallbox installation, public charging guidance and route planning support for every BYD owner.";

export const Route = createFileRoute("/byd-ethiopia/charging")({
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
      title="Charging"
      description="Home and network charging made simple. Home wallbox installation, public charging guidance and route planning support for every BYD owner."
      highlights={["Home wallbox installation","Public network guidance","Route planning support"]}
    />
  );
}
