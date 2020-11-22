import * as CardTypes from '../components/Card/declare/types';
export interface GenericChart {
  stacks: CardTypes.CardData[][];
}
export interface ChartSingleStack {
  stack: CardTypes.CardData[];
}
export interface ChartMultiStack {
  stacks: CardTypes.CardData[][];
}
