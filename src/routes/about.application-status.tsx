import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Application Status | MOENCO Ethiopia";
const DESCRIPTION = "Already applied? Track where your application sits in the process, from screening through to interview and offer.";

export const Route = createFileRoute("/about/application-status")({
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
      eyebrow="Careers"
      title="Application Status"
      description="Already applied? Track where your application sits in the process, from screening through to interview and offer."
      vehicles={[]}
      highlights={["Screening", "Interview", "Offer and onboarding"]}
    />
  );
}
