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
  reviews: Object[];
}

export { Tour };
