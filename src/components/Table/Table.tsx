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

  const renderCard = (item:CardProps, i:number) => (
    <Card name={item.name} value={0} stack={item.stack} idx={i} />
  );
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
