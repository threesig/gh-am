export type Effects = {
  damageMod: any;
  condition?: string;
  element?: string;
  rolling?: boolean;
};
export type Data = {
  id: string;
  description: string;
  effects: Effects;
  name: string;
  stack: number;
  isFlipped: boolean;
  isHilited: boolean;
  idx: number;
  shuffle?:boolean;
  temporary?:boolean;
  value: number;
}

