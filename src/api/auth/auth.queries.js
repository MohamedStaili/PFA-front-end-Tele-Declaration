import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {login, getMe, logout} from "./auth.api";
import { queryKeys } from "../queryKeys";
import useAuthStore from "../../stores/authStore.js";

export const useMe = () =>
    useQuery({
        queryKey: [queryKeys.me],
        queryFn: getMe,
        enabled: !!localStorage.getItem("token"),
    });

export const useLogin = () => {
    const qc = useQueryClient();
    const { setToken, setUser } = useAuthStore();

    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            setToken(data.token);
            setUser(data.user);
            qc.invalidateQueries([queryKeys.me]);
        },
    });
};
export const useLogout = () => {
    const qc = useQueryClient();
    const authStore = useAuthStore();
    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            authStore.logout();
            qc.invalidateQueries([queryKeys.me]);
        }
    });
}
