class LocalStorageService {
  addToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getFromLocalStorage = (key) => {
    const cart = localStorage.getItem(key);
    const parsedCart = JSON.parse(cart);
    return parsedCart;
  };
}

const cartService = new LocalStorageService();

// eslint-disable-next-line import/prefer-default-export
export { cartService };
