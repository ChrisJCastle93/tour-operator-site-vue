interface Tour {
  title: string;
  city: string;
  images: string[];
  price: number;
  summary: string;
  duration: number;
  freeCancellation: boolean;
  highlights: string[];
  fullDescription: string;
  reviews: Review[];
  createdAt?: Date;
  updatedAt?: Date;
  _id: string;
}
interface CartItem {
  _id: string;
  title: string;
  city: string;
  images: string[];
  price: number;
  summary: string;
  duration: number;
  freeCancellation: boolean;
  highlights: string[];
  fullDescription: string;
  reviews?: Review[];
  createdAt?: Date;
  updatedAt?: Date;
  qty: number;
}

interface Review {
  name: string;
  rating: number;
  review: string;
  tour: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface Order {
  id?: string;
  products?: Tour[];
  paid?: {
    type: string;
    default: boolean;
  };
  name: string;
  email: string;
  cart: CartItem[];
  total: number;
}

export { Tour, CartItem, Order, Review };
