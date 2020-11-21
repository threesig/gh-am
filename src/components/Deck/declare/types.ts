import * as CardTypes from '../../Card/declare/types';


export type ReducerState = {
  cards: CardTypes.CardData[];
  stacks: string[][];
  drawMod: number;
  shuffleUrgency: number;
}
export type ContextProps = {
  cards: CardTypes.CardData[];
  stacks: string[][];
  stacksContent: CardTypes.CardData[][];
  shuffleUrgency: number;
  drawMod: number;
  draw: () => (void);
  shuffle: () => (void);
  setAdvantage: () => (void);
  setDisadvantage: () => (void);
  unsetDrawMods: () => (void);
};
