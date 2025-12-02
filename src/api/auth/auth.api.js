import apiClient from "../client";

export const login = async (credentials) => {
    const { data } = await apiClient.post("/v1/auth/login", credentials);
    return data;
};

export const logout = async () => {
    return apiClient.post("/v1/auth/logout");
};

export const getMe = async () => {
    const response = await apiClient.get("/v1/accounts/me");
    //console.log(response.data);
    return response.data;
};


export const refreshToken = async () => {
    const { data } = await apiClient.post("/auth/refresh");
    return data; // new token
};
