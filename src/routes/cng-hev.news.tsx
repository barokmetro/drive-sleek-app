import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "HEV News | MOENCO Ethiopia";
const DESCRIPTION = "Electrification updates from MOENCO and our partner brands — new arrivals, charging infrastructure and hybrid ownership insight.";

export const Route = createFileRoute("/cng-hev/news")({
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
      title="HEV News"
      description="Electrification updates from MOENCO and our partner brands — new arrivals, charging infrastructure and hybrid ownership insight."
      vehicles={[]}
      highlights={["New model arrivals", "Charging network updates", "Ownership insight"]}
    />
  );
}
