// Deck UI

import styled from 'styled-components';
import {cardHeight, cardWidth, cardGutter} from "../../Card/ui/css";
import * as U from '../../../util';
export const Container = styled.div`  
  height: ${U.getRems(cardHeight*2 + cardGutter)}rem;
  width: ${U.getRems(cardWidth*2 + cardGutter)}rem;
  perspective: 120rem;
  position: relative;
`;