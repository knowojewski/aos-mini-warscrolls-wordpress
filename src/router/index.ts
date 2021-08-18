import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/miniscrolls-creator",
    name: "Miniscrolls Creator",
    component: () =>
      import(
        /* webpackChunkName: "miniscrolls-creator" */ "../views/MiniscrollsCreatorPage.vue"
      ),
  },
  {
    path: "/minicheats-creator",
    name: "Minicheats Creator",
    component: () =>
      import(
        /* webpackChunkName: "minicheats-creator" */ "../views/MinicheatsCreatorPage.vue"
      ),
  },
  {
    path: "/creator-manual",
    name: "Creator Manual",
    component: () =>
      import(
        /* webpackChunkName: "creator-manual" */ "../views/CreatorManualPage.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
