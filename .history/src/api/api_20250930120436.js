import axios from "axios";


const api=axios.create({
    baseURL:"http://localhost:3030",
    withCredentials:true,
});

api.interceptors.request.use((config)=>{
    if(['post','put','patch'].includes(config.method)){
        config.headers["Content-Type"]="application/json";
    }
    return config;
})

export default api;