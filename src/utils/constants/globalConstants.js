// import Home from "../pages/Home/Home";

import React from "react";

const Home = React.lazy(() => import("../../pages/Home/Home"));
const Blog = React.lazy(() => import("../../pages/Blog/Blog"));
const Faq = React.lazy(() => import("../../pages/Faq/Faq"));
const AuthForm = React.lazy(() => import("../../pages/Auth/AuthForm"));

export const ROUTES_ARR = [
  { name: "Home", component: Home, path: "/" },
  { name: "Shop", component: "", path: "/shop" },
  // {name: "Login", component: Login, path: "/login"},
  // {name: "AuthForm", component: AuthForm, path: "/authform"}
  // { name: "", component: Blog, path: "/blog" },
  // { name: "FAQs", component: Faq, path: "/faqs" },
];

export const HIDDEN_ROUTES = [
  { name: "AuthForm", component: AuthForm, path: "/auth" },
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
  ...HIDDEN_ROUTES
].filter((route) => route.component);

// function for filtering class
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
