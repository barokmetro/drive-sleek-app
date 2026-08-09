import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Technology | MOENCO Ethiopia";
const DESCRIPTION = "A plain-language guide to energy recovery, dual-fuel systems, servicing intervals and what each technology means for your budget.";

export const Route = createFileRoute("/cng-hev/technology")({
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
      eyebrow="Insight"
      title="Technology"
      description="How hybrid and CNG systems work. A plain-language guide to energy recovery, dual-fuel systems, servicing intervals and what each technology means for your budget."
      highlights={["Energy recovery explained","Service interval guidance","Choosing the right powertrain"]}
    />
  );
}
