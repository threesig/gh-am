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
export type DeckStateType = {
  cards: CardProps[];
  stacks: string[][];
  drawMod: number;
  shuffleRequired: boolean;
}

