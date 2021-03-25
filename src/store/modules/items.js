import shop from "../../api/shop";

// initial state
const state = () => ({
  all: []
});

// getters
const getters = {};

// actions
const actions = {
  getAllItems({ commit }) {
    shop.getItems((items) => {
      commit("setItems", items);
    });
  }
};

// mutations
const mutations = {
  setItems(state, items) {
    state.all = items;
  },

  decrementItemInventory(state, { id }) {
    const item = state.all.find((item) => item.id === id);
    item.inventory--;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
