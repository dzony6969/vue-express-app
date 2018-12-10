<template>
  <div class="">
    <h1>Add Post</h1>
    <div class='text-center'>
   
    <button class="btn btn-primary" @click='selected= "post-title"'>Basic Information</button>
                <button class="btn btn-success" @click='selected = "app-image"'>Image and category</button>
                <button class="btn btn-danger" @click='selected = "app-preview"'>Live preview</button>
          
                <component :is="selected">       
               
      <div slot='title' class="form-group offset-sm-4 col-sm-4 sm-offset-4">
    <label 
    for="title"
    class='col-sm-1 col-form-label'
    >Title</label>
    <input 
    type="text" 
    class="form-control" 
    id="title" 
    placeholder="Title"
    v-model='title'
    >
    <br>
<label 
    for="price"
    class='col-sm-1 col-form-label'
    >Price</label>
    <input 
    type="number" 
    class="form-control" 
    id="price" 
    placeholder="Price"
    v-model.number='price'
    >
     <label 
    for="description"
    class='col-sm-1 col-form-label'
    >Description</label>
    
          <textarea 
          id='description' 
          class='form-control' 
          cols='15' rows="5" placeholder="DESCRIPTION" 
          v-model="text">
          </textarea>
        </div>
        <div class='form' slot='image'>
          <input type="text" name="image" placeholder="Image" v-model="img">
          <div>
          <select v-model="postType">
          <option slot='image' disabled value="">Please select one</option>
          <option>Nature</option>
          <option>Devices</option>
          <option>Plants</option>
          </select>
          </div>
        </div>
        <div slot='preview'>
          
          <h1> {{title}}</h1>
          <p>{{text}}</p>
          <p>{{postType}}</p>
          <button class="app_post_btn" @click="addPost">Add</button>
          
        </div>
                </component>
                
        </div>
      </div>

</template>

<script>
import PostsService from '../../services/PostsService'
import PostTitle from './AddPost/PostTitle.vue'
import appImage from './AddPost/Image.vue'
import appPreview from './AddPost/Preview.vue'


export default {
  name: 'NewPost',
  components: {
    PostTitle,
    appImage,
    appPreview,
  },
  data () {
    return {
      title: '',
      text: '',
      img: '',
      price: '',
      postType: '',
      selected: 'post-title',

    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        text: this.text,
        img: this.img,
        price: this.price,
        postType: this.postType
      })
      this.$router.push({ name: 'Posts' })
    },
  }
}
</script>
<style type="text/css">

</style>