import React, { createContext, ReactNode} from 'react';
import AttackModifierCards from '../data/attack-modifiers.js';


type IContextProps = {
  attackModifierDeck: object[]
}
const SessionContext = createContext({} as IContextProps);

type Props = {
  children: ReactNode
};
export const SessionProvider = ({children}: Props) => {
  
  

  const value = {attackModifierDeck: AttackModifierCards};

  return (
    <SessionContext.Provider {...{value}}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;