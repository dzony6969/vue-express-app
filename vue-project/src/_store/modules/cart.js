const state = {
  cart: [],
  summary: 0,
  snackbar: false,
  disc: {
    discCode: "nature",
    onlyOneCode: true,
    warning: ""
  }
};
const actions = {
  deleteItem({ commit }, payload) {
    commit("DELETE_CART", payload);
  },
  priceSum({ commit }) {
    commit("PRICE_SUM");
  },
  cleanCart({ commit }) {
    commit("CLEAN_CART");
  },
  discSum({ commit }, payload) {
    commit("PRICE_DISCOUNT", payload);
  },
  checkSumChange({ commit }) {
    commit("CHECK_CHANGES");
  }
};

const mutations = {
  addToCart(state, payload) {
    const record = state.cart.find(element => element.id == payload.id);
    if (!record) {
      return state.cart.push(payload);
    } else {
      state.snackbar = true;
      setTimeout(() => {
        state.snackbar = false;
      }, 6000)
    }
  },
  DELETE_CART(state, payload) {
    const record = state.cart.find(element => element.id == payload.id);
    state.cart.splice(state.cart.indexOf(record), 1);
    return state.summary - record;
  },
  CLEAN_CART(state, payload) {
    state.cart = [];
  },
  PRICE_SUM(state) {
    state.cart.reduce((cur, item) => {
      const sum = cur + item.price;
      return (state.summary = sum);
    }, 0);
  },
  PRICE_DISCOUNT(state, payload) {
    state.summary = state.summary;
    if (payload.toLowerCase() === state.disc.discCode) {
      state.summary *= 0.8;
      state.disc.onlyOneCode = false;
    } else {
      state.disc.warning = "Incorrect code, try again";
      setTimeout(() => {
        state.disc.warning = "";
      }, 3000);
    }
  },
  CHECK_CHANGES(state) {
    if (state.summary++ || state.summary--) {
      state.disc.onlyOneCode = true;
    }
  }
};
const getters = {
  cart: state => state.cart,
  summary: state => state.summary,
  disc: state => state.disc,
  snackbar: state => state.snackbar,
};

export default {
  state,
  actions,
  mutations,
  getters
};
