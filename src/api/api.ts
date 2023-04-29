import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.defaults.timeout = 3000;

api.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error)
);

export default api;
