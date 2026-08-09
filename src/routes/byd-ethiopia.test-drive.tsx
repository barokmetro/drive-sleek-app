import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Book a Test Drive | MOENCO Ethiopia";
const DESCRIPTION = "Book a BYD test drive at your nearest MOENCO showroom and experience instant torque and near-silent running.";

export const Route = createFileRoute("/byd-ethiopia/test-drive")({
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
      eyebrow="Experience"
      title="Book a Test Drive"
      description="Feel electric performance for yourself. Book a BYD test drive at your nearest MOENCO showroom and experience instant torque and near-silent running."
      highlights={["Flexible time slots","Guided EV walkthrough","No obligation"]}
    />
  );
}
