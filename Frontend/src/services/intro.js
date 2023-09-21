import axios from "axios";

const introAPI = axios.create({ baseURL: "http://localhost:5000/intro" });

const getIntro = async () => {
  const response = await introAPI.get("/");

  return response.data;
};

export { getIntro };
