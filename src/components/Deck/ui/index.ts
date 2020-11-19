// Deck UI

import styled, {css} from 'styled-components';
import {cardHeight, cardWidth, cardTransitionTime } from "../../Card/ui/css";
import {getRems} from '../../../util';

import * as I from '../declare/interfaces';
import * as E from "../declare/enums";

const cardGutter = cardWidth/4;


export const cardLiftIncrement = 0.6;



export const CardList = styled.ul`  
  height: ${getRems(cardHeight*2 + cardGutter)}rem;
  width: ${getRems(cardWidth*2 + cardGutter)}rem;
  perspective: 120rem;
  position: relative;
`;


export const CardItem = styled.li<I.CardItemUI>`
  position: absolute;
  bottom: 0; left: 0;
  
  transition: all ${cardTransitionTime}, z-index 0s;
  opacity: ${props => props.opacity};
  transform: translate(${props => getRems(props.xPos)}rem, ${props => getRems(props.yPos)}rem);
  z-index: ${props => props.zPos}
`

export const CardScaler = styled.div<I.CardScalerUI>`
  transition: transform ${cardTransitionTime};
  transform: scale(${props => props.scale});
`

export const getStackAttrs =  (stack:number, idx: number) => {
  let commute=0, lift=0, scale=1, opacity=1;
  switch(stack) {
    case E.Stack.READY:
      lift = idx*cardLiftIncrement;
      commute = lift/3;
      break;
    case E.Stack.HAND:
      scale = 1.1;
      lift = scale*(cardHeight + cardGutter);
      commute = idx * scale * (cardWidth + cardGutter);
      break;
    case E.Stack.DISCARD:
      lift = idx*cardLiftIncrement;
      commute = cardGutter + cardWidth + lift/3;
      break;
    case E.Stack.CONSUMED:
      scale = 0.2;
      lift = 10*scale*(cardHeight + cardGutter);
      opacity = 0;
      break;
  }

  const zIndex = 100*stack + idx;

  return {commute, lift, zIndex, scale, opacity};
}


/*
export const SetCardFaceState = (stack:number, isHilited:boolean) => {

  let opacity = 1, brightness=1, boxShadow = 'none';
  switch(stack) {
    case Stack.READY:
      brightness = 0.9;
      break;
    case Stack.HAND:
      brightness = 1.5;
      boxShadow = '0 1em 4rem rgba(0, 0, 0, .8)';
      break;
    case Stack.DISCARD:
      brightness = 0.5;
      break;
    case Stack.CONSUMED:
      opacity = 0;
      break;
  }

  const contrast = 1;

  return css`
    filter: brightness(${brightness}) contrast(${contrast});
    opacity: ${opacity};
    box-shadow: ${boxShadow};
`;
}
*/