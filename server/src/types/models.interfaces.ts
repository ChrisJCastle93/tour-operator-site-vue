import mongoose from "mongoose";
interface OrderInterface {
  id: string;
  products: Object[];
  paid: boolean;
  name: string;
  email: string;
}

interface ReviewInterface {
  name: string;
  rating: number;
  review: string;
  tour: mongoose.Types.ObjectId;
}

interface ToursInterface {
  title: string;
  city: string;
  images: string[];
  price: number;
  summary: string;
  duration: number;
  freeCancellation: boolean;
  highlights: string[];
  fullDescription: string[];
  reviews: mongoose.Types.ObjectId;
}

export { OrderInterface, ReviewInterface, ToursInterface };
