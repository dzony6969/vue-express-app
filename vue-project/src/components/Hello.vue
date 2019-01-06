<template>
<div>
         <header class='header'>
            <div class='logo-box'>
                 <img src="../image/leafblack.png" alt="">
            </div>
        <div class='text-box'>
            <h1 class='heading-primary text-center mb-4'>
                <span class='heading-primary-main mb-4'>Nature</span>
                <span class='heading-primary-sub'>is lorem life ipsum</span>
            </h1>
            <div class='text-center'>
            <v-btn class='elevation-20' large
              round
              @click="$vuetify.goTo('#first', options)"
              >Our product
              </v-btn>
              </div>
        </div>
      
        </header>
        <div id='first'>
        </div>
         <div>
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
          dark large>
          <v-icon class='mr-2'>shop</v-icon>Visit our online shop</v-btn>
      </router-link>
      </div>
        </after-paralex>
        </div>
        <div id='second'>
          <app-product></app-product>
        </div>
        <div id='four'>
          <app-parallax></app-parallax>
        </div>
        <div>
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
  computed: {
   ...mapGetters(['vampire']),
    options() {
      return {
        duration: 500
      };
    },
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
}
.green--text {
  color: #1B5E20;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  letter-spacing: 20px;
  font-weight: 800;
  font-size: 60px;
}
#cut--page {
  height: 100000px;
}
.header {
    height: 95vh;
    background-image: linear-gradient(to right bottom, 
    rgba(127, 213, 112, 0.8), 
    rgba(40, 180, 133, 0.7)), 
    url('../image/hero.jpg');
    background-size: cover;
    background-position: top;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    position: relative;
}
.logo-box {
    position: absolute;
    top: 40px;
    left: 40px;
}
.logo {
    height: 35px;
}
.text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.heading-primary {
    color: #fff;
    text-transform: uppercase;
}
.heading-primary-main {
    display: block;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 20px;
}
.heading-primary-sub {
    display: block;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 10px;
}
</style>
