/* eslint-disable no-console */
import { createStore } from 'vuex';
import TourService from '../../services/TourService';

export default createStore({
  state: {
    tours: [],
    selectedTour: '',
  },
  getters: {},
  mutations: {
    SET_TOURS(state, tours) {
      state.tours = tours;
    },
    SET_SELECTEDTOUR(state, selectedTour) {
      state.selectedTour = selectedTour;
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
  },
  modules: {},
});
