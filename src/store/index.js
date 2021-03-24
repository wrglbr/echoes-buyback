import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import items from "./modules/items";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    items
  },
  actions: {
    async getItems({}) {}
  }
});
