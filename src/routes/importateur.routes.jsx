import { lazy } from "react";
import ImportateurLayout from "../layouts/ImportateurLayout.jsx";

const Home = lazy(() => import("../pages/importateur/Home"));
const About = lazy(() => import("../pages/public/About"));
const Contact = lazy(() => import("../pages/public/Contact"));

import LazyLoad from "../components/LazyLoad.jsx";
import {requireRole} from "../utils/requireRole.js";
export const importateurRoutes = {
    path: "/importateur",
    Component: ImportateurLayout,
    loader: requireRole(['importateur']),
    children: [
        { index: true, Component: LazyLoad(Home) },
        { path: "about", Component: LazyLoad(About) },
        { path: "contact-us", Component: LazyLoad(Contact) },
    ],
};
