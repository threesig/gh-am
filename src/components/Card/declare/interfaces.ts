export interface Card {
  name: string;
  isFlipped: boolean;
  boxShadow:string;
}
export interface CardUI {
  isFlipped:boolean,
  boxShadow:string;
};
export interface CardFrontUI {
  name: string;
  isHilited?: boolean;
}
