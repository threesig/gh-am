import React from 'react';
import * as UI from './ui';
import * as I from './declare/interfaces';

const Card: React.FC<I.Card> = ({
                                       id,
                                       name,
                                       isFlipped = false,
                                       isHilited = false,
                                       stack = 0,
                                       idx = 0
}) => {

  return (
    <UI.Card data-testid="card" {...{id, isFlipped, stack, idx}}>
      <UI.CardFront data-testid="cardFront" {...{name, stack, isHilited}} />
      <UI.CardBack data-testid="cardBack" />
    </UI.Card>
  );
}

export default Card;
