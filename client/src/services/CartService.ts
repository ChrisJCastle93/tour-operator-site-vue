import { CartItem } from "../types/types";
class LocalStorageService {
  addToLocalStorage = (key: string, value: CartItem): CartItem[] => {
    const cart: string | null = localStorage.getItem(key);
    const parsedCart: CartItem[] = cart ? JSON.parse(cart) : [];

    let cartUpdated = false;

    parsedCart.forEach((item: CartItem) => {
      if (item._id == value._id) {
        item.qty += 1;
        cartUpdated = true;
      }
    });

    if (!cartUpdated) {
      parsedCart.push(value);
    }

    localStorage.setItem(key, JSON.stringify(parsedCart));

    return parsedCart;
  };

  getFromLocalStorage = (key: string): CartItem[] | [] => {
    const cart = localStorage.getItem(key);
    const parsedCart = cart ? JSON.parse(cart) : [];
    return parsedCart;
  };
}

const cartService = new LocalStorageService();

export { cartService };
