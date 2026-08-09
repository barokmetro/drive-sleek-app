import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "CN/HEV | MOENCO Ethiopia";
const DESCRIPTION = "Explore MOENCO's hybrid and CNG line-up — proven technologies that cut fuel spend and emissions without compromising capability.";

export const Route = createFileRoute("/cng-hev/")({
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
      eyebrow="Efficiency"
      title="CN/HEV"
      description="Cleaner powertrains for lower running costs. Explore MOENCO's hybrid and CNG line-up — proven technologies that cut fuel spend and emissions without compromising capability."
      highlights={["Lower fuel spend per km","Reduced emissions","Serviced by trained specialists"]}
    />
  );
}
