<template>
<div>
  <v-jumbotron
      :gradient="gradient"
      dark
      src="http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg"
    >
      <v-container fill-height class='shop--info--image'>
        <v-layout align-center>
          <v-flex text-xs-center>
            
          <vue-typed-js :strings="['Welcome in Nature shop']">
  <h1 class='center--typed'><span class="typing"></span></h1>
</vue-typed-js>
<br>

<vue-typed-js :strings="['<p>^2000  -20% WITH CODE NATURE </p>']" :contentType="'html'">
  <h2 class="typing center--typed font-color--typed"></h2>
</vue-typed-js>
        
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
      <v-container>
        
        <div v-if='filteredPosts.length === 0'>
     <div class="alert alert-info" role="alert">
  No found
</div>
      </div>
        <v-layout wrap class='text-center'>
          <v-flex xs12 md4 lg3 class=''>
            <div v-if='scrolled' class="text-xs-center always--fixed">
              <div> 

          <v-text-field
        v-model="searchInput"
        label="Search"
      ></v-text-field>
      <div  class='category--select'>
          <v-select
            v-model='filteredText'
            :items="items"
            label="Category"
          ></v-select>
          </div>
        </div>
              <v-layout>
                <div color='purple'>
            
               <v-radio-group 
               class='category--radio'
               v-model="filteredText">
        <div slot="label">What you<strong> need?</strong></div>
        <v-radio  value="">
          <div slot="label"><strong class="primary--text">Show all</strong></div>
        </v-radio>
        <v-radio value="Devices">
          <div slot="label"><strong class="primary--text">Devices</strong></div>
        </v-radio>
        <v-radio value="Nature">
          <div slot="label"><strong class="primary--text">Nature</strong></div>
        </v-radio>
         <v-radio value="Plants">
          <div slot="label"><strong class="primary--text">Plants </strong></div>
        </v-radio>
      </v-radio-group>
      </div>
              </v-layout>
            </div>
            <div v-if='!scrolled' class="text-xs-center">
              <div> 

      <v-text-field
        v-model="searchInput"
        label="Search"
      ></v-text-field>

      <div  class='category--select'>
          <v-select
            v-model='filteredText'
            :items="items"
            label="Category"
          ></v-select>
          </div>
        </div>
              <v-layout>
                <div color='purple'>
            
               <v-radio-group 
               class='category--radio'
               v-model="filteredText">
        <div slot="label">What you<strong> need?</strong></div>
        <v-radio  value="">
          <div slot="label"><strong class="primary--text">Show all</strong></div>
        </v-radio>
        <v-radio value="Devices">
          <div slot="label"><strong class="primary--text">Devices</strong></div>
        </v-radio>
        <v-radio value="Nature">
          <div slot="label"><strong class="primary--text">Nature</strong></div>
        </v-radio>
         <v-radio value="Plants">
          <div slot="label"><strong class="primary--text">Plants </strong></div>
        </v-radio>
      </v-radio-group>
      </div>
              </v-layout>
            </div>
          </v-flex>
          
          <v-flex xs12 md8 lg8>
            <Circle2 
        v-if='posts.length === 0'
        id='spin'></Circle2>
   
            <shop-list v-if='filteredPosts.length > 0' :filteredPosts='filteredPosts'></shop-list>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { Circle2 } from "vue-loading-spinner";
import { VueTypedJs } from "vue-typed-js";
import ShopList from "./_postComponent/ShopList.vue";

export default {
  name: "posts",
  data() {
    return {
      filteredText: "",
      searchInput: "",
      gradient: "to top left, rgba(104,200,57, .7), rgba(108,32,72, .7)",
      items: ["All", "Devices", "Nature", "Plants"],
      scrolled: false
    };
  },
  components: {
    Circle2,
    ShopList,
    VueTypedJs
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.$store.dispatch("getPosts"), this.$store.dispatch("deletePost");
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 300;
    }
  },
  computed: {
    ...mapState(["posts"]),
    ...mapGetters(["admin"]),
    filteredPosts() {
      const postList = this.posts.filter(item => {
        let date = item.postType;
        let searchByName = item.title
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
        if (this.filteredText === date) {
          return searchByName;
        } else if (this.filteredText === "") {
          return searchByName;
        }
      });
      return postList;
    }
  }
};
</script>
<style lang="scss">
@import "../styles/global.scss";
.category--select {
  display: none;
}
.center--typed {
  margin: 0 auto;
}
.font-color--typed {
  color: #ff6f00;
}
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
  z-index: 10;
}
@media only screen and (max-width: 960px) {
  .category--radio {
    display: none;
  }
  .category--select {
    display: block;
  }
  .alert--connect--indigo {
    display: none;
  }
}
@media only screen and (min-width: 960px) {
  .always--fixed {
    position: fixed;
    margin-top: -35vh;
  }
}
</style>
