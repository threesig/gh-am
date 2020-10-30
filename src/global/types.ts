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
  name: string;
  effects: CardEffects;
  description: string;
  stack: number;
  isFlipped: boolean;
  idx: number;
  value: number;
}