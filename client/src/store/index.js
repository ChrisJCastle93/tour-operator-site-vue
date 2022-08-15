/* eslint-disable no-console */
import { createStore } from 'vuex';
import TourService from '../../services/TourService';

export default createStore({
  state: {
    tours: [],
    selectedTour: '',
    searchInput: '',
    testString: 'hello',
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
  },
  modules: {},
});
