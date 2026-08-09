import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Contact | MOENCO Ethiopia";
const DESCRIPTION = "Reach our sales, parts and service teams by phone or message, or visit any MOENCO branch across Ethiopia.";

export const Route = createFileRoute("/contact")({
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
      eyebrow="Get in touch"
      title="Contact"
      description="We're here to help. Reach our sales, parts and service teams by phone or message, or visit any MOENCO branch across Ethiopia."
      highlights={["Sales and fleet enquiries","Parts availability checks","Service booking support"]}
    />
  );
}
