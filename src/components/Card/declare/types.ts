export type CardEffects = {
  damageMod: any;
  condition?: string;
  element?: string;
  rolling?: boolean;
};
export type CardData = {
  id: string;
  description: string;
  effects: CardEffects;
  name: string;
  stack: number;
  isFlipped: boolean;
  isHilited: boolean;
  idx: number;
  shuffle?:boolean;
  temporary?:boolean;
  value: number;
}

