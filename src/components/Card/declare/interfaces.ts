export interface Card {
  name: string;
  isFlipped?: boolean;
  isHilited?: boolean;
  x?:number;
  y?:number;
  z?:number;
  scale?:number;
}


export interface OuterUI {
  x:number;
  y:number;
  z:number;
}
export interface ScaleUI {
  scale:number;
}
export interface CardUI {
  isFlipped?:boolean,
  stack?:number,
  idx?:number,
};
export interface CardFrontUI {
  name: string;
  isHilited?: boolean;
}
