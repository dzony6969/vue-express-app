import Api from './Api'
export default {
  fetchPosts () {
    return Api().get('/posts')
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
    return Api().delete('/posts/' + id)
  },
  addUser(params) {
    return Api().post('/user/register', params);
  },
  login(params) {
    return Api().post('/user/login', params);
  }
}