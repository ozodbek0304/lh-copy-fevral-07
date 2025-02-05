import axios from "axios";
// import { useStorage } from "./storage";

// export const baseURL = "https://apislandhouse.pythonanywhere.com";
export const baseURL = "http://188.225.24.22:8082";


const requestAuth = axios.create({
  baseURL,
  timeout: 100000,
});

const errorHandler = (error) => {
  const status = error.response?.status;

  if (status === 403) {
    console.error('Unauthorized access (403)');
  } else if (status === 401) {
    console.error('Unauthorized request (401)');
  }

  return Promise.reject(error.response);
};

requestAuth.interceptors.request.use(
  config => {
    config.headers.lang = localStorage.getItem("lng") || "ru"

    const token = localStorage.getItem("access_token")
    if (token?.length > 1) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }
);

requestAuth.interceptors.response.use(
  (response) => response.data,
  errorHandler
);

export default requestAuth;