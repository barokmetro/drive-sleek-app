import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Dash Board Information | MOENCO Ethiopia";
const DESCRIPTION = "A plain-language guide to the warning lights on your dashboard — what is urgent, what can wait, and what to do next.";

export const Route = createFileRoute("/service/dashboard")({
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
      eyebrow="Service"
      title="Dash Board Information"
      description="A plain-language guide to the warning lights on your dashboard — what is urgent, what can wait, and what to do next."
      vehicles={[]}
      highlights={["Red means stop safely", "Amber means book a check", "Green and blue are informational"]}
    />
  );
}
