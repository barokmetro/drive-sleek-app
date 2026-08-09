import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Careers | MOENCO Ethiopia";
const DESCRIPTION = "We hire technicians, sales consultants and support professionals, and invest in manufacturer-certified training pathways.";

export const Route = createFileRoute("/about/careers")({
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
      eyebrow="People"
      title="Careers"
      description="Build your career with MOENCO. We hire technicians, sales consultants and support professionals, and invest in manufacturer-certified training pathways."
      highlights={["Certified training programmes","Clear progression paths","Nationwide opportunities"]}
    />
  );
}
