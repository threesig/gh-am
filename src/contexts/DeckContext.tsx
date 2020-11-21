import React, { createContext, useReducer } from 'react';
import {DeckReducer, initialDeckState, prepareDeckState} from "../reducers/DeckReducer";
import * as CardTypes  from '../components/Card/declare/types';
import * as DeckTypes  from '../components/Deck/declare/types';
import * as GlobalTypes  from '../global/types';
import * as DeckSpec from '../data/deckSpecs';
import {DrawMod} from "../global/enums";
import {buildCards} from "../components/Deck/func";

const DeckContext = createContext({} as DeckTypes.ContextProps);


export const DeckProvider = ({children}: GlobalTypes.ProviderProps) => {
  const [state, dispatch] = useReducer(DeckReducer, initialDeckState(buildCards(DeckSpec.Spellweaver)), prepareDeckState);

  const {cards, stacks, shuffleUrgency, drawMod} = state;

  const stacksContent:CardTypes.CardData[][] = stacks.map((stack:string[]) => {
    return cards.filter((cardItem:CardTypes.CardData) => stack.includes(cardItem.id));
  });

  const value = {
    cards,
    stacks,
    stacksContent,
    shuffleUrgency,
    drawMod,

    draw: () => dispatch({type: 'DRAW'}),
    shuffle: () => dispatch({type: 'SHUFFLE'}),
    setAdvantage: () => dispatch({type: 'SET_DRAW_MOD', value: DrawMod.ADVANTAGE}),
    setDisadvantage: () => dispatch({type: 'SET_DRAW_MOD', value: DrawMod.DISADVANTAGE}),
    unsetDrawMods: () => dispatch({type: 'SET_DRAW_MOD', value: DrawMod.NONE}),
  };

  return (
    <DeckContext.Provider {...{value}}>
      {children}
    </DeckContext.Provider>
  );
}

export default DeckContext;