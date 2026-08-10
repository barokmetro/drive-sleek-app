import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Why Work at MOENCO | MOENCO Ethiopia";
const DESCRIPTION = "Join an Inchcape company with global standards, structured technical training and genuine progression across sales, aftersales and corporate functions.";

export const Route = createFileRoute("/about/why-work")({
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
      title="Why Work at MOENCO"
      description="Join an Inchcape company with global standards, structured technical training and genuine progression across sales, aftersales and corporate functions."
      vehicles={[]}
      highlights={["Global Inchcape standards", "Structured technical training", "Clear progression paths"]}
    />
  );
}
