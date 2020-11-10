// Card UI

import styled from 'styled-components';
import cardBack from '../../../assets/cardBack.jpg';
import * as I from '../../../global/interfaces';
import * as css from './css';


export const Card = styled.div<I.CardPropsUI>`
  ${css.SetCardAspectRatio(css.aspectWidth, css.aspectHeight)};
  ${props => css.SetCardState(props.isFlipped, props.stack, props.idx)};
  cursor: pointer;
  position: absolute;
  width: ${css.cardWidth}px;
`;

export const CardFront = styled.div<I.CardFrontPropsUI>`
  ${css.CardFaceCommon};
  ${props => css.SetCardFaceImage(props.name)};
  ${props => css.SetCardFaceBrightness(props.stack)};
  transform: rotateY(180deg);
`;

export const CardBack = styled.div`
  ${css.CardFaceCommon};
  background-image: url(${cardBack});
  transform:rotateY(0deg);
`;