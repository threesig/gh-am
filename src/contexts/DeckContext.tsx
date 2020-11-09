import React, { createContext, useReducer } from 'react';
import {AMCards} from '../data/attack-modifiers.js';
import {Stack, DrawMod} from '../global/enums';
import * as Type  from '../global/types';
import {DeckReducer, initializeDeckState} from "../reducers/DeckReducer";



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


const cards:Type.CardProps[] = [];

let j:number = 0;
for (const cardType in deckSpec) {
  const cardSpec = AMCards.filter((card:any) => card.type===cardType)[0];
  const cardCount = deckSpec[cardType];
  const {name, type, effects, description, shuffle, temporary} = cardSpec;
  
  for (let i = 0; i < cardCount; i++) {
    cards.push({
      id: `${type}-${i}`,
      name,
      effects,
      description,
      stack: Stack.READY, 
      idx:j++,
      isFlipped:false, 
      shuffle: shuffle||false,
      temporary: temporary||false,
    } as Type.CardProps);
  }
}


const initialDeckState:Type.DeckState = {
  cards,
  stacks: [
    cards.map((card:Type.CardProps) => card.id),
      [],
      []
  ],
  drawMod: DrawMod.ADVANTAGE,
  shuffleRequired: false
};



const DeckContext = createContext({} as Type.DeckContextProps);
export const DeckProvider = ({children}: Type.ProviderProps) => {
  const [state, dispatch] = useReducer(DeckReducer, initialDeckState, initializeDeckState);

  const {cards, stacks} = state;
  const value = {
    cards,
    stacks,
    draw: () => dispatch({type: 'DRAW'}),
    shuffle: () => dispatch({type: 'SHUFFLE'})
  };

  return (
    <DeckContext.Provider {...{value}}>
      {children}
    </DeckContext.Provider>
  );
}

export default DeckContext;