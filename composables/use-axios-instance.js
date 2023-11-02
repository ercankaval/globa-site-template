import axios from "axios";

let instance = null;

export const useAxiosInstance = () => {
    const config = useRuntimeConfig()

    if (!instance) {
        instance = axios.create({
            baseURL: config.public.apiBase,
        });

        instance.interceptors.response.use((response) => {
            return response.data;
        });
    }

    return instance;
};