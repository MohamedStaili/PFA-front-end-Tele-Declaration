import apiClient from "../client";

export const getOperateurs = async () => {
    const { data } = await apiClient.get("/operateurs");
    return data;
};

export const getOperateurById = async (id) => {
    const { data } = await apiClient.get(`/operateurs/${id}`);
    return data;
};

export const createOperateur = async (operateur) => {
    const { data } = await apiClient.post("/operateurs", operateur);
    return data;
};

export const deleteOperateur = async (id) => {
    const { data } = await apiClient.delete(`/operateurs/${id}`);
    return data;
};
