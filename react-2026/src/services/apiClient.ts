import axios, { type AxiosInstance } from "axios";
import { AppConfig } from "../config/app-env";

//Custom Axios
const axiosInstance: AxiosInstance = axios.create({
  baseURL: AppConfig.apiBaseUrl,
  timeout: 30000,   //30 second
  timeoutErrorMessage: "Server timed out...",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  }
});

// interceptors -> req, res
export default axiosInstance;