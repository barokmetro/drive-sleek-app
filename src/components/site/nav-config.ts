export type NavChild = { label: string; blurb: string; to: string };
export type NavItem = {
  label: string;
  to: string;
  children?: NavChild[];
  variant?: "link" | "button";
};

export const NAV: NavItem[] = [
  {
    label: "Our Brands",
    to: "/brands",
    children: [
      { label: "Toyota", blurb: "Sedans, SUVs, pickups & hybrids", to: "/brands/toyota" },
      { label: "Suzuki", blurb: "Compact value mobility", to: "/brands/suzuki" },
      { label: "BYD", blurb: "Electric performance", to: "/brands/byd" },
    ],
  },
  {
    label: "Parts",
    to: "/parts",
    children: [
      { label: "Battery", blurb: "Genuine batteries & fitting", to: "/parts/battery" },
      { label: "Parts Overview", blurb: "The full genuine catalogue", to: "/parts/overview" },
      { label: "Dealers", blurb: "Authorised parts dealers", to: "/parts/dealers" },
      { label: "Parts Requisition", blurb: "Request stock or a quote", to: "/parts/requisition" },
      {
        label: "Necessary Information to Buy Parts",
        blurb: "VIN, chassis & order checklist",
        to: "/parts/information",
      },
    ],
  },
  {
    label: "Service",
    to: "/service",
    children: [
      { label: "Online Service Booking", blurb: "Reserve a bay in minutes", to: "/service/booking" },
      { label: "Quality Service", blurb: "Factory-trained technicians", to: "/service/quality" },
      { label: "Body & Paint Repair", blurb: "Certified collision repair", to: "/service/body-paint" },
      { label: "Warranty", blurb: "Coverage & claims", to: "/service/warranty" },
      { label: "Recall", blurb: "Check your VIN", to: "/service/recall" },
      { label: "Dash Board Information", blurb: "Warning lights explained", to: "/service/dashboard" },
      { label: "Do It Yourself", blurb: "Owner maintenance guides", to: "/service/diy" },
    ],
  },
  {
    label: "CN/HEV",
    to: "/cng-hev",
    children: [
      {
        label: "Toyota Hybrid Electric Vehicles",
        blurb: "Self-charging efficiency",
        to: "/cng-hev/hybrid",
      },
      { label: "Plug-in Hybrid", blurb: "Electric range, petrol backup", to: "/cng-hev/plug-in" },
      { label: "Battery Electric Vehicles", blurb: "Fully electric line-up", to: "/cng-hev/bev" },
      { label: "HEV News", blurb: "Electrification updates", to: "/cng-hev/news" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About MOENCO", blurb: "Six decades in Ethiopia", to: "/about" },
      { label: "Our Strategy", blurb: "Where we are heading", to: "/about/strategy" },
      { label: "Why Work at MOENCO", blurb: "Life at Inchcape Ethiopia", to: "/about/why-work" },
      { label: "Careers", blurb: "Open positions", to: "/about/careers" },
      { label: "Application Status", blurb: "Track your application", to: "/about/application-status" },
    ],
  },
  { label: "E-Showroom", to: "/e-showroom" },
  { label: "Contact", to: "/contact" },
  { label: "Machineries", to: "/machineries", variant: "button" },
  {
    label: "BYD Ethiopia",
    to: "/byd-ethiopia",
    children: [
      { label: "BYD Models", blurb: "Atto 3, Seal, Dolphin", to: "/byd-ethiopia/models" },
      { label: "Charging", blurb: "Home & network charging", to: "/byd-ethiopia/charging" },
      { label: "Book a Test Drive", blurb: "Experience electric", to: "/byd-ethiopia/test-drive" },
    ],
  },
];
