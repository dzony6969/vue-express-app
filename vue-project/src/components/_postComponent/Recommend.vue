<template>
    <div>
       <div class="text-xs-center">
            <v-chip>
            <h4>recommended for you</h4></v-chip>
          </div>
      <v-flex 
      mb-4 v-for='post in filteredPosts' :key='post._id'
      class='recommend--media' lg3 md3>
           <v-hover >
      <v-card
    
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="ma-4"
        row
        width="344"
      >
      <router-link 
                  v-bind:to="{ name: 'showPost', params: { id: post._id } }">

        <v-img
          :aspect-ratio="16/9"
          :src="post.img"
        ></v-img>
      </router-link>
        <v-card-title>
          <div>
            <span class="headline"><p>{{post.title}} - {{post.price}}$</p></span>
            <div class="d-flex">
              <v-rating
              color='amber'
                dense
                :value='post.avgRating'
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="ml-2 grey--text text--darken-2">
                <span>{{`${post.avgRating.toFixed(2)}`}}</span>
                <span> ({{post.comments.length}})</span>
              </div>
              
            </div>
          </div>
          <v-spacer></v-spacer>
          
        </v-card-title>
      </v-card>
    </v-hover>
      </v-flex>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props: ['productType', 'cutId'],
    data() {
        return {
            name: this.$route.params.name
                }
        },
        beforeRouteUpdate(to) {
            this.name = to.params.name
        },
    computed: {
        ...mapState(['posts']),
        filteredPosts() {
      const postList = this.posts.filter(item => {
        let date = item.postType;
        let ids = item._id
        if (this.productType.match(date) && !this.cutId.match(ids)) {
           return item;
        }
      })
      return postList.slice(0, 3);
    }
    }
}
</script>