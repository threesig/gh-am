import React, { createContext, useReducer } from 'react';
import {AMCards} from '../data/attack-modifiers.js';
import * as util from '../util';
import {VCardProps, CardProps} from '../global/types';



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


const hand:VCardProps[] = [];
const discard:VCardProps[] = [];

for (const cardType in deckSpec) {
  const cardSpec = AMCards.filter((card:any) => card.type===cardType)[0];
  const cardCount = deckSpec[cardType];
  const {name, type, effects, description} = cardSpec;
  
  for (let i = 0; i < cardCount; i++) {
    hand.push({
      id: `${type}-${i}`,
      name,
      effects,
      description,
    } as VCardProps);
  }
}


type StateType = {
  hand: VCardProps[],
  discard: VCardProps[]
}
// type ActionType = {
//   type: string,
//   props?: object
// }

const initialState:StateType = {
  hand,
  discard
};

const reducer = (state:StateType, action:any) => {
  let {hand, discard} = state;
  switch (action.type) {
    
    case 'DRAW':
      if(hand.length) {
        discard.push(hand.pop() as CardProps);
      }
      
      return {
        ...state,
        hand,
        discard
      }
    case 'SHUFFLE':
      
      hand = util.shuffle([...hand, ...discard]);
      discard = [];
      return {
        ...state,
        hand,
        discard
      }
    default:
      console.error(`ACTION TYPE "${action.type}" is not recognized`);
      return state;
  }
}



export type IContextProps = {
  cards: CardProps[];
  draw: any;
  shuffle: any;
};

export type SessionProps = {
  children: React.ReactNode
};
























const SessionContext = createContext({} as IContextProps);
export const SessionProvider = ({children}: SessionProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const cards:CardProps[] = [
    ...state.hand.map((vCard:VCardProps, i:number) => {return {...vCard, idx:i, stack:0, isFlipped:false, value:0} as CardProps}), 
    ...state.discard.map((vCard:VCardProps, i:number) => {return {...vCard, idx:i, stack:1, isFlipped:true, value:0} as CardProps}), 
  ];

  const value = {
    cards,
    draw: () => dispatch({type: 'DRAW'}),
    shuffle: () => dispatch({type: 'SHUFFLE'})
  };

  return (
    <SessionContext.Provider {...{value}}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;