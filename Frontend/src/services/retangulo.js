import axios from "axios";

const retanguloAPI = axios.create({
  baseURL: "http://localhost:5000/api/retangulo",
});

const getRetang = async () => {
  const response = await retanguloAPI.get("/");

  return response.data;
};

export { getRetang };
