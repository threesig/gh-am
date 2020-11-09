import React, {useContext} from 'react';
import DeckContext from '../../contexts/DeckContext';
import * as CommonUI from '../CommonUI';
import * as UI from './ui';

import Deck from '../Deck';
import Button from '../Button';

const App = () => {
  const {cards, shuffleRequired, draw, shuffle} = useContext(DeckContext);
  return (
    <UI.Container>
      <UI.Header>
          <Button callBack={draw} enabled={!shuffleRequired}>Draw</Button>
          <Button callBack={shuffle}>Shuffle</Button>
        <CommonUI.Section>
          <Deck {...{cards}} />
        </CommonUI.Section>
      </UI.Header>
    </UI.Container>
  );
}

export default App;
