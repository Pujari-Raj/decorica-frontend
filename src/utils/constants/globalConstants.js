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
  { name: "Blog", component: Blog, path: "/blog" },
  { name: "FAQs", component: Faq, path: "/faqs" },
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
  ...HIDDEN_ROUTES,
].filter((route) => route.component);

// function for filtering class
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// adding productCatgeories constant

export const categories = [
  { name: "Vases", image: "assets/productimages/vase-banner.jpg" },
  { name: "Planters", image: "assets/productimages/planter-banner.jpg" },
  { name: "Lights", image: "assets/productimages/lights-banner.jpg" },
  { name: "Photo Frames", image: "assets/productimages/pframe-banner.jpg" },
  { name: "Mirrors", image: "assets/productimages/mirror-banner.jpg" },
];

export const mostwantedCategories = [
  {
    image: "assets/productimages/sculpture-img.jpg",
    title: "Sculptural vase",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/chandelier.jpg",
    title: "Chandeliers",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/plastic-plant.jpg",
    title: "Plastic Plants Pots",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/galleryframe.webp",
    title: "Gallery Frame",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/decorative-light.webp",
    title: "Decorative Mirrors",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/wall-scone.jpg",
    title: "Wall Scone Lights",
    description: "25+ Options, Explore Starting ₹9849",
  },
];