export const actions = {
  updateSearchInput({ commit }, searchInput) {
    console.log("action", searchInput);
    commit("SET_SEARCHINPUT", searchInput);
  },
};
