import * as CardTypes from '../../Card/declare/types';

export interface Deck {
  cards: CardTypes.CardData[];
}

export interface CardItemUI {
  xPos: number;
  yPos: number;
  zPos: number;
  opacity: number;
  brightness: number;
  boxShadow: string;
}

export interface CardScalerUI {
  scale: number;
}
