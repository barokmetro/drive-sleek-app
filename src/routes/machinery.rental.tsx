import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Machinery Rental | MOENCO Ethiopia";
const DESCRIPTION = "Short and long-term rental of forklifts, generators and construction equipment, with maintenance included.";

export const Route = createFileRoute("/machinery/rental")({
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
      title="Machinery Rental"
      description="Short and long-term rental of forklifts, generators and construction equipment, with maintenance included."
      vehicles={[]}
      highlights={["Daily to annual terms", "Maintenance included", "Operator training available"]}
    />
  );
}
