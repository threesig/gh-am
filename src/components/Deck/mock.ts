import * as CardMock from '../Card/mock';
import * as T from '../Card/declare/types'
import {Stack} from "./declare/enums";

const card:T.CardData = CardMock.cardData
export const cards:T.CardData[] = [card];
export const testStacks = {
  BASE: [CardMock.cardData],
  READY: [{...CardMock.cardData, stack: Stack.READY}],
  HAND: [{...CardMock.cardData, stack: Stack.HAND, isFlipped: true}],
  DISCARD: [{...CardMock.cardData, stack: Stack.DISCARD, isFlipped: true}],
  CONSUMED: [{...CardMock.cardData, stack: Stack.CONSUMED, isFlipped: true}],
}