import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import CreateOrder from "@/components/CreateOrder";
import ViewOrder from "@/components/ViewOrder";
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: ".",
  routes: [
    { path: "/", component: Home },
    { path: "/create", component: CreateOrder },
    { path: "/view/:id", component: ViewOrder }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.query.delay) {
    setTimeout(() => {
      next();
    }, Number(to.query.delay));
  } else {
    next();
  }
});

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
  },
  methods: {
    navigateAndIncrement() {
      const increment = () => this.n++;
      if (this.$route.path === "/") {
        this.$router.push("/foo", increment);
      } else {
        this.$router.push("/", increment);
      }
    }
  }
}).$mount("#app");
