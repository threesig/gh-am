import React from 'react';
import * as UI from './ui';
import Card from '../Card';

interface TableProps {
  cards: object[]
}

export const Table:React.FC<TableProps> = ({cards = []}) => {
  
  const cardProps = {
    name: 'am-p-01',
    value: 0,
  }
  
  return (
    <UI.Container>
      <Card {...cardProps} />
    </UI.Container>
  );
}

export default Table;
