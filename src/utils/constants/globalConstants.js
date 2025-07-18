// import Home from "../pages/Home/Home";

import React from "react";

const Home = React.lazy(() => import("../../pages/Home/Home"));
const Blog = React.lazy(() => import("../../pages/Blog/Blog"));
const Faq = React.lazy(() => import("../../pages/Faq/Faq"));

export const ROUTES_ARR = [
  { name: "Home", component: Home, path: "/" },
  { name: "Shop", component: "", path: "/shop" },
  // { name: "", component: Blog, path: "/blog" },
  // { name: "FAQs", component: Faq, path: "/faqs" },
];

export const ABOUT_ROUTES = [
  { name: "Company", component: "", path: "/" },
  { name: "Careers", component: "", path: "/" },
  { name: "Blogs", component: Blog, path: "/blog" },
];

export const SUPPORT_ROUTES = [
  { name: "Contact Support", component: "", path: "/" },
  { name: "Help Resources", component: "", path: "/" },
  { name: "Release Updates", component: "", path: "/" },
];

export const PLATFORM_ROUTES = [
  { name: "Terms & Privacy", component: "", path: "/" },
  { name: "Pricing", component: "", path: "/" },
];

export const HELP_ROUTES = [
  { name: "Send a Message", component: "", path: "/" },
  { name: "Request a Quote", component: "", path: "/" },
  { name: "FAQs", component: Faq, path: "/faqs" },
];

export const MERGED_ROUTES = [
  ...ROUTES_ARR,
  ...ABOUT_ROUTES,
  ...SUPPORT_ROUTES,
  ...PLATFORM_ROUTES,
  ...HELP_ROUTES,
].filter((route) => route.component);

// function for filtering class
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
