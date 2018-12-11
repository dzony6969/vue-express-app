import PostsService from '../../../services/PostsService.js'

const state = {
    posts: [],
}
const mutations = {
    SET_POSTS (state, posts) {
        state.posts = posts
      },
      DELETE_POST (state, posts) {
        state.posts = posts
      },
}

const actions = {
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
}


export default {
     state,
     mutations,
     actions,
}