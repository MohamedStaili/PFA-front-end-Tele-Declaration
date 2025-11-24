import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import LazyLoad from "../components/LazyLoad.jsx";


const Home = lazy(() => import("../pages/public/Home"));
const About = lazy(() => import("../pages/public/About"));
const Contact = lazy(() => import("../pages/public/Contact"));

export const publicRoutes = {
    path: "/",
    Component: RootLayout,
    children: [
        { index: true, Component: LazyLoad(Home) },
        { path: "about", Component: LazyLoad(About) },
        { path: "contact-us", Component: LazyLoad(Contact) },
    ],
};
