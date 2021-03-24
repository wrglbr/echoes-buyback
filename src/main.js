import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
Vue.config.productionTip = false;

new Vue({
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
  mounted() {
    axios
      .get("")
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  }
}).$mount("#app");
