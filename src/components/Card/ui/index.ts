// Card UI

import styled from 'styled-components';
import cardBack from '../../../assets/cardBack.jpg';
import * as I from '../declare/interfaces';
import * as css from './css';
import * as U from '../../../util';



export const OuterWrap = styled.div<I.OuterUI>`
  transition: all ${css.cardTransitionTime}, z-index 0s;
  transform: translate(${props => U.getRems(props.x)}rem, ${props => U.getRems(props.y)}rem);
  width: ${U.getRems(css.cardWidth)}rem;
  z-index: ${props => props.zIndex};
`
export const ScaleWrap = styled.div<I.ScaleUI>`
  transition: transform ${css.cardTransitionTime};
  transform: scale(${props => props.scale});
  pointer-events: none;
`
export const CardWrap = styled.div<I.CardUI>`
  transition: transform ${css.cardTransitionTime};  

  ${css.SetCardAspectRatio(css.aspectWidth, css.aspectHeight)};
  cursor: pointer;
  position: relative;
  transform: rotateY(${props => props.isFlipped ? 180 : 0}deg);
  transform-origin: 50% 50%;
  transform-style: preserve-3d;

  width: 100%;

  pointer-events: none;
`;

export const CardFront = styled.div<I.CardFrontUI>`
  ${css.CardFaceCommon};
  ${props => css.SetCardFaceImage(props.name)};
  transform: rotateY(180deg);
`;

export const CardBack = styled.div`
  ${css.CardFaceCommon};
  background-image: url(${cardBack});
  transform:rotateY(0deg);
`;