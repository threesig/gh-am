import * as CardTypes from '../../Card/declare/types';


export type ReducerState = {
  cards: CardTypes.Data[];
  stacks: string[][];
  drawMod: number;
  shuffleUrgency: number;
}
export type ContextProps = {
  cards: CardTypes.Data[];
  stacks: string[][];
  shuffleUrgency: number;
  drawMod: number;
  draw: () => (void);
  shuffle: () => (void);
  setAdvantage: () => (void);
  setDisadvantage: () => (void);
  unsetDrawMods: () => (void);
};
