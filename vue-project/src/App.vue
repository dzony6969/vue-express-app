<template>
  <v-content>
  <div id="app">
    <v-app>
   <app-header></app-header>
       <transition 
       mode='out-in'
       appear
       enter-active-class="animated fadeInDown" 
       leave-active-class="animated fadeOutDown"
       >
         <router-view/>
       </transition>
       </v-app>
  </div>
  </v-content>
</template>

<script>
import { mapState } from 'vuex'
import appHeader from './components/partials/Header'
export default {
  name: 'App',
  components: {
    appHeader,
  },
}
</script>

<style>
* {
font-family: 'Arvo', serif;
}

</style>
