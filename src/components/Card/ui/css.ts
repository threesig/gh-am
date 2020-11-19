import {css, keyframes} from "styled-components";
import * as U from '../../../util';

const glowRadius = 5;
const glowColor = 'gold';
export const cardTransitionTime = '.5s';
const glowDuration = 2;
const aniCardGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 ${U.getRems(glowRadius)/2}rem -${U.getRems(glowRadius)/2}rem ${glowColor};
  }
  75% {
    box-shadow: 0 0 ${U.getRems(glowRadius)}rem ${U.getRems(glowRadius)}rem ${glowColor};
  }
`;


export const aspectWidth = 67;
export const aspectHeight = 44;

export const cardWidth = 300;
export const cardHeight = cardWidth * aspectHeight/aspectWidth;
export const cardGutter = cardWidth/4;


export const CardFaceCommon = css`
  transition: all ${cardTransitionTime};

  background: center center no-repeat;
  background-size: cover;
  backface-visibility: hidden;
  border-radius: ${U.getRems(cardWidth)/30}rem;
  box-shadow: 0 .05rem .05rem rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  
  pointer-events: none;
`;

export const SetCardAspectRatio = (width:number, height:number) => {
  return css`
    &:before {
      content: '';
      display: block;
      padding-top: ${100*height/width}%;
    }
  `;
}
export const SetCardFaceImage = (cardName:string) => {
  const { default: cardFront} = require(`../../../assets/cards/${cardName}.png`);
  return css`
    background-image: url(${cardFront});
    `;
}
