import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Shop = React.lazy(() => import("../pages/Shop"));
const Blog = React.lazy(() => import("../pages/Blogs"));
const FAQs = React.lazy(() => import("../pages/FAQs"));
// const Products = React.lazy(() => import('../pages/Products'));
// const Login = React.lazy(() => import('../pages/Login'));

export const ROUTES_ARR = [
    { name: "Home", component: Home, path: "/" },
    { name: "Shop", component: Shop, path: "/shop" },
    { name: "Blog", component: Blog, path: "/blog" },
    { name: "FAQs", component: FAQs, path: "/faqs" },
]