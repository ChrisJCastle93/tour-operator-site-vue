class LocalStorageService {
  addToLocalStorage = (key, value) => {
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  getFromLocalStorage = (key) => {
    const cart = localStorage.getItem(key);
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([]));
      return [];
      // eslint-disable-next-line no-else-return
    } else {
      const parsedCart = JSON.parse(cart);
      console.log(parsedCart);
      return parsedCart;
    }
  };
}

const cartService = new LocalStorageService();

// eslint-disable-next-line import/prefer-default-export
export { cartService };
