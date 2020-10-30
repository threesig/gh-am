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
    <li key={i}><Card name={item.name} value={0} stack={item.stack} idx={i} /></li>
  );
  const renderStack = (cards:CardProps[]) => {
    return (
      <ul>
        {cards.map(renderCard as any)}
      </ul>
    );
  }
  return (
    <UI.Container>
      {stacks.map(renderStack as any)}
    </UI.Container>
  );
}

export default Table;
