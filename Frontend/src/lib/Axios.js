import axios from 'axios'

export const api = axios.create({
    baseURL: "https://realtime-chat-video-calling-app.onrender.com/api",
    withCredentials:true,
    headers: {
    "Content-Type": "application/json", 
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
