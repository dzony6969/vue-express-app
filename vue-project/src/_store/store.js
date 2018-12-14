import Vue from 'vue'
import Vuex from 'vuex'

import postModule from './modules/posts.js'
import orderModule from './modules/order'
import cartModule from './modules/cart'
import adminModule from './modules/admin'
Vue.use(Vuex)
const store = new Vuex.Store({

  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    DELETE_POST (state, posts) {
      state.posts = posts
    },
  },
  modules: {
    postModule,
    orderModule,
    cartModule,
    adminModule,
  }

  })
  export default store