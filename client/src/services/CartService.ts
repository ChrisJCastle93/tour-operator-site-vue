class LocalStorageService {
  addToLocalStorage = (key, value) => {
    let cart = localStorage.getItem(key);
    cart = cart ? JSON.parse(cart) : [];

    let cartUpdated = false;

    cart.forEach((item) => {
      if (item._id == value._id) {
        item.qty += 1;
        cartUpdated = true;
      }
    });

    if (!cartUpdated) {
      cart.push(value);
    }

    localStorage.setItem(key, JSON.stringify(cart));

    return cart;
  };

  getFromLocalStorage = (key) => {
    let cart = localStorage.getItem(key);
    cart = cart ? JSON.parse(cart) : [];
    return cart;
  };
}

const cartService = new LocalStorageService();

export { cartService };
