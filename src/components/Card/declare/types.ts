export type CardEffect = {
  type: string;
  value: any;
};
export type CardData = {
  id: string;
  description: string;
  damageMod: any;
  effects: CardEffect[];
  name: string;
  stack: number;
  isHilited: boolean;
  idx: number;
  shuffle?:boolean;
  temporary?:boolean;
  value: number;
}

