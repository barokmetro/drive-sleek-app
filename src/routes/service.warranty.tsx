import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Warranty | MOENCO Ethiopia";
const DESCRIPTION = "Understand what your warranty covers, how long it runs and how to make a claim. Servicing with MOENCO keeps your coverage intact.";

export const Route = createFileRoute("/service/warranty")({
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
      title="Warranty"
      description="Understand what your warranty covers, how long it runs and how to make a claim. Servicing with MOENCO keeps your coverage intact."
      vehicles={[]}
      highlights={["3 years / 100,000 km vehicle cover", "8 years hybrid battery cover", "Claims handled in-branch"]}
    />
  );
}
