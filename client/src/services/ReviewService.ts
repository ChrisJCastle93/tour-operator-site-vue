import { Review } from "@/types/types";
import axios, { AxiosInstance } from "axios";
import store from "../store/index";

class Service {
  service: AxiosInstance;

  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5005/api/reviews",
    });
  }

  getReviews(): void {
    this.service
      .get("/")
      .then((response) => {
        store.dispatch("updateReviews", response.data);
      })
      .catch((error) => console.log(error));
  }

  postReview(review: Review): void {
    this.service
      .post("/new", review)
      .then(() => {
        store.dispatch("reviewSubmitted", true);
      })
      .catch((error) => console.log(error));
  }
}

const reviewService = new Service();

export default reviewService;
