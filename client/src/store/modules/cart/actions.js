import { cartService } from "../../../services/CartService";

export const actions = {
  fetchCart({ commit }) {
    const cart = cartService.getFromLocalStorage("cart");
    commit("SET_CART", cart);
  },

  addToCart({ commit }, selectedTour) {
    selectedTour[0].qty = 1;
    const updatedCart = cartService.addToLocalStorage("cart", selectedTour[0]);
    commit("SET_CART", updatedCart);
  },
};
