import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Our Story | MOENCO Ethiopia";
const DESCRIPTION = "The MOENCO story spans six decades of partnership with global manufacturers and investment in Ethiopian technical skills.";

export const Route = createFileRoute("/about/story")({
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
      eyebrow="Company"
      title="Our Story"
      description="From a single showroom to a national network. The MOENCO story spans six decades of partnership with global manufacturers and investment in Ethiopian technical skills."
      highlights={["Founded in Addis Ababa","Long-standing OEM partnerships","Continuous technician training"]}
    />
  );
}
