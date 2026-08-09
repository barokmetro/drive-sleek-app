import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "BYD | MOENCO Ethiopia";
const DESCRIPTION = "BYD's all-electric line-up combines Blade Battery safety with long range and rapid charging, sold and serviced by MOENCO.";

export const Route = createFileRoute("/brands/byd")({
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
      eyebrow="Brand"
      title="BYD"
      description="Electric performance, ready for Ethiopian roads. BYD's all-electric line-up combines Blade Battery safety with long range and rapid charging, sold and serviced by MOENCO."
      highlights={["Blade Battery technology","Fast-charging support","EV-trained service network"]}
    />
  );
}
