import apiClient from "../client";

export const login = async (credentials) => {
    const { data } = await apiClient.post("/auth/login", credentials);
    return data;
};

export const logout = async () => {
    return apiClient.post("/auth/logout");
};

export const getMe = async () => {
    const { data } = await apiClient.get("/auth/me");
    return data;
};

export const refreshToken = async () => {
    const { data } = await apiClient.post("/auth/refresh");
    return data; // new token
};
