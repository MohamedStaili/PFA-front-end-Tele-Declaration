import { lazy } from "react";
import AuthLayout from "../layouts/AuthLayout";
import LazyLoad from "../components/LazyLoad.jsx";

const Login = lazy(() => import("../pages/auth/Login.jsx"));

export const authRoutes = {
    path: "/auth",
    Component: AuthLayout,
    children: [{ path: "login", Component: LazyLoad(Login) },],
};
