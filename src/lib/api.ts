import axios from "axios";

const api = axios.create({
	baseURL: "/api",
});

api.defaults.timeout = 2500;

export default api;
