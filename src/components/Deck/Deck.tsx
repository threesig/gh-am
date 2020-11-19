import React from 'react';
import Card from '../Card';

import { CardList, CardItem, CardScaler, cardLiftIncrement} from './ui';
import * as I from './declare/interfaces';
import {getStackAttrs} from "./ui";

export const Deck:React.FC<I.Deck> = ({cards}) => {
  return (
  <CardList data-testid="deck">
    {cards.map((cardData) => {
      const {stack, idx} = cardData;

      const {commute, lift, zIndex, scale, opacity} = getStackAttrs(stack, idx);
      const {name, isFlipped, isHilited} = cardData;

      return (
        <CardItem key={`${cardData.id}`} {...{xPos: commute, yPos: -lift, zPos: zIndex, opacity}}>
          <CardScaler {...{scale}}>
            <Card {...{name, isFlipped, isHilited}} />
          </CardScaler>
        </CardItem>
      )
    })}
  </CardList>
)

}

export default Deck;
