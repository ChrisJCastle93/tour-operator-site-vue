class LocalStorageService {
  addToLocalStorage = (key, value) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // const i = cart.forEach((item, index) => {
    //   if (item.id === value.id) return index;
    // });
    // if (i) {
    //   cart[i].qty++;
    // } else {
    cart.push(value);
    // }
    localStorage.setItem(key, JSON.stringify(cart));
  };

  getFromLocalStorage = (key) => {
    const cart = localStorage.getItem(key);
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([]));
      return [];
    // eslint-disable-next-line no-else-return
    } else {
      const parsedCart = JSON.parse(cart);
      return parsedCart;
    }
  };
}

const cartService = new LocalStorageService();

// eslint-disable-next-line import/prefer-default-export
export { cartService };
