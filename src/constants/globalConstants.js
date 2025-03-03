// import Home from "../pages/Home/Home";

import React from "react";

const Home = React.lazy(() => import("../pages/Home/Home"));

export const ROUTES_ARR  = [
    { name: "Home", component: Home, path: "/" },
    { name: "Shop", component: "", path: "/shop" },
    { name: "Blog", component: "", path: "/blog" },
    { name: "FAQs", component: "", path: "/faqs" },
]