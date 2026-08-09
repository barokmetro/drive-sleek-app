import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Body & Paint | MOENCO Ethiopia";
const DESCRIPTION = "Approved repair processes, factory paint matching and structural alignment to return your vehicle to original condition.";

export const Route = createFileRoute("/service/body-paint")({
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
      title="Body & Paint"
      description="Certified collision repair and refinishing. Approved repair processes, factory paint matching and structural alignment to return your vehicle to original condition."
      highlights={["Manufacturer-approved repairs","Exact paint matching","Insurance liaison support"]}
    />
  );
}
