import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5005/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getTours() {
    return apiClient.get("/tours");
  },

  getTour(id) {
    return apiClient.get(`/tours/${id}`);
  },

  searchTours(query) {
    return apiClient.get(`/tours?query=${query}`);
  },
};
