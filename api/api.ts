import axios from "axios";

const api = axios.create({
  baseURL: "/api/v1/",
});

api.defaults.timeout = 10000;

api.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error)
);

export default api;
