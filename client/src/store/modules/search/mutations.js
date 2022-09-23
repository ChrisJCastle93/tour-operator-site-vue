export const mutations = {
  SET_SEARCHINPUT(state, searchInput) {
    console.log("mutation", searchInput);
    state.searchInput = searchInput;
  },
};
