export interface Card {
  name: string;
  isFlipped?: boolean;
  isHilited?: boolean;
}
export interface CardUI {
  isFlipped?:boolean,
};
export interface CardFrontUI {
  name: string;
  isHilited?: boolean;
}
