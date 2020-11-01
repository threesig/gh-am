import React, {useState} from 'react';
import * as UI from './ui';

interface ICardProps {
  id: string;
  name: string;
  isFlipped?: boolean;
  stack?: number;
  idx?: number;
}

const Card: React.FC<ICardProps> = ({id, name, isFlipped = false, stack = 0, idx = 0}) => {
  const cardProps = {
    id,
    isFlipped,
    stack,
    idx,
  }
  
  return (
    <UI.Card {...cardProps}>
      <UI.Front {...{name, stack}} />
      <UI.Back />
    </UI.Card>
  );
}

export default Card;
