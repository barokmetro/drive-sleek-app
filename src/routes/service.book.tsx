import { createFileRoute, redirect } from "@tanstack/react-router";

const TITLE = "Book a Service | MOENCO Ethiopia";
const DESCRIPTION = "Choose your branch, model and preferred time. We confirm your booking by SMS and prepare the parts before you arrive.";

export const Route = createFileRoute("/service/book")({
  beforeLoad: () => {
    throw redirect({ to: "/service/booking", replace: true });
  },
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
  component: () => null,
});
