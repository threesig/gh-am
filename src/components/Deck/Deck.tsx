import React from 'react';
import Card from '../Card';

import * as UI from './ui';
import * as I from '../../global/interfaces';
import * as T from '../../global/types';

export const Deck:React.FC<I.DeckProps> = ({cards}) => {
  
  const renderCard = (cardProps:T.CardProps, i:number) => {
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
