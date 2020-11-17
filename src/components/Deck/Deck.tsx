import React from 'react';
import Card from '../Card';

import * as UI from './ui';
import * as I from './declare/interfaces';

export const Deck:React.FC<I.Deck> = ({cards}) => {
  // TODO: Receive all assignment of position and translation from `Card`
  return (
  <UI.Container data-testid="deck">
    {cards.map(cardProps => <Card {...{key:`${cardProps.id}`, ...cardProps}} />)}
  </UI.Container>
)

}

export default Deck;
