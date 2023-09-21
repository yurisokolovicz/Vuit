import axios from "axios";

const listaAPI = axios.create({ baseURL: "http://localhost:5000/api/lista" });

const getLista = async () => {
  const response = await listaAPI.get("/");

  return response.data;
};

export { getLista };
