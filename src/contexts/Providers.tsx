import React from 'react';
import theme from '../theme';
import {SessionProvider} from '../contexts/SessionContext';
import {ThemeProvider} from 'styled-components';


interface ProviderProps {
  children: React.ReactNode
}

const Providers:React.FC<ProviderProps> = ({children}) => (
  <SessionProvider>
    <ThemeProvider {...{theme}}>
      {children}
    </ThemeProvider>
  </SessionProvider>
)

export default Providers;