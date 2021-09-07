import Vue from "vue";
import Vuex from "vuex";
import { createProxy, extractVuexModule } from "vuex-class-component";
import MiniscrollsStore from "./modules/miniscrolls.vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(MiniscrollsStore),
  },
});

export const vxm = {
  miniscrolls: createProxy(store, MiniscrollsStore),
};
