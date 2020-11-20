// Deck UI
import React from "react";
import styled, {css} from 'styled-components';
import {aspectRatio, cardTransitionTime } from "../../Card/ui/css";
import {getRems} from '../../../util';

import * as I from '../declare/interfaces';
import * as E from "../declare/enums";
import * as CardTypes from "../../Card/declare/types";
import Card from "../../Card";

const deckWidth = 300;
const cardHeight = deckWidth/aspectRatio;
const cardGutter = deckWidth/4;

export const cardLiftIncrement = 0.6;



export const CardList = styled.ul`  
  height: ${getRems(cardHeight)}rem;
  width: ${getRems(deckWidth)}rem;
  perspective: 120rem;
  position: relative;
`;


export const CardItem = styled.li<I.CardItemUI>`
  position: absolute;
  bottom: 0; left: 0;
  filter: brightness(${props => props.brightness});
  transition: all ${cardTransitionTime}, z-index 0s;
  opacity: ${props => props.opacity};
  transform: translate(${props => getRems(props.xPos)}rem, ${props => getRems(props.yPos)}rem);
  width: 100%;
  z-index: ${props => props.zPos}
`

export const CardScaler = styled.div<I.CardScalerUI>`
  transition: transform ${cardTransitionTime};
  transform: scale(${props => props.scale});
`

export const getStackAttrs =  (stack:number, idx: number) => {
  let commute=0, lift=0, scale=1, opacity=1, brightness=1, boxShadow='none', isFlipped = true;
  switch(stack) {
    case E.Stack.READY:
      brightness = 0.9;
      lift = idx*cardLiftIncrement;
      commute = lift/3;
      isFlipped = false;
      break;
    case E.Stack.HAND:
      brightness = 1.5;
      boxShadow = '0 1em 4rem rgba(0, 0, 0, .8)';
      scale = 1.1;
      lift = scale*(cardHeight + cardGutter);
      commute = idx * scale * (deckWidth + cardGutter);
      break;
    case E.Stack.DISCARD:
      brightness = 0.5;
      lift = idx*cardLiftIncrement;
      commute = cardGutter + deckWidth + lift/3;
      break;
    case E.Stack.CONSUMED:
      scale = 0.2;
      lift = 10*scale*(cardHeight + cardGutter);
      opacity = 0;
      break;
  }

  const zIndex = 100*stack + idx;

  return {commute, lift, zIndex, scale, opacity, brightness, boxShadow, isFlipped};
}

export const renderCardItem = (cardData:CardTypes.CardData) => {
  const {stack, idx, name, isHilited} = cardData;
  const {commute, lift, zIndex, scale, opacity, brightness, boxShadow, isFlipped} = getStackAttrs(stack, idx);

  return (
    <CardItem data-testid={"cardItem"} key={`${cardData.id}`} {...{xPos: commute, yPos: -lift, zPos: zIndex, opacity, brightness}}>
      <CardScaler data-testid={"cardScaler"} {...{scale}}>
        <Card {...{name, isFlipped, boxShadow}} />
      </CardScaler>
    </CardItem>
  )
}
