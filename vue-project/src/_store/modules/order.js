import PostsService from '../../../services/PostsService.js'

const state = {
    orders: [],
}
const actions = {
    async getOrders ({commit}) {
        const response = await PostsService.getOrder()
        const orders = response.data
        console.log(orders);
        commit('GET_ORDERS', orders)
      },
}
const mutations = {
    GET_ORDERS (state, orders) {
        state.orders = orders
      }
}
const getters = {
    orders: state => state.orders,
}

export default {
    state,
    actions,
    mutations,
    getters,
}