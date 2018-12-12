
const state = {
    cart: [],
    summary: 0,
}
const actions = {
    deleteItem({commit}, payload) {
        commit('DELETE_CART', payload);
      },
      priceSum ({commit}) {
        commit('PRICE_SUM')
      }
}

const mutations = {
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
     },

}
const getters = {
    cart: state => state.cart,
    summary: state => state.summary
}

export default {
    state,
    actions,
    mutations,
    getters,
}