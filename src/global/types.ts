export type CardEffects = {
  damageMod: any;
  condition?: string;
  element?: string;
  rolling?: boolean;
};
export type CardProps = {
  id: string;
  name: string;
  effects: CardEffects;
  description: string;
  stack: number;
}