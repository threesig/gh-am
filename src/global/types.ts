import React from "react";
import {DrawMod} from "./enums";

export type CardEffects = {
  damageMod: any;
  condition?: string;
  element?: string;
  rolling?: boolean;
};
export type CardProps = {
  id: string;
  description: string;
  effects: CardEffects;
  name: string;
  stack: number;
  isFlipped: boolean;
  idx: number;
  shuffle?:boolean;
  temporary?:boolean;
  value: number;
}
export type DeckState = {
  cards: CardProps[];
  stacks: string[][];
  drawMod: number;
  shuffleRequired: boolean;
}
export type DeckContextProps = {
  cards: CardProps[];
  stacks: string[][];
  shuffleRequired: boolean;
  drawMod: number;
  draw: () => (void);
  shuffle: () => (void);
  setAdvantage: () => (void);
  setDisadvantage: () => (void);
  unsetDrawMods: () => (void);
};

// export type ButtonProps = {
//   children: React.ReactNode;
//   callBack: (e:Event) => (void);
//   enabled?: boolean
// }

export type ProviderProps = {
  children: React.ReactNode
};

