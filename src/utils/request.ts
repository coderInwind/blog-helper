import axios from "axios";
import { AxiosRequestConfig } from "axios";

export default function request(config: AxiosRequestConfig) {
  return axios.request({
    baseURL: "http://localhost:3000",
    ...config,
  });
}
