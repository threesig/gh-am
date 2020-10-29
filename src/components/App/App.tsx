import React, {useContext} from 'react';
import SessionContext from '../../contexts/SessionContext';

import logo from '../../assets/logo.svg';
import * as CommonUI from '../CommonUI';
import * as UI from './ui';

import Table from '../Table';

function App() {
  const {attackModifierDeck} = useContext(SessionContext);
  return (
    <UI.Container>
      <UI.Header>
        <CommonUI.Section>
          <Table {...{cards: attackModifierDeck}} />
        </CommonUI.Section>
      </UI.Header>
    </UI.Container>
  );
}

export default App;
