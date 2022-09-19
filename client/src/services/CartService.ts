class LocalStorageService {
  addToLocalStorage = (key: string, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getFromLocalStorage = (key: string) => {
    const cart = localStorage.getItem(key);
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    } else {
      const parsedCart = JSON.parse(cart);
      return parsedCart;
    }
  };
}

const cartService = new LocalStorageService();

export { cartService };
