import { createModule } from "vuex-class-component";
import { MiniscrollInterface } from "@/interfaces/interfaces";

const VuexModule = createModule({
  namespaced: "miniscrolls",
  strict: false,
});

export default class MiniscrollsStore extends VuexModule {
  public miniscroll: MiniscrollInterface = {
    allegiance: null,
    name: null,
    mount: null,
    move: null,
    fly: false,
    save: null,
    wounds: null,
    bravery: null,
    statsReminders: {
      move: null,
      saveFirst: null,
      saveSecond: null,
      woundsFirst: null,
      woundsSecond: null,
      braveryFirst: null,
      braverySecond: null,
    },
  };

  public allegiances: string[] = ["Stormcast Eternals", "Slaves to Darkness"];

  public bigStatsArray: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "D3",
    "2D3",
    "D6",
    "2D6",
  ];

  public diceArray: string[] = ["1+", "2+", "3+", "4+", "5+", "6+"];

  get getMiniscroll(): MiniscrollInterface {
    return this.miniscroll;
  }
}
