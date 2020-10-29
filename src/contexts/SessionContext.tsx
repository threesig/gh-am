import React, { createContext, ReactNode} from 'react';


export const SessionContext = createContext({});

type Props = {
  children: ReactNode
};
export const SessionProvider = ({children}: Props) => {
  const attackModifierDeck:object[] = [];
  
  const value = {attackModifierDeck}
  
  return (
    <SessionContext.Provider {...{value}}>
      {children}
    </SessionContext.Provider>
  );
}