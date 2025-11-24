import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Exemple d’interception pour ajouter le token JWT
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // ou cookie
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;