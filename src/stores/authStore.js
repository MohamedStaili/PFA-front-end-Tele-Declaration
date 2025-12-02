import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    roles: [],
    isLogged: false,
    setUser: (user) => set({
        user,
    roles: user?.roles | [],
    isLogged: true,
    }),
    logout: () => {
        set({
            user: null,
            roles: [],
            isLogged: false,
        });
    },
}));

export default useAuthStore;
