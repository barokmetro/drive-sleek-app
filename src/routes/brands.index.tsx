import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Our Brands | MOENCO Ethiopia";
const DESCRIPTION = "Explore the full MOENCO vehicle portfolio: Toyota reliability, Suzuki value and BYD electric performance, all backed by nationwide service.";

export const Route = createFileRoute("/brands")({
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
      eyebrow="Portfolio"
      title="Our Brands"
      description="Toyota, Suzuki and BYD — three brands, one authorised distributor. Explore the full MOENCO vehicle portfolio: Toyota reliability, Suzuki value and BYD electric performance, all backed by nationwide service."
      highlights={["Authorised distributor since 1961","Nationwide showrooms and service bays","Factory-trained technicians"]}
    />
  );
}
