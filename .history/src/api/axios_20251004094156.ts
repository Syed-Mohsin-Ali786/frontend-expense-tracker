import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030",
  
});

// Add token automatically for every request
api.interceptors.request.use((config) => {
  if (config.method && ["post", "put", "patch"].includes(config.method)) {
    config.headers["Content-Type"] = "application/json";
  }

  // ✅ Attach JWT token from localStorage
  const token = localStorage.getItem("token");
  console.log(token);
  
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default api;
