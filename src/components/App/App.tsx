import React, {useContext} from 'react';
import DeckContext from '../../contexts/DeckContext';
import * as CommonUI from '../CommonUI';
import * as UI from './ui';

import Deck from '../Deck';
import ControlPanel from '../ControlPanel';
import ChartHistogram from "../ChartHistogram";

const App = () => {
  const {cards, stacksContent} = useContext(DeckContext);
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
        <CommonUI.Section>
          <ChartHistogram {...{stacksContent}} />
        </CommonUI.Section>
      </UI.Header>
    </UI.Container>
  );
}

export default App;
