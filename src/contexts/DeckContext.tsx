import React, { createContext, useReducer } from 'react';
import {DeckReducer, initialDeckState, prepareDeckState} from "../reducers/DeckReducer";
import * as Type  from '../global/types';
import * as Util from '../util';
import * as DeckSpec from '../data/deckSpecs';


const DeckContext = createContext({} as Type.DeckContextProps);


export const DeckProvider = ({children}: Type.ProviderProps) => {
  const [state, dispatch] = useReducer(DeckReducer, initialDeckState(Util.buildCards(DeckSpec.Spellweaver)), prepareDeckState);

  const {cards, stacks, shuffleRequired} = state;
  const value = {
    cards,
    stacks,
    shuffleRequired,
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