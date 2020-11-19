// Deck UI

import styled, {css} from 'styled-components';
import {cardHeight, cardWidth, cardGutter} from "../../Card/ui/css";
import * as U from '../../../util';

import Card from '../../Card';
import {Stack} from "../declare/enums";

export const cardLiftIncrement = 0.6;



export const Container = styled.div`  
  height: ${U.getRems(cardHeight*2 + cardGutter)}rem;
  width: ${U.getRems(cardWidth*2 + cardGutter)}rem;
  perspective: 120rem;
  position: relative;
`;



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