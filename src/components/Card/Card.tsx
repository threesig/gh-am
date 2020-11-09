import React, {useState} from 'react';
import * as UI from './ui';
import * as I from '../../global/interfaces';

const Card: React.FC<I.CardProps> = ({id, name, isFlipped = false, stack = 0, idx = 0}) => {
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
