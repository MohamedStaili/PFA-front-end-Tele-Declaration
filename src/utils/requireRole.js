import useAuthStore from "../stores/authStore.js";
import { redirect } from "react-router-dom";

export function requireRole(allowedRoles = []) {
    return async () => {
        const { token, user } = useAuthStore.getState();

        if (!token) {
            return redirect("/auth/login");
        }

        if (!user) {
            return redirect("/auth/login");
        }

        if (!allowedRoles.includes(user.role)) {
            return redirect("/not-authorized");
        }

        return null;
    };
}
