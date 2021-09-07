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
