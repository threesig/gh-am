import React from 'react';
import * as UI from './ui';
import Card from '../Card';

function Table({cards = []}) {
  return (
    <UI.Container>
      <Card />
    </UI.Container>
  );
}

export default Table;
