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
          <UI.Logo {...{src: logo, alt: 'logo'}} />
          <UI.Content>
            <p>Edit <code>src/App.tsx</code> and save to reload.</p>
          </UI.Content>
          <UI.Link {...{href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer'}}>
            Learn React
          </UI.Link>
        </CommonUI.Section>
        <CommonUI.Section>
          <Table {...{cards: attackModifierDeck}} />
        </CommonUI.Section>
      </UI.Header>
    </UI.Container>
  );
}

export default App;
