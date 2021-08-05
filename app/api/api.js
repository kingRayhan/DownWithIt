import { create } from "apisauce";
import cache from "../utilitirs/cache";

const api = create({
  baseURL: "https://downwithit-api.herokuapp.com/api",
});

const get = api.get;

api.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  if (!response.ok) {
    const data = await cache.get(url);
    return { data: data, ok: true };
  }
};

export default api;
