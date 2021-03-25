import Vue from "vue";

import Home from "@/components/Home";

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
