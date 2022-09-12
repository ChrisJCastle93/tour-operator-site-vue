import axios from 'axios';
import store from '../src/store/index';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5005/api/checkout',
    });
  }

  findOrder(name, reference) {
    console.log('finding order');
    this.service.post('/find-order', { name, id: reference }).then((response) => {
      console.log(response.data);
      console.log('UPDATING STATE');
      store.dispatch('updateFoundBooking', response.data);
    }).catch((error) => console.log(error));
  }

  createOrder(order) {
    this.service.post('/create-order', order).then((response) => response.data).catch((error) => console.log(error));
  }

  createCheckoutSession(cartTotal, orderId) {
    this.service.post(
      '/create-checkout-session',
      { cartTotal: cartTotal.toFixed(2), id: orderId },
    )
      .then((response) => window.location.assign(response.data.url))
      .catch((error) => console.log(error));
  }
}

const checkoutService = new Service();

export default checkoutService;
