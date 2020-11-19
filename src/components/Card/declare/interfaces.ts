export interface Card {
  name: string;
  isFlipped?: boolean;
  isHilited?: boolean;
  scale?:number;
}


export interface OuterUI {
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
