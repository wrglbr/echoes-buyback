import Vue from "vue";
import Router from "vue-router";
import CreateOrder from "@/components/CreateOrder";
import ViewOrder from "@/components/ViewOrder";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/create/",
      name: "create-order",
      component: CreateOrder
    },
    {
      path: "/view/:slug",
      name: "view-order",
      component: ViewOrder
    }
  ]
});
