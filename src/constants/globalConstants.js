// import Home from "../pages/Home/Home";

import React from "react";

const Home = React.lazy(() => import("../pages/Home/Home"));

export const ROUTES_ARR  = [
    { name: "Home", component: Home, path: "/" },
    { name: "Shop", component: "", path: "/shop" },
    // { name: "Blog", component: "", path: "/blog" },
    // { name: "FAQs", component: "", path: "/faqs" },
]

export const ABOUT_ROUTES = [
    { name: "Company", component: "", path: "/" },
    { name: "Careers", component: "", path: "/" },
    { name: "Blogs", component: "", path: "/blog" },  
]

export const SUPPORT_ROUTES = [
    { name: "Contact Support", component: "", path: "/" },
    { name: "Help Resources", component: "", path: "/" },
    { name: "Release Updates", component: "", path: "/" },  
]

export const PLATFORM_ROUTES = [
    { name: "Terms & Privacy", component: "", path: "/" },
    { name: "Pricing", component: "", path: "/" },
]

export const HELP_ROUTES = [
    { name: "Send a Message", component: "", path: "/" },
    { name: "Request a Quote", component: "", path: "/" },
    { name: "FAQs", component: "", path: "/" },   
]
