import Vue from "vue";
import App from "./App.vue";
import router from "./route/routes";
import Vuex from "vuex";
import store from "./_store/store";
import Vuetify from "vuetify";
import VueGoogleCharts from "vue-google-charts";

import "vuetify/dist/vuetify.min.css";
Vue.use(VueGoogleCharts);
Vue.use(Vuex);
Vue.use(Vuetify);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
