<template>
  <v-content>
  <div id="app">
    <v-app :dark='vampire'
          :light='!vampire'
    > 
   <app-header>
   </app-header>
       <transition 
       mode='out-in'
       appear
       enter-active-class="animated fadeInDown" 
       leave-active-class="animated fadeOutDown"
       >
         <router-view
         :key="$route.fullPath"
         ></router-view>
       </transition>
       </v-app>
  </div>
  </v-content>
</template>

<script>
import appHeader from "./components/partials/Header";
import { mapState, mapActions } from 'vuex';
export default {
  name: "App",
  components: {
    appHeader
  },
  computed: {
    ...mapState(['vampire'])
  },
  methods: {
    ...mapActions(['vampireStateTrue', 'vampireStateFalse'])
  }
};
</script>

<style>
* {
  font-family: "Arvo", serif;
}
 li a {
    text-decoration: none;
    }
</style>
