import { createStore } from "vuex";
import tours from "./modules/tours";
import search from "./modules/search";
import reviews from "./modules/reviews";
import orderfinder from "./modules/order-finder";
import cart from "./modules/cart";

const store = createStore({
  modules: {
    tours: tours,
    search: search,
    reviews: reviews,
    orderfinder: orderfinder,
    cart: cart,
  },
});

export default store;
