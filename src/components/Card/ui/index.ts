// Card UI

import styled from 'styled-components';
import cardBack from '../../../assets/cardBack.jpg';
import * as I from '../declare/interfaces';
import * as css from './css';
import * as U from '../../../util';



export const OuterWrap = styled.div<I.OuterUI>`
  transition: transform ${css.cardTransitionTime}, z-index 0s;
  transform: translate(${props => props.x}rem, ${props => props.y}rem);
  width: ${U.getRems(css.cardWidth)}rem;
  z-index: ${props => props.z};
`
export const ScaleWrap = styled.div<I.ScaleUI>`
  transition: transform ${css.cardTransitionTime};
  transform: scale(${props => props.scale})
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