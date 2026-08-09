import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { VehicleGrid } from "@/components/site/VehicleGrid";
import { ServiceParts } from "@/components/site/ServiceParts";
import { News } from "@/components/site/News";

const TITLE = "MOENCO | Toyota, Suzuki & BYD Vehicles in Ethiopia";
const DESCRIPTION =
  "Explore Toyota, Suzuki and BYD vehicles, machinery, genuine parts and certified service from Ethiopia's authorised distributor. Book a service in minutes.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <VehicleGrid />
      <ServiceParts />
      <News />
    </>
  );
}
