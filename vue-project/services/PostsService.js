import Api from './Api'
export default {
  fetchPosts () {
    return Api().get('/posts')
  },
  getOrder () {
    return Api().get('/order')
  },
  addPost (params) {
    return Api().post('/posts', params)
  },
  addOrder (params) {
    return Api().post('/order', params)
  },
  getPost (params) {
    return Api().get('/posts/' + params.id)
  },
  deletePost (id) {
    return Api().delete('/posts/delete/' + id)
  },
  oneOrder(params) {
    return Api().get('/order/' + params.id)
  },
  updateOrder (params) {
    return Api().put('/order/update/' + params.id, params)
  },
  
}