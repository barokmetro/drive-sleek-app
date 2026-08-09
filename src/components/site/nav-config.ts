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
      { label: "Toyota", blurb: "Sedans, SUVs & pickups", to: "/brands/toyota" },
      { label: "Suzuki", blurb: "Compact value mobility", to: "/brands/suzuki" },
      { label: "BYD", blurb: "Electric performance", to: "/brands/byd" },
      { label: "All Brands", blurb: "Full portfolio overview", to: "/brands" },
    ],
  },
  {
    label: "Parts",
    to: "/parts",
    children: [
      { label: "Genuine Parts", blurb: "Factory-spec components", to: "/parts/genuine" },
      { label: "Accessories", blurb: "Personalise your vehicle", to: "/parts/accessories" },
      { label: "Order Parts", blurb: "Request a quote online", to: "/parts/order" },
    ],
  },
  {
    label: "Service",
    to: "/service",
    children: [
      { label: "Book a Service", blurb: "Reserve a bay in minutes", to: "/service/book" },
      { label: "Maintenance Plans", blurb: "Fixed-price servicing", to: "/service/maintenance" },
      { label: "Body & Paint", blurb: "Certified collision repair", to: "/service/body-paint" },
    ],
  },
  {
    label: "CN/HEV",
    to: "/cng-hev",
    children: [
      { label: "Hybrid (HEV)", blurb: "Self-charging efficiency", to: "/cng-hev/hybrid" },
      { label: "CNG Vehicles", blurb: "Lower running costs", to: "/cng-hev/cng" },
      { label: "Technology", blurb: "How the systems work", to: "/cng-hev/technology" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Story", blurb: "Six decades in Ethiopia", to: "/about/story" },
      { label: "Branches", blurb: "Showrooms nationwide", to: "/about/branches" },
      { label: "Careers", blurb: "Join the team", to: "/about/careers" },
      { label: "News", blurb: "Latest announcements", to: "/about/news" },
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
