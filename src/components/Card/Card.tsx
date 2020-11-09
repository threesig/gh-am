import React from 'react';
import * as UI from './ui';
import * as I from '../../global/interfaces';

const Card: React.FC<I.CardProps> = ({id, name, isFlipped = false, stack = 0, idx = 0}) => {

  return (
    <UI.Card {...{id, isFlipped, stack, idx}}>
      <UI.CardFront {...{name, stack}} />
      <UI.CardBack />
    </UI.Card>
  );
}

export default Card;
