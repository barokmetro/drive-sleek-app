import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Recall Information | MOENCO Ethiopia";
const DESCRIPTION = "Safety campaigns are carried out free of charge. Share your VIN with any branch and we will confirm within minutes whether your vehicle is affected.";

export const Route = createFileRoute("/service/recall")({
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
      title="Recall Information"
      description="Safety campaigns are carried out free of charge. Share your VIN with any branch and we will confirm within minutes whether your vehicle is affected."
      vehicles={[]}
      highlights={["Free of charge repairs", "VIN check in minutes", "Genuine replacement parts"]}
    />
  );
}
