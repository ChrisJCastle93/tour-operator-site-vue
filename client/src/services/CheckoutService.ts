import axios, { AxiosInstance } from "axios";
import store from "../store/index";
import { Order } from "../types/types";

class Service {
  service: AxiosInstance;

  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5005/api/checkout",
    });
  }

  findOrder(name: string, reference: string): void {
    this.service
      .post("/find-order", { name, id: reference })
      .then((response) => {
        store.dispatch("updateFoundBooking", response.data);
      })
      .catch((error) => console.log(error));
  }

  createOrder(order: Order): string | void {
    this.service
      .post("/create-order", order)
      .then((response) => response.data.toString())
      .catch((error) => console.log(error));
  }

  createCheckoutSession(cartTotal: number, orderId: string): string | void {
    this.service
      .post("/create-checkout-session", {
        cartTotal: cartTotal.toFixed(2),
        id: orderId,
      })
      .then((response) => window.location.assign(response.data.url))
      .catch((error) => console.log(error));
  }
}

const checkoutService = new Service();

export default checkoutService;
