import React from 'react';
import {ScaleWrap, CardWrap, CardFront, CardBack} from './ui';
import * as I from './declare/interfaces';

const Card: React.FC<I.Card> = ({
                                  name,
                                  isFlipped = false,
                                  isHilited = false,
                                  scale= 1
}) => {
  return (
    <ScaleWrap data-testid={"scaleWrap"} {...{scale}}>
      <CardWrap data-testid="cardWrap" {...{isFlipped}}>
        <CardFront data-testid="cardFront" {...{name, isHilited}} />
        <CardBack data-testid="cardBack" />
      </CardWrap>
    </ScaleWrap>
  );
}

export default Card;
