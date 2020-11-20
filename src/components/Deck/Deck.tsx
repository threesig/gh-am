import React from 'react';
import { CardList, renderCardItem } from './ui';
import * as I from './declare/interfaces';

export const Deck:React.FC<I.Deck> = ({cards}) => {
  return (
  <CardList data-testid="deck">
    {cards.map(renderCardItem)}
  </CardList>
)
}

export default Deck;
