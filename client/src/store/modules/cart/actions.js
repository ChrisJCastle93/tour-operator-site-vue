import { cartService } from "../../../services/CartService";

export const actions = {
  fetchCart({ commit }) {
    const cart = cartService.getFromLocalStorage("cart");
    console.log("typeof cart in actions", Array.isArray(cart));
    if (!cart.length) {
      commit("SET_CART", []);
    } else {
      commit("SET_CART", cart);
    }
  },
  addToCart({ commit }, selectedTour) {
    const cart = cartService.getFromLocalStorage("cart");
    const newCart = [...cart];
    const cartProduct = {
      ...selectedTour[0],
      qty: 1,
    };
    let cartUpdated = false;

    newCart.forEach((item) => {
      if (item.id == cartProduct.id) {
        item.qty += 1;
        cartService.addToLocalStorage("cart", JSON.stringify(newCart));
        cartUpdated = true;
      }
    });

    if (!cartUpdated) {
      newCart.push(cartProduct);
      cartService.addToLocalStorage("cart", JSON.stringify(newCart));
    }

    commit("SET_CART", newCart);
  },
};
