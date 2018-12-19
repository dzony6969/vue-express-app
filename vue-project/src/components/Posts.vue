<template>
<div>
  <br>
  <br> 
  <br>
  <br>
      <v-container>
        
        <div v-if='filteredPosts.length === 0'>
     <div class="alert alert-info" role="alert">
  No found
</div>
      </div>
        <v-layout row wrap class='text-center'>
          <v-flex xs12 md2>
            <div class="text-xs-center">
              <div id='center--input'> 

          <v-text-field
        text-center
        v-model="filteredText"
        label="Search product"
      ></v-text-field>
        </div>
              <v-layout justify-space-between>
                <div row color='purple'>
               <h3>choose category</h3>
               <v-radio-group v-model="filteredText">
        <div slot="label">What you<strong> need?</strong></div>
        <v-radio  value="">
          <div slot="label"><strong class="primary--text">All</strong> products</div>
        </v-radio>
        <v-radio value="Devices">
          <div slot="label"><strong class="primary--text">Devices</strong> category</div>
        </v-radio>
        <v-radio value="Nature">
          <div slot="label"><strong class="primary--text">Nature</strong> category</div>
        </v-radio>
         <v-radio value="Plants">
          <div slot="label"><strong class="primary--text">Plants </strong>category</div>
        </v-radio>
      </v-radio-group>
      </div>
              </v-layout>
            </div>
          </v-flex>
          
          <v-flex xs12 md8 >
            <Circle2 
        v-if='posts.length === 0'
        id='spin'></Circle2>
            <shop-list v-if='filteredPosts.length > 0' :filteredPosts='filteredPosts'></shop-list>
          </v-flex>
        </v-layout>
        <div class="text-xs-center">
      <v-pagination
        v-model='pagination.page'
        :length='posts.length'
        
      ></v-pagination>
    </div>
      </v-container>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { Circle2 } from "vue-loading-spinner";
import ShopList from "./_postComponent/ShopList.vue";
export default {
  name: "posts",
  data() {
    return {
      filteredText: "",
      searchInput: "",
      pagination: {
        page: 1,
        perPage: 0,
        visible: 7
      }
    };
  },
  components: {
    Circle2,
    ShopList
  },
  mounted() {
    this.$store.dispatch("getPosts"), this.$store.dispatch("deletePost");
  },
  methods: {},
  watch: {
    setPage() {
      this.pagination.page = this.posts.length / 3;
      this.pagination.perPage = this.posts.length / 2;
    }
  },
  computed: {
    ...mapState(["posts"]),
    filteredPosts() {
      if (this.filteredText === "") {
        return this.posts;
      } else if (
        this.filteredText === "Nature" ||
        this.filteredText === "Devices" ||
        this.filteredText === "Plants"
      ) {
        return this.posts.filter(post => {
          return post.postType === this.filteredText;
        });
      } else {
        return this.posts.filter(post => {
          return post.title
            .toLowerCase()
            .match(this.filteredText.toLowerCase());
          // return post.title.toUpperCase() === this.searchInput.toUpperCase()
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import "../styles/global.scss";
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
