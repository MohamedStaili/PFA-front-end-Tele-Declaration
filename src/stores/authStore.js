import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    token: localStorage.getItem("token"),
    setUser: (user) => set({ user }),
    setToken: (token) => {
        localStorage.setItem("token", token);
        set({ token });
    },
    logout: () => {
        localStorage.removeItem("token");
        set({ token: null, user: null });
    },
}));

export default useAuthStore;
