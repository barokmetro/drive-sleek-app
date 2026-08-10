import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Authorised Parts Dealers | MOENCO Ethiopia";
const DESCRIPTION = "Find an authorised MOENCO parts dealer near you. Every dealer in the network is supplied directly from our central warehouse in Addis Ababa.";

export const Route = createFileRoute("/parts/dealers")({
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
      title="Authorised Parts Dealers"
      description="Find an authorised MOENCO parts dealer near you. Every dealer in the network is supplied directly from our central warehouse in Addis Ababa."
      vehicles={[]}
      highlights={["Nationwide dealer network", "Direct factory supply", "Verified genuine stock"]}
    />
  );
}
