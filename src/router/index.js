import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import CreateOrder from "@/components/CreateOrder";
import ViewOrder from "@/components/ViewOrder";

Vue.use(Vuex);
Vue.use(VueRouter);

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/create",
    name: "create-order",
    component: CreateOrder
  },
  {
    path: "/view/:slug",
    name: "view-order",
    component: ViewOrder
  }
];
