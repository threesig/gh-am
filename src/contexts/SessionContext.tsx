import React, { createContext } from 'react';
import {AMCards} from '../data/attack-modifiers.js';

import {CardProps} from '../global/types';



export type IContextProps = {
  cards: CardProps[];
};

export type SessionProps = {
  children: React.ReactNode
};


const SessionContext = createContext({} as IContextProps);
export const SessionProvider = ({children}: SessionProps) => {

  // Standard Modifier Deck
  const deckSpec:any = {
    "p0": 6,
    "p1": 5,
    "m1": 5,
    "p2": 1,
    "m2": 1,
    "crit": 1,
    "null": 1,
  };
  
  const cards:CardProps[] = [];


  for (const cardType in deckSpec) {
    const cardSpec = AMCards.filter((card:any) => card.type===cardType)[0];
    const cardCount = deckSpec[cardType];
    const {name, effects, description} = cardSpec;
    for (let i = 0; i < cardCount; i++) {
      cards.push({
        id: `test`,
        name,
        effects,
        description,
        stack: 0
      } as CardProps);
    }
  }

  const value = {
    cards
  };

  return (
    <SessionContext.Provider {...{value}}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;