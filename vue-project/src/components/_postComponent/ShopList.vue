<template>
      
    <v-container id='listOfProduct' grid-list-md text-xs-center
    class='elevation-5'
    >
    <h1>OUR PRODUCTS</h1>
      <v-layout row wrap>
        
      <v-flex v-for="post in filteredPosts" :key="post._id" xs12 sm6 lg4 class="my-3">
        <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="500"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="post.img"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            {{`$${post.price}`}}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          medium
          right
          top
        >
          <v-icon @click='addToCart(post), priceSum()' >shopping_basket</v-icon>
        </v-btn>
        <a href="#" @click="deletePost(post._id)">Delete</a>
        <router-link 
                  v-bind:to="{ name: 'showPost', params: { id: post._id } }">
        <div class="font-weight-light grey--text title mb-2">
           
          {{post.title}}</div>
        </router-link>
                  <div class="font-weight-light title mb-2">
        </div>
      </v-card-text>
    </v-card>
     </v-hover>
    </v-flex>
      </v-layout>
  </v-container>  
</template>


<script>
import {mapActions} from 'vuex'
    export default {
        props: ['filteredPosts'],
    mounted () {
        this.$store.dispatch('getPosts'),
        this.$store.dispatch('deletePost')
    },
    methods: {
        ...mapActions([
        'deletePost',
        'priceSum'
            ]),
        addToCart(posts) {
            this.$store.commit({
                type: 'addToCart',
                id: posts._id,
                title: posts.title,
                img: posts.img,
                price: posts.price,
                quantity: 1
                })
            }
    }
    }
</script>

<style lang="scss">
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

</style>