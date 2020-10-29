import React, { createContext, ReactNode} from 'react';


export const SessionContext = createContext({});

type Props = {
  children: ReactNode
};
export const SessionProvider = ({children}: Props) => {
  const attackModifierDeck:object[] = [];
  return (
    <SessionContext.Provider value={attackModifierDeck}>
      {children}
    </SessionContext.Provider>
  );
}