import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Subscribe To Newsletter | MOENCO Ethiopia";
const DESCRIPTION = "Get new model launches, service campaigns and parts offers delivered to your inbox. No noise, just what matters to owners.";

export const Route = createFileRoute("/subscribe")({
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
      eyebrow="Newsletter"
      title="Subscribe To Newsletter"
      description="Get new model launches, service campaigns and parts offers delivered to your inbox. No noise, just what matters to owners."
      vehicles={[]}
      highlights={["New model launches", "Service campaigns", "Owner offers"]}
    />
  );
}
