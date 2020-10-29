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
  idx?:number,
  onClick: (e: Event) => (void);
};
const cssSetCardState = (isFlipped:boolean=false, stack:number=0, idx:number=0) => {

  const revolve = isFlipped ? 180 : 0;
  const commute = isFlipped ? -(cardWidth + cardGutter) : 0;
  const lift = idx*cardLiftIncrement;

  return css`
    transform: rotateY(${revolve}deg) translate(${commute}px, ${lift}px);
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
  transition: transform ${cardTransitionTime};
  position: relative;
  width: ${cardWidth}px;
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