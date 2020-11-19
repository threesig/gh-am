import React from 'react';
import {CardWrap, CardFront, CardBack} from './ui';
import * as I from './declare/interfaces';

const Card: React.FC<I.Card> = ({
                                  name,
                                  isFlipped = false,
                                  isHilited = false,
}) => {
  return (
    <CardWrap data-testid="cardWrap" {...{isFlipped}}>
      <CardFront data-testid="cardFront" {...{name, isHilited}} />
      <CardBack data-testid="cardBack" />
    </CardWrap>
  );
}

export default Card;
