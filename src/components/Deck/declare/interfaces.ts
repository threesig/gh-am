import * as CardTypes from '../../Card/declare/types';

export interface Deck {
  cards: CardTypes.Data[];
}

export interface CardItemUI {
  xPos: number;
  yPos: number;
  zPos: number;
  opacity: number;
}

export interface CardScalerUI {
  scale: number;
}
