import {css, keyframes} from "styled-components";
import {Stack} from "../../../global/enums";

const glowRadius = 5;
const glowColor = 'gold';
const cardTransitionTime = '.5s';
const cardGutter = 50;
const cardLiftIncrement = 0.6;
const stackBrightness = [
  .9,
  1.5,
  .5
];
const glowDuration = 2;
const aniCardGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 ${glowRadius/2}px -${glowRadius/2}px ${glowColor};
  }
  75% {
    box-shadow: 0 0 ${glowRadius}px ${glowRadius}px ${glowColor};
  }
`;




export const cardWidth = 400;

export const CardFaceCommon = css`
  transition: all ${cardTransitionTime};

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

export const SetCardState = (isFlipped:boolean=false, stack:number=0, idx:number=0) => {

  const revolve = isFlipped ? 180 : 0;


  let commute=0, lift=0, animation:any='none', scale=1, opacity=1;
  switch(stack) {
    case Stack.READY:
      lift = idx*cardLiftIncrement;
      commute = lift/3;
      break;
    case Stack.HAND:
      scale = 1.1;
      lift = scale*313;
      commute = idx * scale * (cardWidth + cardGutter);
      animation = aniCardGlow;

      break;
    case Stack.DISCARD:
      lift = idx*cardLiftIncrement;
      commute = cardGutter + cardWidth + lift/3;
      break;
    case Stack.CONSUMED:
      scale = 1.5;
      lift = scale*2*313;
      commute = idx * scale * (cardWidth + cardGutter);
      opacity = 0;
      break;

  }

  commute = isFlipped ? -commute : commute;

  return css`
    transition: all ${cardTransitionTime}, z-index 0s;

    transform: rotateY(${revolve}deg) translate(${commute}px, ${-lift}px) scale(${scale});
    transform-origin: 50% 50%;
    transform-style: preserve-3d;

    /* animation: ${animation} ${glowDuration}s infinite; */
    opacity: ${opacity};
    z-index: ${100*stack + idx};
  `;
}

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
export const SetCardFaceBrightness = (stack:number) => {
  return css`
    filter: brightness(${stackBrightness[stack]});
  `;
}
