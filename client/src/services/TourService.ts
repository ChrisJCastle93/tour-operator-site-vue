import axios, { AxiosResponse } from "axios";
import { Tour } from "../types/types";

const apiClient = axios.create({
  baseURL: "http://localhost:5005/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getTours(): Promise<Tour[]> {
    return apiClient.get("/tours");
  },

  getTour(id: string): Promise<Tour> {
    return apiClient.get(`/tours/${id}`);
  },

  searchTours(query: string): Promise<AxiosResponse> {
    return apiClient.get(`/tours?query=${query}`);
  },
};
