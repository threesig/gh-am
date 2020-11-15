export interface Card {
  id: string;
  name: string;
  isFlipped?: boolean;
  isHilited?: boolean;
  stack?: number;
  idx?: number;
}
export interface CardUI {
  isFlipped?:boolean,
  stack?:number,
  idx?:number,
};
export interface CardFrontUI {
  name: string;
  isHilited?: boolean;
  stack: number;
}
