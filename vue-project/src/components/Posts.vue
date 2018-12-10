<template>
<div>
   <br>
  <br>
  <br>
  <br>
  <br>
<div>
<v-container id='listOfProduct' grid-list-md text-xs-center>
   <div class="list-group btn-group btn-group-toggle" >
    <p>Choose category</p>
            <label
            class="btn btn-secondary"
            ><input
            type="radio" 
            autocomplete="off" 
            checked
            value=''
            v-model='filteredText'
            >All</label>
            <label
            class="btn btn-secondary"
            ><input 
            type="radio" 
            class='list-group-item' 
            value='Devices'
            v-model='filteredText'
            >Devices</label>
            <label
            class="btn btn-secondary"
            ><input 
            type="radio" 
            class='list-group-item' 
            value='Nature'
            v-model='filteredText'
            >Nature</label>
            <label
            class="btn btn-secondary"
            ><input 
            type="radio" 
            class='list-group-item' 
            value='Plants'
            v-model='filteredText'
            >Plants</label>
          </div>
  <div id='center--input'> 
<v-text-field
        text-center
        v-model="filteredText"
        label="Search product"
      ></v-text-field>
      </div>
      <div v-if='filteredPosts.length === 0'>
     <div class="alert alert-info" role="alert">
  No found
</div>
      </div>
      
</v-container>
  </div>
  <Circle2 
  v-if='posts.length === 0'
  id='spin'></Circle2>
  <!-- list of posts render here -->
    <shop-list :filteredPosts='filteredPosts'></shop-list>
  </div>

</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import {Circle2} from 'vue-loading-spinner'
import ShopList from './_postComponent/ShopList.vue'
export default {
  name: 'posts',
  data () {
    return {
      filteredText: '',
    }
  },
  components: {
    Circle2,
    ShopList
  },
  mounted () {
    this.$store.dispatch('getPosts'),
    this.$store.dispatch('deletePost')
  },
  methods: {
  },
  computed: {
    ...mapState([
    'posts'
  ]),
		filteredPosts() {
			if(this.filteredText === "") {
				return this.posts
      } else if(this.filteredText === 'Nature' 
      || this.filteredText === 'Devices' 
      || this.filteredText === 'Plants' ) {
				return this.posts.filter(post =>  {
					return post.postType === this.filteredText;
				});
      }  else {
        return this.posts.filter(post => {
          return post.title.toUpperCase() === this.filteredText.toUpperCase()
        })
      }
		}
	}
}
</script>
<style lang="scss">
    @import '../styles/global.scss';
#spin {
  margin: 20px auto;
   width: 200px;
  height: 150px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
#listOfProduct {
  max-width: 1000px;
}
#center--input {
  text-align: center;
}

</style>