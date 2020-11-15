import React from 'react';
import {DeckProvider} from './DeckContext';
import '../index.css';


interface ProviderProps {
  children: React.ReactNode
}

const Providers:React.FC<ProviderProps> = ({children}) => (
  <DeckProvider>
    {children}
  </DeckProvider>
)

export default Providers;