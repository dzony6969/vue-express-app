const state = {
  admin: {
    password: "",
    user: "",
    isAdmin: false
  }
};

const mutations = {
  ADMIN_ROLE(state, payload) {
    if (state.password === payload.password && state.user === payload.user) {
      state.isAdmin = true;
    }
  }
};

const getters = {
  admin: state => state.admin
};

export default {
  state,
  mutations,
  getters
};
