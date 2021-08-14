import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/miniscrolls-creator",
    name: "Miniscrolls Creator",
    component: () =>
      import(
        /* webpackChunkName: "miniscrolls-creator" */ "../views/MiniscrollsCreator.vue"
      ),
  },
  {
    path: "/minicheats-creator",
    name: "Minicheats Creator",
    component: () =>
      import(
        /* webpackChunkName: "minicheats-creator" */ "../views/MinicheatsCreator.vue"
      ),
  },
  {
    path: "/creator-manual",
    name: "Creator Manual",
    component: () =>
      import(
        /* webpackChunkName: "creator-manual" */ "../views/CreatorManual.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
