import * as CardTypes from '../../Card/declare/types';


export type ReducerState = {
  cards: CardTypes.CardProps[];
  stacks: string[][];
  drawMod: number;
  shuffleUrgency: number;
}
export type ContextProps = {
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
