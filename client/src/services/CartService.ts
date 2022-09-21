class LocalStorageService {
  addToLocalStorage = (key: string, value: unknown): void => {
    // TO DO: get current cart, push to it, then set it
    console.log("adding to local", key, value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  getFromLocalStorage = (key: string) => {
    let cart = localStorage.getItem(key);
    cart = cart ? JSON.parse(cart) : [];
    console.log("cart in service: ", Array.isArray(cart));
    return cart;
    // console.log("getting from local storage");
    // const cart = localStorage.getItem(key);
    // if (!cart) {
    //   console.log("SET local storage as []");
    //   localStorage.setItem("cart", []);
    //   // localStorage.setItem("cart", JSON.stringify([]));
    //   return [];
    // } else {
    //   const parsedCart = JSON.parse(cart);
    //   return Array(parsedCart);
    // }
  };
}

const cartService = new LocalStorageService();

export { cartService };
