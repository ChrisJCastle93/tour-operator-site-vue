/* eslint-disable no-console */
import { createStore } from 'vuex';
import TourService from '../../services/TourService';
import { cartService } from '../../services/CartService';

export default createStore({
  state: {
    tours: [],
    selectedTour: '',
    searchInput: '',
    cart: [],
  },
  getters: {},
  mutations: {
    SET_TOURS(state, tours) {
      state.tours = tours;
    },
    SET_SELECTEDTOUR(state, selectedTour) {
      state.selectedTour = selectedTour;
    },
    SET_SEARCHINPUT(state, searchInput) {
      state.searchInput = searchInput;
    },
    SET_CART(state, cart) {
      state.cart = cart;
    },
    ADD_TO_CART(state, selectedTour) {
      console.log('ADD TO CART MUTATION');
      state.cart.push(selectedTour);
    },
  },
  actions: {
    fetchTours({ commit }) {
      TourService.getTours()
        .then((response) => {
          commit('SET_TOURS', response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchTour({ commit }, id) {
      TourService.getTour(id)
        .then((response) => {
          commit('SET_SELECTEDTOUR', response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    updateSearchInput({ commit }, searchInput) {
      commit('SET_SEARCHINPUT', searchInput);
    },
    fetchCart({ commit }) {
      const cart = cartService.getFromLocalStorage('cart');
      if (!cart.length) {
        const resetCart = [];
        cartService.addToLocalStorage('cart', resetCart);
        commit('SET_CART', []);
      } else {
        commit('SET_CART', cart);
      }
    },
    addToCart({ commit }, selectedTour) {
      cartService.addToLocalStorage('cart', selectedTour[0]);
      commit('ADD_TO_CART', selectedTour[0]);
    },
  },
  modules: {},
});
