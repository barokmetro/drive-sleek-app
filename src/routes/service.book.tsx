import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Book a Service | MOENCO Ethiopia";
const DESCRIPTION = "Choose your branch, model and preferred time. We confirm your booking by SMS and prepare the parts before you arrive.";

export const Route = createFileRoute("/service/book")({
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
      title="Book a Service"
      description="Reserve a bay in under two minutes. Choose your branch, model and preferred time. We confirm your booking by SMS and prepare the parts before you arrive."
      highlights={["Same-week appointments","SMS confirmation","Courtesy vehicle on request"]}
    />
  );
}
