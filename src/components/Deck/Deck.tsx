import React from 'react';
import { CardList } from './ui';
import {renderCardItem} from "./func";
import * as I from './declare/interfaces';

export const Deck:React.FC<I.Deck> = ({cards}) => {
  return (
  <CardList data-testid="deck">
    {cards.map(renderCardItem)}
  </CardList>
)
}

export default Deck;
