import axios from "axios";

const carsApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
});

export default carsApi;
