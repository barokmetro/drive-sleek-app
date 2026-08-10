import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Plug-in Hybrid | MOENCO Ethiopia";
const DESCRIPTION = "Plug-in hybrids give you a usable electric range for daily driving with a petrol engine in reserve for longer journeys — no compromise, no range anxiety.";

export const Route = createFileRoute("/cng-hev/plug-in")({
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
      eyebrow="Electrification"
      title="Plug-in Hybrid"
      description="Plug-in hybrids give you a usable electric range for daily driving with a petrol engine in reserve for longer journeys — no compromise, no range anxiety."
      vehicles={["rav4"]}
      highlights={["Electric-only daily commuting", "Petrol engine for long trips", "Home or workplace charging"]}
    />
  );
}
