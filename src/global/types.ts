import React from "react";

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
  draw: () => (void);
  shuffle: () => (void);
};
export type ProviderProps = {
  children: React.ReactNode
};

