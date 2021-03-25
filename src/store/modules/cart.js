import shop from "../../api/shop";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
});

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const item = rootState.items.all.find((item) => item.id === id);
      return {
        title: item.title,
        price: item.price,
        quantity
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
};

// actions
const actions = {
  checkout({ commit, state }, items) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
    shop.buyItems(
      items,
      () => commit("setCheckoutStatus", "successful"),
      () => {
        commit("setCheckoutStatus", "failed");
        // rollback to the cart saved before sending the request
        commit("setCartItems", { items: savedCartItems });
      }
    );
  },

  addItemToCart({ state, commit }, item) {
    commit("setCheckoutStatus", null);
    if (item.inventory > 0) {
      const cartItem = state.items.find((item) => item.id === item.id);
      if (!cartItem) {
        commit("pushItemToCart", { id: item.id });
      } else {
        commit("incrementItemQuantity", cartItem);
      }
      // remove 1 item from stock
      commit("items/decrementItemInventory", { id: item.id }, { root: true });
    }
  }
};

// mutations
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    cartItem.quantity++;
  },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
