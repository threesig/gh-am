import React from 'react';
import {CardWrap, CardFront, CardBack} from './ui';
import * as I from './declare/interfaces';

const Card: React.FC<I.Card> = ({
                                  name,
                                  isFlipped,
                                  boxShadow
}) => {
  return (
    <CardWrap data-testid="cardWrap" {...{isFlipped, boxShadow}}>
      <CardFront data-testid="cardFront" {...{name}} />
      <CardBack data-testid="cardBack" />
    </CardWrap>
  );
}

export default Card;
