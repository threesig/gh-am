// Card UI

import styled, {css} from 'styled-components';
import cardBack from '../../../assets/cardBack.jpg';
import {Stack} from '../../../global/enums';
const cardWidth = 400;
const cardGutter = 50;
const cardLiftIncrement = 0.6;
const cardTransitionTime = '.5s';
const cssCardFaceCommon = css`
  background: center center no-repeat;
  background-size: cover;
  backface-visibility: hidden;
  border-radius: ${cardWidth/30}px;
  box-shadow: 0 .5px .5px rgba(255, 255, 255, 0.8);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0; bottom: 0; left: 0; right: 0;
`;





/**
 * Card
 * 
 */
interface ICardProps {
  isFlipped?:boolean,
  stack?:number,
  idx?:number,
};




const cssSetCardState = (isFlipped:boolean=false, stack:number=0, idx:number=0) => {
  
  const revolve = isFlipped ? 180 : 0;
  
  
  let commute=0, lift=0;
  switch(stack) {
    case Stack.DECK:
      lift = idx*cardLiftIncrement;
      commute = lift/3;
      break;
    case Stack.HAND:
      lift = 300;
      commute = idx * (cardWidth + cardGutter);
      break;
    case Stack.DISCARD:
      lift = idx*cardLiftIncrement;
      commute = cardGutter + cardWidth + lift/3;
      break;
  }
  
  commute = isFlipped ? -commute : commute;
  
  return css`
    transform: rotateY(${revolve}deg) translate(${commute}px, ${-lift}px);
    transform-origin: 50% 50%;
    z-index: ${100*stack + idx};
  `;
}
const cssSetCardDimensions = (width:number, height:number) => {
  return css`
    &:before {
      content: '';
      display: block;
      padding-top: ${100*height/width}%;
    }
  `;
}
export const Card = styled.div<ICardProps>`
  ${cssSetCardDimensions(67,44)}
  ${props => cssSetCardState(props.isFlipped, props.stack, props.idx)}
  cursor: pointer;
  transform-style: preserve-3d;
  transition: all ${cardTransitionTime}, z-index 0s;
  position: absolute;
  width: ${cardWidth}px;
`;





/**
 * Card Face
 * 
 */

const cssSetCardFace = (cardName:string) => {
  const { default: cardFront} = require(`../../../assets/cards/${cardName}.png`);
  return css`
    background-image: url(${cardFront});
    `;
}
interface IFrontProps {
  name: string
}
export const Front = styled.div<IFrontProps>`
  ${cssCardFaceCommon}
  ${props => cssSetCardFace(props.name)}
  transform: rotateY(180deg);
`
export const Back = styled.div`
  ${cssCardFaceCommon}
  background-image: url(${cardBack});
  transform:rotateY(0deg);
`