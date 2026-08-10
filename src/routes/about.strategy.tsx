import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Our Strategy | MOENCO Ethiopia";
const DESCRIPTION = "Distribution excellence, digital ownership experiences and electrification. The three pillars shaping MOENCO's next decade in Ethiopia.";

export const Route = createFileRoute("/about/strategy")({
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
      eyebrow="About"
      title="Our Strategy"
      description="Distribution excellence, digital ownership experiences and electrification. The three pillars shaping MOENCO's next decade in Ethiopia."
      vehicles={[]}
      highlights={["Distribution excellence", "Digital-first ownership", "Electrified line-up"]}
    />
  );
}
