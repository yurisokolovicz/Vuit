import axios from "axios";

const hibridoAPI = axios.create({
  baseURL: "http://localhost:5000/api/hibrido",
});

const getHibrido = async () => {
  const response = await hibridoAPI.get("/");

  return response.data;
};

export { getHibrido };
