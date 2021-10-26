import { TranslateResult } from "vue-i18n";

export interface LinkParams {
  linkURL: string;
  linkText: TranslateResult;
}

export interface MiniscrollInterface {
  allegiance: string | null;
  name: string | null;
  mount: string | null;
  move: string | null;
  fly: boolean;
  save: string | null;
  wounds: string | null;
  bravery: string | null;
  statsReminders: StatsReminders;
  weapons: Weapon[];
  abilities: Ability[];
  keywords: Keyword[];
}

export interface StatsReminders {
  move: string | null;
  saveFirst: string | null;
  saveSecond: string | null;
  woundsFirst: string | null;
  woundsSecond: string | null;
  braveryFirst: string | null;
  braverySecond: string | null;
}

export interface Weapon {
  id: number | null;
  name: string | null;
  type: string | null;
  range: string | null;
  attack: string | null;
  hit: string | null;
  wound: string | null;
  rend: string | null;
  damage: string | null;
  reminders: WeaponReminders;
}

export interface WeaponReminders {
  rangeFirst: string | null;
  rangeSecond: string | null;
  attackFirst: string | null;
  attackSecond: string | null;
  hitFirst: string | null;
  hitSecond: string | null;
  woundFirst: string | null;
  woundSecond: string | null;
  rendFirst: string | null;
  rendSecond: string | null;
  damageFirst: string | null;
  damageSecond: string | null;
}

export interface Ability {
  id: number | null;
  type: string | null;
  name: string | null;
  desc: string | null;
}

export interface Keyword {
  id: number | null;
  name: string | null;
}
