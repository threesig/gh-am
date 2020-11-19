import React from 'react';
import {OuterWrap, ScaleWrap, CardWrap, CardFront, CardBack} from './ui';
import * as I from './declare/interfaces';

const Card: React.FC<I.Card> = ({
                                  name,
                                  isFlipped = false,
                                  isHilited = false,
                                  x = 0,
                                  y = 0,
                                  zIndex = 0,
                                  scale= 1
}) => {
  return (
    <OuterWrap data-testid={"outerWrap"} {...{x, y, zIndex}}>
      <ScaleWrap data-testid={"scaleWrap"} {...{scale}}>
        <CardWrap data-testid="cardWrap" {...{isFlipped}}>
          <CardFront data-testid="cardFront" {...{name, isHilited}} />
          <CardBack data-testid="cardBack" />
        </CardWrap>
      </ScaleWrap>
    </OuterWrap>
  );
}

export default Card;
