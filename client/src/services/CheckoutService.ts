import axios from "axios";
import store from "../store/index";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5005/api/checkout",
    });
  }

  findOrder(name, reference) {
    this.service
      .post("/find-order", { name, id: reference })
      .then((response) => {
        console.log(response.data);
        store.dispatch("updateFoundBooking", response.data);
      })
      .catch((error) => console.log(error));
  }

  createOrder(order: Order) {
    this.service
      .post("/create-order", order)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }

  createCheckoutSession(cartTotal: number, orderId: string) {
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
