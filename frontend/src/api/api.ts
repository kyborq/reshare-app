import axios from "axios";
import { refreshAccess } from "./services/authService";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       await refreshAccess();
//     }
//   }
// );
