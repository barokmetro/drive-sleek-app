import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "BYD Ethiopia | MOENCO Ethiopia";
const DESCRIPTION = "BYD Ethiopia brings Blade Battery safety, long range and rapid charging to the Ethiopian market, with MOENCO service backing.";

export const Route = createFileRoute("/byd-ethiopia/")({
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
      eyebrow="Electric"
      title="BYD Ethiopia"
      description="The electric future, available today. BYD Ethiopia brings Blade Battery safety, long range and rapid charging to the Ethiopian market, with MOENCO service backing."
      highlights={["Blade Battery safety","Growing charging network","Dedicated EV service"]}
    />
  );
}
