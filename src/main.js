import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMask from "v-mask";
import vueSmoothScroll from "vue2-smooth-scroll";

Vue.config.productionTip = false;

Vue.use(VueMask);
Vue.use(vueSmoothScroll);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
