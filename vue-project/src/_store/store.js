import Vue from 'vue'
import Vuex from 'vuex'
import PostsService from '../../services/PostsService'
Vue.use(Vuex)
const store = new Vuex.Store({

  state: {
    posts: [],
    cart: [],
    summary: 0,
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    DELETE_POST (state, posts) {
      state.posts = posts
    },
      addToCart(state, payload) {
        const record = state.cart.find(element => element.id == payload.id)
        if(!record) {
          return state.cart.push(payload);
        } else {
          quantity: payload.quantity++
        }
      },
      DELETE_CART (state, payload) {
        const record = state.cart.find(element => element.id == payload.id)
        return state.cart.splice(state.cart.indexOf(record), 1);
      },
      PRICE_SUM(state) {
        state.cart.reduce((cur, item) => {
            const sum = cur + item.price
           return state.summary = sum;
        }, 0)
     }
    
  },
  actions: {
    async getPosts ({commit}) {
      const response = await PostsService.fetchPosts()
      const posts = response.data
      commit('SET_POSTS', posts)
    },
    async deletePost ({commit}, id) {
      await PostsService.deletePost(id)
      const response = await PostsService.fetchPosts()
      const post = response.data
      commit('DELETE_POST', post)
    },
    deleteItem({commit}, payload) {
      commit('DELETE_CART', payload);
    },
    priceSum ({commit}) {
      commit('PRICE_SUM')
    }
  },
  getters: {
    cart: state => state.cart,
    summary: state => state.summary
  }

  })
  export default store