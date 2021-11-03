import { createModule, mutation } from "vuex-class-component";
import {
  MiniscrollInterface,
  Weapon,
  Ability,
  Keyword,
} from "@/interfaces/interfaces";

const VuexModule = createModule({
  namespaced: "miniscrolls",
  strict: false,
});

export default class MiniscrollsStore extends VuexModule {
  public miniscroll: MiniscrollInterface = {
    id: null,
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
    weapons: [],
    abilities: [],
    keywords: [],
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
  public smallStatsArray: string[] = [
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
    "D3",
    "2D3",
    "D6",
    "2D6",
  ];
  public diceArray: string[] = ["1+", "2+", "3+", "4+", "5+", "6+"];
  public rendArray: string[] = ["-1", "-2", "-3", "-4", "-5", "-6"];
  public remindersArray: string[] = ["+1*", "rr", "rr1"];
  public weaponTypes: string[] = ["Melee", "Ranged"];
  public abilityTypes: string[] = ["Command Ability", "Ability", "Spell"];

  get getMiniscroll(): MiniscrollInterface {
    return this.miniscroll;
  }

  @mutation addItem(payload: {
    item: Weapon | Ability | Keyword;
    array: Array<Weapon | Ability | Keyword>;
  }): void {
    payload.array.push(payload.item);
  }

  @mutation deleteItem(payload: {
    id: number;
    array: Array<Weapon | Ability | Keyword>;
  }): void {
    const index = payload.array.findIndex((item) => item.id === payload.id);

    payload.array.splice(index, 1);
  }

  @mutation moveItem(payload: {
    id: number;
    direction: number;
    array: Array<Weapon | Ability | Keyword>;
  }): void {
    const index = payload.array.findIndex((item) => item.id === payload.id);
    const newIndex = index + payload.direction;
    const itemToMove = payload.array.splice(index, 1);

    payload.array.splice(newIndex, 0, ...itemToMove);
  }
}
