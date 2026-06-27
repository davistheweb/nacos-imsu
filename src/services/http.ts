import axios, { AxiosError, AxiosResponse } from "axios";

const API_BASE_URL =
  (process.env.NEXT_PUBLIC_API_BASE_URL as string) ?? "http://localhost:8000";

export const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
  timeout: 30_000,
});

http.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err),
);

http.interceptors.response.use(
  (r: AxiosResponse) => r,
  (error: AxiosError) => Promise.reject(error),
);

export default http;
