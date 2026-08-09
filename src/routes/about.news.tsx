import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "News | MOENCO Ethiopia";
const DESCRIPTION = "Model launches, branch openings, partnerships and community initiatives from across the MOENCO network.";

export const Route = createFileRoute("/about/news")({
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
      eyebrow="Newsroom"
      title="News"
      description="Latest announcements and launches. Model launches, branch openings, partnerships and community initiatives from across the MOENCO network."
      highlights={["Model launches","Branch openings","Community initiatives"]}
    />
  );
}
