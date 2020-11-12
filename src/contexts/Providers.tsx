import React from 'react';
import theme from '../theme';
import {DeckProvider} from './DeckContext';
import {ThemeProvider} from 'styled-components';


interface ProviderProps {
  children: React.ReactNode
}

const Providers:React.FC<ProviderProps> = ({children}) => (
  <DeckProvider>
    {children}
  </DeckProvider>
)

export default Providers;