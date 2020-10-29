// Card UI

import styled, {keyframes, css} from 'styled-components';
import cardBack from '../../../assets/cardBack.jpg';

const cardWidth = 400;
const cardGutter = 50;
const cardLiftIncrement = 1;
const cardTransitionTime = '.5s';
const cssCardFaceCommon = css`
  background: center center no-repeat;
  background-size: cover;
  backface-visibility: hidden;
  border-radius: ${cardWidth/30}px;
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
  idx?:number
};
const cssSetCardState = (isFlipped:boolean=false, stack:number=0, idx:number=0) => {
  const revolve = isFlipped ? -180 : 0;
  const commute = isFlipped ? cardWidth + cardGutter : 0;
  const lift = idx*cardLiftIncrement;

  return css`
    transform: rotate(${revolve}deg) translate(${commute}px ${lift}px);
  `;
}
export const Card = styled.div<ICardProps>`
  ${props => cssSetCardState(props.isFlipped, props.stack, props.idx)}
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform ${cardTransitionTime};
  position: relative;
  width: ${cardWidth}px;
  
  &:hover {
    transform: rotateY(0);
  }
  &:before {
    content: '';
    display: block;
    padding-top: 64.1791045%;
  }
`;





/**
 * Card Face
 * 
 */

interface IFrontProps {
  name: string
}
const cssSetCardFace = (cardName:string) => {
  const { default: cardFront} = require(`../../../assets/cards/${cardName}.png`);
  return css`
    background-image: url(${cardFront});
  `;
}
export const Front = styled.div<IFrontProps>`
  ${cssCardFaceCommon}
  ${props => cssSetCardFace(props.name)}
  transform:rotateY(0deg);
`
export const Back = styled.div`
  ${cssCardFaceCommon}
  background-image: url(${cardBack});
  transform: rotateY(180deg);
`