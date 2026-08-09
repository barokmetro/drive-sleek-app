import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Hybrid (HEV) | MOENCO Ethiopia";
const DESCRIPTION = "Hybrid models recover braking energy to cut consumption in city traffic, with battery warranties and specialist servicing.";

export const Route = createFileRoute("/cng-hev/hybrid")({
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
      title="Hybrid (HEV)"
      description="Self-charging efficiency, no plug required. Hybrid models recover braking energy to cut consumption in city traffic, with battery warranties and specialist servicing."
      vehicles={["rav4","corolla"]}
      highlights={["No charging infrastructure needed","Quieter city driving","Long battery warranty"]}
    />
  );
}
