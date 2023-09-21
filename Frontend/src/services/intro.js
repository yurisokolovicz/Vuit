import axios from "axios";

const introAPI = axios.create({ baseURL: "http://localhost:5000/intro" });

const getIntro = () => {
  const response = introAPI.get("/");

  return response.data;
};

export { getIntro };
