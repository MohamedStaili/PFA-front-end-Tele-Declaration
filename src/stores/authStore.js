import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => {
        localStorage.removeItem("token");
        set({ token: null, user: null });
    },
}));

export default useAuthStore;
