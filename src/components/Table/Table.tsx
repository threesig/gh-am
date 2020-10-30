import React from 'react';
import * as UI from './ui';
import Card from '../Card';

import {CardProps} from '../../global/types';

interface TableProps {
  cards: CardProps[];
}

export const Table:React.FC<TableProps> = ({cards}) => {
  
  const renderCard = (cardProps:CardProps, i:number) => {
    return (
      <Card {...cardProps} />
    );
  };
  return (
    <UI.Container>
      {cards.map(renderCard as any)}
    </UI.Container>
  );
}

export default Table;
