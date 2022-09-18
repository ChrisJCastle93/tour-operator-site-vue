export const actions = {
  updateReviews({ commit }, reviews) {
    commit("SET_REVIEWS", reviews);
  },
  reviewSubmitted({ commit }, status) {
    commit("SET_REVIEWSUBMITTED", status);
  },
};
