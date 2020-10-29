import React from 'react';
import * as UI from './ui';

interface CardProps {
  isFlipped: boolean
  stack: number
  idx: number
}

const Card: React.FC<CardProps> = ({isFlipped = false, stack = 0, idx = 0}) => {
  return (
    <UI.Container {...{isFlipped, stack, idx}}>
      <UI.Front>Front</UI.Front>
      <UI.Back>Back</UI.Back>
    </UI.Container>
  );
}

export default Card;
