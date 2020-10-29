import React, { createContext, ReactNode} from 'react';
const AttackModifierCards = require('../data/attack-modifiers.js');


type IContextProps = {
  attackModifierDeck: object[]
}
const SessionContext = createContext({} as IContextProps);

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

export default SessionContext;