// Card UI

import styled, {keyframes, css} from 'styled-components';

const cardWidth = 400;
const cardTransitionTime = '1s';
const cssCardFaceCommon = css`
  backface-visibility: hidden;
  border-radius: ${cardWidth/30}px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0; bottom: 0; left: 0; right: 0;
`;




export const Container = styled.div`  
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform ${cardTransitionTime};
  position: relative;
  width: ${cardWidth}px;
  transform: rotateY(180deg);
  &:hover {
    transform: rotateY(0);
  }
  &:before {
    content: '';
    display: block;
    padding-top: 64.1791045%;
  }
`;

export const Front = styled.div`
  ${cssCardFaceCommon}
  transform:rotateY(0deg);
  background-color: red;
`
export const Back = styled.div`
  ${cssCardFaceCommon}
  background-color: blue;
  transform: rotateY(180deg);
`