import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Branches | MOENCO Ethiopia";
const DESCRIPTION = "Find your nearest MOENCO sales showroom, service centre or parts counter, with opening hours and direct contact details.";

export const Route = createFileRoute("/about/branches")({
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
      eyebrow="Network"
      title="Branches"
      description="Showrooms and service centres nationwide. Find your nearest MOENCO sales showroom, service centre or parts counter, with opening hours and direct contact details."
      highlights={["Addis Ababa flagship","Regional service centres","Dedicated parts counters"]}
    />
  );
}
