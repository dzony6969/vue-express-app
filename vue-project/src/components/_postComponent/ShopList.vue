<template>
      
    <v-container id='listOfProduct' grid-list-md

    class='elevation-5 green lighten-5'
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
    <router-link 
                  v-bind:to="{ name: 'showPost', params: { id: post._id } }">
      <v-img
        :aspect-ratio="16/9"
        :src="post.img"
        class='zoom--hover'
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="zoom--hover d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            {{`Details`}}
          </div>
        </v-expand-transition>
      </v-img>
      </router-link>
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
        <br>
        <a v-if='admin.isAdmin' href="#" @click="deletePost(post._id)">Delete</a>
      
        <div class="">
          <p class='title text-left'>{{post.title}}
            <span id='align-right' class='font-weight-bold'>{{post.price}}$</span></p>
            <h4 class='text-left'>Category: {{post.postType}}</h4>
            <br>

            <p class='text-left'>{{`${post.text.substr(0, 50)}...`}}</p>
            <div v-if='post.avgRating > 0' class='text-left'>
            <v-rating
        v-model="post.avgRating"
        background-color="pink lighten-3"
        color="pink"
      ></v-rating> <span class='align-right'>Average user rating: <strong>{{` ${post.avgRating.toFixed(2)}`}}</strong></span> 
      </div>
      <div class='text-left' v-if='post.avgRating === 0'>
        <v-rating
        v-model="post.avgRating"
        background-color="pink lighten-3"
        color="pink"
      ></v-rating> <span class='align-right'>No rating available</span>
      </div>
          </div>
        
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
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["filteredPosts"],
  mounted() {
    this.$store.dispatch("getPosts"), this.$store.dispatch("deletePost");
  },
  methods: {
    ...mapActions(["deletePost", "priceSum"]),
    addToCart(posts) {
      this.$store.commit({
        type: "addToCart",
        id: posts._id,
        title: posts.title,
        img: posts.img,
        price: posts.price,
        quantity: 1
      });
    }
  },
  computed: {
    ...mapGetters(['admin'])
  }
};
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
#align-right {
  float: right;
  color: blueviolet;
}
.zoom--hover:hover {
  transform: scale(1.02);
  border-radius: 40px;
  transition-duration: 0.5s;
}
</style>
