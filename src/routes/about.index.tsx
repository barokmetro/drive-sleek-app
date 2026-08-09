import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "About MOENCO | MOENCO Ethiopia";
const DESCRIPTION = "MOENCO has represented the world's leading automotive brands in Ethiopia since 1961, building the country's largest sales and service network.";

export const Route = createFileRoute("/about")({
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
      eyebrow="Company"
      title="About MOENCO"
      description="Six decades of mobility in Ethiopia. MOENCO has represented the world's leading automotive brands in Ethiopia since 1961, building the country's largest sales and service network."
      highlights={["Established 1961","Nationwide branch network","Thousands of vehicles serviced yearly"]}
    />
  );
}
