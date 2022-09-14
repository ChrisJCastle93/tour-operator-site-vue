type Paid = {
    type: 'boolean';
    default: boolean;
}

interface OrderInt {
  id: string;
  products: [Object];
    paid: Paid;
  name: string;
  email: string;
}

export default OrderInt;
