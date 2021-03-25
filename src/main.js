import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import store from "./store";
import App from "./App.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});
Vue.config.productionTip = false;
new Vue({
  router,
  el: "#app",
  store,
  template: "<App />",
  components: {
    App
  },
  data() {
    return {
      msg: null,
      loading: true,
      error: false
    };
  }
}).$mount("#app");
