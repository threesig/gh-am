import React from 'react';
import * as UI from './ui';
import Card from '../Card';

interface TableProps {
  cards: object[]
}

export const Table:React.FC<TableProps> = ({cards = []}) => {
  
  type CardItem = {
    name: string,
    value: number
  }
  

  const renderCard = (item:CardItem, i:number) => {
    return <li key={i}><Card name={item.name} value={0} idx={i} /></li>
  }
  
  console.log(cards);
  return (
    <UI.Container>
      <ul>
      {cards.map(renderCard as any)}
      </ul>
    </UI.Container>
  );
}

export default Table;
