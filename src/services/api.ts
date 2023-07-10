import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzie-kars-backend-g29.onrender.com",
});

export default api;
