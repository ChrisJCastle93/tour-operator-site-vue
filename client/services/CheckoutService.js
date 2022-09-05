import axios from 'axios';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5005/api/checkout',
    });
  }

  createOrder = (order) => {
    this.service.post('/create-order', order).then((response) => response.data).catch((error) => {
      console.log(error);
    });
  };

  createCheckoutSession = (cartTotal, orderId) => {
    this.service.post(
      '/create-checkout-session',
      { cartTotal: cartTotal.toFixed(2), id: orderId },
    )
      .then((response) => window.location.assign(response.data.url))
      .catch((error) => console.log(error));
  }

  redirectToOrderStatus = () => {
    console.log('redirecting to order status');
  }
}

const checkoutService = new Service();

export default checkoutService;
