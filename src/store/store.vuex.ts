import Vue from "vue";
import Vuex from "vuex";
import { createProxy, extractVuexModule } from "vuex-class-component";
import MiniscrollsStore from "./modules/miniscrolls.vuex";
import UserStore from "./modules/user.vuex";
import UiStore from "./modules/ui.vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(MiniscrollsStore),
    ...extractVuexModule(UserStore),
    ...extractVuexModule(UiStore),
  },
});

export const vxm = {
  miniscrolls: createProxy(store, MiniscrollsStore),
  user: createProxy(store, UserStore),
  ui: createProxy(store, UiStore),
};
