import axios from 'axios';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5005/api',
    });
  }

  createOrder = (order) => {
    console.log('creating order');
    const {
      name, email, cart, total,
    } = order;
  }

  createCheckoutSession = async () => {
    // const res = await axios.post(
    //   `${process.env.REACT_APP_API_URL}/api/payments/create-checkout-session`,
    //   { cartTotal: totalPrice.toFixed(2), id: orderId.data._id },
    // );
    const res = 'creating checkout session';
    return res;
  }

  redirectToOrderStatus = () => {
    console.log('redirecting to order status');
  }
}

const checkoutService = new Service();

export default checkoutService;
