export type CardEffects = {
  damageMod: any;
  condition?: string;
  element?: string;
  rolling?: boolean;
};
export type VCardProps = {
  id: string;
  name: string;
  effects: CardEffects;
  description: string;
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