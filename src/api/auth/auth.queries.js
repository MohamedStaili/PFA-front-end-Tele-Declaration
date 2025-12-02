import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {login, getMe, logout} from "./auth.api";
import { queryKeys } from "../queryKeys";
import useAuthStore from "../../stores/authStore.js";

export const useMe = () => {
    const authStore = useAuthStore();
    return useQuery({
        queryKey: [queryKeys.me],
        queryFn: getMe,
        retry: false,
        staleTime: 5 * 60 * 1000,
        onSuccess: (user) => {
            authStore.setUser(user);
        },
        onError: () => authStore.logout(),
    });
}

export const useLogin = () => {
    const qc = useQueryClient();
    const authStore = useAuthStore();
    return useMutation({
        mutationFn: login,
        onSuccess: async () => {
            const user= await qc.fetchQuery({
                queryKey: [queryKeys.me],
                queryFn: getMe,
            })
           // console.log(user);
            authStore.setUser(user);
            return {user};
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
            qc.removeQueries();
        }
    });
}
