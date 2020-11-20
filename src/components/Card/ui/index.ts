// Card UI

import styled from 'styled-components';
import cardBack from '../../../assets/cardBack.jpg';
import * as I from '../declare/interfaces';
import * as css from './css';

export const CardWrap = styled.div<I.CardUI>`
  transition: transform ${css.cardTransitionTime};  

  ${css.SetCardAspectRatio(css.aspectWidth, css.aspectHeight)};
  box-shadow: ${props => props.boxShadow};
  cursor: pointer;
  position: relative;
  transform: rotateY(${props => props.isFlipped ? 180 : 0}deg);
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  pointer-events: none;
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