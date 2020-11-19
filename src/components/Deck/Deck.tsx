import React from 'react';
import Card from '../Card';

import * as UI from './ui';
import * as I from './declare/interfaces';
import * as E from './declare/enums';
import * as CardUI from '../Card/ui/css';

const cardGutter = CardUI.cardWidth/4;

export const Deck:React.FC<I.Deck> = ({cards}) => {
  return (
  <UI.Container data-testid="deck">
    {cards.map((cardProps) => {
      const {stack, idx} = cardProps;
      let commute=0, lift=0, scale=1;
      switch(stack) {
        case E.Stack.READY:
          lift = idx*UI.cardLiftIncrement;
          commute = lift/3;
          break;
        case E.Stack.HAND:
          scale = 1.1;
          lift = scale*(CardUI.cardHeight + cardGutter);
          commute = idx * scale * (CardUI.cardWidth + cardGutter);
          break;
        case E.Stack.DISCARD:
          lift = idx*UI.cardLiftIncrement;
          commute = cardGutter + CardUI.cardWidth + lift/3;
          break;
        case E.Stack.CONSUMED:
          scale = 0.2;
          lift = 10*scale*(CardUI.cardHeight + cardGutter);
          break;
      }

      const zIndex = 100*stack + idx;

      const CardProps = {
        ...cardProps,
        x: commute,
        y: -lift,
        zIndex,
        scale,
      }
      return <Card {...{key: `${cardProps.id}`, ...CardProps}} />
    })}
  </UI.Container>
)

}

export default Deck;
