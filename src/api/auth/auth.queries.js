import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {login, getMe, logout} from "./auth.api";
import { queryKeys } from "../queryKeys";
import useAuthStore from "../../stores/authStore.js";

export const useMe = () => {
    const {setUser} = useAuthStore();
    return useQuery({
        queryKey: [queryKeys.me],
        queryFn: getMe,
        enabled: false,
        onSuccess: ({data}) => {
            setUser(data);
        }
    });
}

export const useLogin = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: login,
        onSuccess: () => {
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
