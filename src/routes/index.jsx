import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./public.routes.jsx";
import { authRoutes } from "./auth.routes.jsx";
import { adminRoutes } from "./admin.routes.jsx";
import { importateurRoutes } from "./importateur.routes.jsx";
import NotFound from "../pages/NotFound";
import GlobalLayout from "../layouts/GlobalLayout.jsx";

export const router = createBrowserRouter([
    {
        Component: GlobalLayout,
        children: [
            publicRoutes,
            authRoutes,
            adminRoutes,
            importateurRoutes
        ]
    }
    ,
    {
        path: "*",
        Component: NotFound,
    },
]);
