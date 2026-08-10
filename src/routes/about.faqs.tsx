import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Frequently Asked Questions | MOENCO Ethiopia";
const DESCRIPTION = "Answers to the questions we hear most about buying, servicing, parts, warranty and duty-free vehicle purchase.";

export const Route = createFileRoute("/about/faqs")({
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
      title="Frequently Asked Questions"
      description="Answers to the questions we hear most about buying, servicing, parts, warranty and duty-free vehicle purchase."
      vehicles={[]}
      highlights={["Buying and financing", "Service and warranty", "Parts and duty free"]}
    />
  );
}
