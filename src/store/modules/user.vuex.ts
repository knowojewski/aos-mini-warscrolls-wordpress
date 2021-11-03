import { MiniscrollInterface } from "@/interfaces/interfaces";
import { createModule, mutation } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: "user",
  strict: false,
});

export default class UserStore extends VuexModule {
  public miniscrolls: MiniscrollInterface[] = [];

  @mutation
  addMiniscroll(miniscroll: MiniscrollInterface): void {
    this.miniscrolls.push(miniscroll);
  }
}
