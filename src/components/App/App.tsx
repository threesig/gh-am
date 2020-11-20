import React, {useContext} from 'react';
import DeckContext from '../../contexts/DeckContext';
import * as CommonUI from '../CommonUI';
import * as UI from './ui';

import Deck from '../Deck';
import ControlPanel from '../ControlPanel';

const App = () => {
  const {cards} = useContext(DeckContext);
  return (
    <UI.Container data-testid="app">
      <UI.Header>
        <CommonUI.Section>
          <ControlPanel/>
        </CommonUI.Section>
        <CommonUI.Section>
          <UI.Table data-testid={'table'}>
            <Deck {...{cards}} />
          </UI.Table>
        </CommonUI.Section>
      </UI.Header>
    </UI.Container>
  );
}

export default App;
