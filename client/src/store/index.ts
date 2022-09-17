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
    test: '',
    foundBooking: {},
    reviews: [],
    reviewSubmitted: false,
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
    SET_FOUNDBOOKING(state, booking) {
      state.foundBooking = booking;
    },
    SET_REVIEWS(state, reviews) {
      state.reviews = reviews;
    },
    SET_TEST(state, test) {
      console.log('MUTATION: ', test);
      state.test = test;
    },
    SET_REVIEWSUBMITTED(state, status) {
      state.reviewSubmitted = status;
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
          const tour = response.data[0];
          tour.reviews = tour.reviews.filter(Boolean);
          console.log(tour);
          commit('SET_SELECTEDTOUR', response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    updateSearchInput({ commit }, searchInput) {
      commit('SET_SEARCHINPUT', searchInput);
    },
    updateTours({ commit }, tours) {
      commit('SET_TOURS', tours);
    },
    updateReviews({ commit }, reviews) {
      commit('SET_REVIEWS', reviews);
    },
    updateFoundBooking({ commit }, booking) {
      commit('SET_FOUNDBOOKING', booking);
    },
    reviewSubmitted({ commit }, status) {
      commit('SET_REVIEWSUBMITTED', status);
    },
    test({ commit }, string) {
      console.log('ACTION: ', string);
      commit('SET_TEST', string);
    },
    fetchCart({ commit }) {
      const cart = cartService.getFromLocalStorage('cart');
      if (!cart.length) {
        commit('SET_CART', []);
      } else {
        commit('SET_CART', cart);
      }
    },
    addToCart({ commit }, selectedTour) {
      const cart = cartService.getFromLocalStorage('cart');

      // eslint-disable-next-line no-unused-vars
      const newCart = [...cart];
      // eslint-disable-next-line no-unused-vars
      const cartProduct = {
        ...selectedTour[0],
        qty: 1,
      };

      // eslint-disable-next-line prefer-const
      let cartUpdated = false;

      newCart.forEach((item) => {
        // eslint-disable-next-line eqeqeq
        if (item.id == cartProduct.id) {
          // eslint-disable-next-line no-param-reassign
          item.qty += 1;
          localStorage.setItem('cart', JSON.stringify(newCart));
          cartUpdated = true;
        }
      });

      if (!cartUpdated) {
        newCart.push(cartProduct);
        localStorage.setItem('cart', JSON.stringify(newCart));
      }

      commit('SET_CART', newCart);
    },
  },
  modules: {},
});