import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Machinery Contact | MOENCO Ethiopia";
const DESCRIPTION = "Speak to the industrial division about equipment supply, rental, parts or service support.";

export const Route = createFileRoute("/machinery/contact")({
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
      eyebrow="Machinery"
      title="Machinery Contact"
      description="Speak to the industrial division about equipment supply, rental, parts or service support."
      vehicles={[]}
      highlights={["Equipment specialists", "Rental desk", "Aftersales support"]}
    />
  );
}
