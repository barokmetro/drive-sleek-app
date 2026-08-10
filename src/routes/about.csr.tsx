import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Corporate Social Responsibility | MOENCO Ethiopia";
const DESCRIPTION = "Road safety education, technical scholarships and environmental programmes delivered with our partners across Ethiopia.";

export const Route = createFileRoute("/about/csr")({
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
      title="Corporate Social Responsibility"
      description="Road safety education, technical scholarships and environmental programmes delivered with our partners across Ethiopia."
      vehicles={[]}
      highlights={["Road safety education", "Technical scholarships", "Environmental programmes"]}
    />
  );
}
