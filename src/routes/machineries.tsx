import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Machineries | MOENCO Ethiopia";
const DESCRIPTION = "Forklifts, generators and construction equipment supplied, serviced and supported by MOENCO's industrial division.";

export const Route = createFileRoute("/machineries")({
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
      eyebrow="Industrial"
      title="Machineries"
      description="Equipment built for demanding work. Forklifts, generators and construction equipment supplied, serviced and supported by MOENCO's industrial division."
      highlights={["Forklifts and material handling","Standby and prime power","Construction equipment support"]}
    />
  );
}
