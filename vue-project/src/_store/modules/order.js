import PostsService from '../../../services/PostsService.js'

const state = {
    orders: [],
    newOrder: 0,
    anotherOrders: [],
}
const actions = {
    async getOrders ({commit}) {
        const response = await PostsService.getOrder()
        const orders = response.data;
        commit('GET_ORDERS', orders)
      },
      async newOrders({commit}) {
        const response = await PostsService.getOrder()
        state.anotherOrders = response.data
        const mapData = state.anotherOrders.filter(item => {
            if(item.status === 'New order') {
             return item.status 
            }
            })
            const newOrder = mapData.length
            commit('GET_NEW_ORDER', newOrder)
        }
}
const mutations = {
    GET_ORDERS (state, orders) {
        state.orders = orders
      },
    GET_NEW_ORDER(state, newOrder) {
        state.newOrder = newOrder
    }
}
const getters = {
    orders: state => state.orders,
    newOrder: state => state.newOrder
}

export default {
    state,
    actions,
    mutations,
    getters,
}