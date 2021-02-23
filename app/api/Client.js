import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.155.3:9000/api",
});

export default apiClient;
