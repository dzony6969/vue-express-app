<template>
<v-content>
<section>
         <v-parallax
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
      <h4 class="subheading">Build your application today!</h4>
      <v-btn color="error" 
      @click="$vuetify.goTo('#first', options)"
      dark large>Our product</v-btn>
      
    </v-layout>
  </v-parallax>
  
      </section>
         <div id='first'>
        <after-paralex>
          <div align-center>
          <v-btn color="error" 
      @click="$vuetify.goTo('#four', options)"
      dark large>Contact Us!</v-btn>
      <router-link to='/posts'>
      <v-btn color="error" dark large>Visit our online shop</v-btn>
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
</v-content>
</template>
<script>
import AfterParalex from './HomePage/AfterParalex'
import AppProduct from './HomePage/AppProduct.vue'
import AppParallax from './HomePage/LastParallax.vue'
import AppFooter from './partials/Footer.vue'
import CompanyInfo from './HomePage/CompanyInfo.vue'

export default {
  name: 'posts',
  components: {
    AfterParalex,
    AppProduct,
    AppParallax,
    AppFooter,
    CompanyInfo,

  },
  data () {
    return {}
  },
  computed:{
    options() {
      return {
        duration: 500,
      }
    }
  },

}
</script>
<style lang="scss" scoped>

hr.style10 {
	border-top: 1px dotted #8c8b8b;
	border-bottom: 1px dotted #fff;
  width: 50%;
}


</style>