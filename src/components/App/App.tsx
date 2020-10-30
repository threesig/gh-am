import React, {useContext} from 'react';
import SessionContext from '../../contexts/SessionContext';

import * as CommonUI from '../CommonUI';
import * as UI from './ui';

import Table from '../Table';

function App() {
  const {cards, draw, shuffle} = useContext(SessionContext);
  return (
    <UI.Container>
      <div onClick={() => draw() }>Draw!</div>
      <div onClick={() => shuffle() }>Shuffle!</div>
      <UI.Header>
        <CommonUI.Section>
          <Table {...{cards}} />
        </CommonUI.Section>
      </UI.Header>
    </UI.Container>
  );
}

export default App;
