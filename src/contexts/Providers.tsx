import React from 'react';
import theme from '../theme';
import {DeckProvider} from './DeckContext';
import {ThemeProvider} from 'styled-components';


interface ProviderProps {
  children: React.ReactNode
}

const Providers:React.FC<ProviderProps> = ({children}) => (
  <DeckProvider>
    <ThemeProvider {...{theme}}>
      {children}
    </ThemeProvider>
  </DeckProvider>
)

export default Providers;