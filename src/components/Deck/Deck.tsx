import React from 'react';
import * as UI from './ui';
import Card from '../Card';

import {CardProps} from '../../global/types';

interface DeckProps {
  cards: CardProps[];
}

export const Deck:React.FC<DeckProps> = ({cards}) => {
  
  const renderCard = (cardProps:CardProps, i:number) => {
    return (
      <Card key={`${cardProps.id}`} {...cardProps} />
    );
  };
  return (
    <UI.Container>
      {cards.map(renderCard as any)}
    </UI.Container>
  );
}

export default Deck;
