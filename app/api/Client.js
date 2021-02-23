import { create } from "apisauce";
import cache from "../utilities/cache";

const apiClient = create({
  baseURL: "http://192.168.155.3:9000/api",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const respose = await get(url, params, axiosConfig);

  if (respose.ok) {
    cache.store(url, respose.data);
    return respose;
  }

  console.log("Getting from cache");

  const data = await cache.get(url);
  return data ? { data: data.value, ok: true } : respose;
};

export default apiClient;
