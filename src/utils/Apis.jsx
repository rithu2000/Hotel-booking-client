import axios from "axios";

export const userApi = axios.create({
    baseURL: `https://bookingserver.rithu.site/api`,

});

userApi.interceptors.request.use((req) => {
    if (localStorage.getItem("token")) {
        req.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }
    return req; 
});

export const adminAPI = axios.create({
    baseURL: `https://bookingserver.rithu.site/admin`,
});

adminAPI.interceptors.request.use((req) => {
    if (localStorage.getItem("adminToken")) {
        req.headers.Authorization = "Bearer " + localStorage.getItem("adminToken");
    }
    return req;
});

export const cloudApi = axios.create({
    baseURL: `https://api.cloudinary.com/v1_1/dwpnzfkut/image`,
});
