import Vue from "vue";
import Vuex from "vuex";
import postService from "../../services/PostsService";
import postModule from "./modules/posts.js";
import orderModule from "./modules/order";
import cartModule from "./modules/cart";
import adminModule from "./modules/admin";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    posts: [],
    comments: 0,
  },
  actions: {
    async getComment({ commit }) {
      const response = await postService.fetchComment();
      const comments = response.data;
      commit("FETCH_COMMENT", comments);
    }
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    DELETE_POST(state, posts) {
      state.posts = posts;
    },
    FETCH_COMMENT(state, comments) {
      state.comments = comments;
    }
  },
  modules: {
    postModule,
    orderModule,
    cartModule,
    adminModule
  }
});
export default store;
