import { lazy } from "react";
import AdminLayout from "../layouts/AdminLayout.jsx";
import LazyLoad from "../components/LazyLoad.jsx";
import {requireRole} from "../utils/requireRole.js";
import Home from "../pages/admin/Home.jsx";
const About = lazy(() => import("../pages/public/About"));
const Contact = lazy(() => import("../pages/public/Contact"));

export const adminRoutes = {
    path: "/admin",
    Component: AdminLayout,
    loader: requireRole('ROLE_Admin'),
    children: [
        { index: true, Component: LazyLoad(Home) },
        { path: "about", Component: LazyLoad(About) },
        { path: "contact-us", Component: LazyLoad(Contact) },
    ],
};

