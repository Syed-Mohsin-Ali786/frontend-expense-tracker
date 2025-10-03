import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030", // backend base URL
});

api.interceptors.request.use((config) => {
  // Add JSON header for write requests
  if (config.method && ["post", "put", "patch"].includes(config.method)) {
    config.headers["Content-Type"] = "application/json";
  }

  // Attach token if available
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default api;
