import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestatewebsitebackend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;