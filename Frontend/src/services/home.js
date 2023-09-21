import axios from "axios";

const homeAPI = axios.create({ baseURL: "http://localhost:5000/api/home" });

const getHome = async () => {
  const response = await homeAPI.get("/");

  return response.data;
};

export { getHome };
