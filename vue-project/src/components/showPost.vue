<template>
  <div class="container">
    <div class='row'></div>
    <div class="text-center"><h1>{{title}}</h1></div>
    {{text}}
  </div>
</template>

<script>
import PostsService from '../../services/PostsService'
export default {
  name: 'showPost',
  data () {
    return {
      title: '',
      text: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.text = response.data.text
    },
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>