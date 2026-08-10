import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "National Skills Contests | MOENCO Ethiopia";
const DESCRIPTION = "MOENCO technicians compete annually in national and regional skills contests, benchmarking our workshops against global standards.";

export const Route = createFileRoute("/service/skills-contest")({
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
      title="National Skills Contests"
      description="MOENCO technicians compete annually in national and regional skills contests, benchmarking our workshops against global standards."
      vehicles={[]}
      highlights={["Annual technician contest", "Regional and global rounds", "Continuous training culture"]}
    />
  );
}
