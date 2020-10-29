import React from 'react';
import * as UI from './ui';

interface ICardProps {
  name: string,
  value: number,
  isFlipped?: boolean
  stack?: number
  idx?: number
}

const Card: React.FC<ICardProps> = ({name, value=0, isFlipped = false, stack = 0, idx = 0}) => {
  return (
    <UI.Card {...{isFlipped, stack, idx}}>
      <UI.Front {...{name}}/>
      <UI.Back />
    </UI.Card>
  );
}

export default Card;
