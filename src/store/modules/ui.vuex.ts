import { SnackbarData } from "@/interfaces/interfaces";
import { mutation, createModule } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: "ui",
  strict: false,
});

export default class UiStore extends VuexModule {
  public snackbar: SnackbarData[] = [];
  public snackbarId: number = 0;

  @mutation addSnack({
    title,
    content,
    delay = 2500,
  }: {
    title?: string;
    content: string;
    delay?: number;
  }): void {
    const id = this.snackbarId++;
    const snack: SnackbarData = {
      id,
      title,
      content,
    };

    this.snackbar.push(snack);

    setTimeout(() => {
      const index = this.snackbar.findIndex((item) => item.id === id);
      this.snackbar.splice(index, 1);
    }, delay);
  }
}
