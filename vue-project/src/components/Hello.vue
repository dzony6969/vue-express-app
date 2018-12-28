<template>
<div>
<section>
         <v-parallax
         class='parallex--one'
    dark
    height='600'
    src="https://images.pexels.com/photos/414586/pexels-photo-414586.jpeg?cs=srgb&dl=background-image-beautiful-blur-414586.jpg&fm=jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-black font-italic">Nature shop</h1>
      <div class=''>
      <v-btn class='elevation-20 hover--button' large color='transparent'
      @click="$vuetify.goTo('#first', options)"
      >Our product</v-btn>
      </div>
      
    </v-layout>
  </v-parallax>
  
      </section>
         <div id='first'>
        <after-paralex>
          <div align-center>
          <v-btn dark large
          class='same--button'
      @click="$vuetify.goTo('#four', options)"
      >Contact Us!</v-btn>
      <router-link to='/posts'>
      <v-btn  
      class='same--button'
      dark large>Visit our online shop</v-btn>
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
    return {};
  },
  computed: {
    options() {
      return {
        duration: 500
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.hover--button:hover {
  background-color: white;
  transition-duration: 0.6s;
}
@media only screen and (max-width: 720px) {
  .parallex--one {
    display: none;
  }
  .same--button {
    width: 250px;
  }

}
</style>
