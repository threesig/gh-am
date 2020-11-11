// Card UI

import styled from 'styled-components';
import cardBack from '../../../assets/cardBack.jpg';
import * as I from '../../../global/interfaces';
import * as css from './css';
import * as U from '../../../util';


export const Card = styled.div<I.CardUI>`
  ${css.SetCardAspectRatio(css.aspectWidth, css.aspectHeight)};
  ${props => css.SetCardState(props.isFlipped, props.stack, props.idx)};
  cursor: pointer;
  position: absolute;
  width: ${U.getRems(css.cardWidth)}rem;
`;

export const CardFront = styled.div<I.CardFrontUI>`
  ${css.CardFaceCommon};
  ${props => css.SetCardFaceImage(props.name)};
  ${props => css.SetCardFaceState(props.stack, props.isHilited!)};
  transform: rotateY(180deg);
`;

export const CardBack = styled.div`
  ${css.CardFaceCommon};
  background-image: url(${cardBack});
  transform:rotateY(0deg);
`;