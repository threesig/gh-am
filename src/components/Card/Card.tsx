import React from 'react';
import * as UI from './ui';
import * as I from '../../global/interfaces';

const Card: React.FC<I.Card> = ({
                                       id,
                                       name,
                                       isFlipped = false,
                                       isHilited = false,
                                       stack = 0,
                                       idx = 0
}) => {

  return (
    <UI.Card {...{id, isFlipped, stack, idx}}>
      <UI.CardFront {...{name, stack, isHilited}} />
      <UI.CardBack />
    </UI.Card>
  );
}

export default Card;
