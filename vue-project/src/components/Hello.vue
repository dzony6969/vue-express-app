<template>
<div>
<section>
         <v-parallax
         class='parallex--one'
    dark
    height='600'
    :src="changeImage"
  >
    <v-layout
      align-center
      column
      justify-center
    >
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/6HZbVNH/ecology.png" alt="ecology" border="0"></a>
      <h1 v-if='vampire' class="display-2 font-weight-black font-italic">Nature shop
      </h1>
       <h1 v-if='!vampire' class="display-2 font-weight-black font-italic green--text">Nature shop
      </h1>
      <div class=''>
      <v-btn class='elevation-20' large
      round
      @click="$vuetify.goTo('#first', options)"
      >Our product</v-btn>

      </div>
      
    </v-layout>
  </v-parallax>
  
      </section>
         <div id='first'>
        <after-paralex>
          <div align-center>
          <v-btn large
          round
          dark
          class='same--button'
      @click="$vuetify.goTo('#four', options)"
      ><v-icon class='mr-2'>contact_phone</v-icon> Contact Us!</v-btn>
      <router-link to='/posts'>
      <v-btn  
      round
      class='same--button'
      dark large><v-icon class='mr-2'>shop</v-icon>Visit our online shop</v-btn>
      </router-link>
      </div>
        </after-paralex>
        </div>
        <div id='second'>
          <app-product></app-product>
        </div>
        <div id='third'>
          <app-parallax></app-parallax>
        </div>
        <div id='four'>
          <company-info></company-info>
        </div>
        <div id='five'>
          <app-footer></app-footer>
        </div>
        </div>
</template>
<script>
import AfterParalex from "./HomePage/AfterParalex";
import AppProduct from "./HomePage/AppProduct.vue";
import AppParallax from "./HomePage/LastParallax.vue";
import AppFooter from "./partials/Footer.vue";
import CompanyInfo from "./HomePage/CompanyInfo.vue";
import { mapState, mapGetters } from 'vuex';

export default {
  name: "posts",
  components: {
    AfterParalex,
    AppProduct,
    AppParallax,
    AppFooter,
    CompanyInfo
  },
  data() {
    return {
      image: '',
    };
  },
  computed: {
   ...mapGetters(['vampire']),
    options() {
      return {
        duration: 500
      };
    },
    changeImage() {
      let url = ''
      if(!this.vampire) {
        return url = 'http://www.9skips.com/wp-content/uploads/2017/10/forests.jpg'
      } else if (this.vampire) {
          return url = 'https://www.artinnaturephotography.com/images/xl/20080811_002.jpg'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.hover--button:hover {
  background-color: white;
  transition-duration: 0.6s;
}
.same--button {
    width: 250px;
  }
@media only screen and (max-width: 720px) {
  .parallex--one {
    display: none;
  }
  .same--button {
    width: 250px;
  }
}
.green--text {
  color: #1B5E20;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
