import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Parts Inquiry | MOENCO Ethiopia";
const DESCRIPTION = "Ask our parts specialists anything — pricing, compatibility, lead times or bulk supply for a fleet. We respond within one working day.";

export const Route = createFileRoute("/parts/inquiry")({
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
      title="Parts Inquiry"
      description="Ask our parts specialists anything — pricing, compatibility, lead times or bulk supply for a fleet. We respond within one working day."
      vehicles={[]}
      highlights={["Compatibility checks", "Bulk and fleet pricing", "One working day response"]}
    />
  );
}
