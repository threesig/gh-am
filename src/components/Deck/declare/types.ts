import * as CardTypes from '../../Card/declare/types';


export type DeckState = {
  cards: CardTypes.CardProps[];
  stacks: string[][];
  drawMod: number;
  shuffleUrgency: number;
}
export type DeckContextProps = {
  cards: CardTypes.CardProps[];
  stacks: string[][];
  shuffleUrgency: number;
  drawMod: number;
  draw: () => (void);
  shuffle: () => (void);
  setAdvantage: () => (void);
  setDisadvantage: () => (void);
  unsetDrawMods: () => (void);
};
