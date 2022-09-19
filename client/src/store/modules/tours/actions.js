import TourService from "../../../services/TourService";

export const actions = {
  fetchTours({ commit }) {
    TourService.getTours()
      .then((response) => {
        commit("SET_TOURS", response.data);
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
        commit("SET_SELECTEDTOUR", response.data);
      })
      .catch((error) => {
        throw error;
      });
  },
  updateTours({ commit }, tours) {
    commit("SET_TOURS", tours);
  },
};
