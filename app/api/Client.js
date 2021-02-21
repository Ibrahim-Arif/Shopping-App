import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.155.58:9000/api",
});

export default apiClient;
