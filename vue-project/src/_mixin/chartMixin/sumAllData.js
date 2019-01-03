export const sumAll = {
    computed: {
        sumAllAmount() {
            let filterOrders = this.orders.map(item => item.summary)
            let sum = filterOrders.reduce((prev, cur) => {
              return prev + cur 
            }, 20)
            sum = sum.toFixed(2)
            const tax = (sum * 0.23).toFixed(2)
            const profit = (sum * 0.77).toFixed(2)
            const overall = {
              sum,
              tax,
              profit
            }
            return overall
          }
    }
}