import React from 'react';
import * as util from '../../util';
import * as UI from './ui';
import Card from '../Card';

import {CardProps} from '../../global/types';

interface TableProps {
  cards: CardProps[];
}

export const Table:React.FC<TableProps> = ({cards}) => {
  
  const stacks = Object.values(util.groupBy(cards, 'stack'));

  const renderCard = (cardProps:CardProps, i:number) => {
    return (
      <Card {...cardProps} />
    );
  };
  const renderStack = (cards:CardProps[]) => {
    return (
      <UI.Stack>
        {cards.map(renderCard as any)}
      </UI.Stack>
    );
  }
  return (
    <UI.Container>
      {stacks.map(renderStack as any)}
    </UI.Container>
  );
}

export default Table;
