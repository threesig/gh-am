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


const cards:CardProps[] = [];

let j:number = 0;
for (const cardType in deckSpec) {
  const cardSpec = AMCards.filter((card:any) => card.type===cardType)[0];
  const cardCount = deckSpec[cardType];
  const {name, type, effects, description} = cardSpec;
  
  for (let i = 0; i < cardCount; i++) {
    cards.push({
      id: `${type}-${i}`,
      name,
      effects,
      description,
      idx:j++,
      stack:0, 
      isFlipped:false, 
      value:0
    } as CardProps);
  }
}


type StateType = {
  cards: CardProps[];
  hand: string[];
  discard: string[];
}
// type ActionType = {
//   type: string,
//   props?: object
// }


const refreshCards = (cards:CardProps[], hand:string[], discard:string[]) => {
  hand.map((cardId:string, i:number) => {
    const thisCard = cards.filter((card:CardProps) => card.id===cardId)[0];
    thisCard.stack = 0;
    thisCard.idx = i;
    thisCard.isFlipped = false;
  });
  discard.map((cardId:string, i:number) => {
    const thisCard = cards.filter((card:CardProps) => card.id===cardId)[0];
    thisCard.stack = 1;
    thisCard.idx = i;
    thisCard.isFlipped = true;
  });
  return cards;
}






const initialState:StateType = {
  cards,
  hand: util.shuffle(cards.map((card:CardProps) => card.id)),
  discard: []
};


const initializeCards = (state:StateType) => {
  let newCards = [...state.cards];
  let newHand = [...state.hand];
  let newDiscard = [...state.discard];

  newCards = refreshCards(newCards, newHand, newDiscard);
  return {
    ...state,
    cards:newCards,
    hand:newHand,
    discard:newDiscard
  }
};






const reducer = (state:StateType, action:any) => {
  let newCards = [...state.cards];
  let newHand = [...state.hand];
  let newDiscard = [...state.discard];
    
  switch (action.type) {
    
    case 'DRAW':
      if(newHand.length) {
        newDiscard.push(newHand.pop() as string);
        newCards = refreshCards(newCards, newHand, newDiscard);
      }

      return {
        ...state,
        cards:newCards,
        hand:newHand,
        discard:newDiscard
      }
    case 'SHUFFLE':
      
      newHand = util.shuffle([...newHand, ...newDiscard]);
      newDiscard = [];
      newCards = refreshCards(newCards, newHand, newDiscard);
      return {
        ...state,
        cards: newCards,
        hand: newHand,
        discard: newDiscard
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
  const [state, dispatch] = useReducer(reducer, initialState, initializeCards);

  const {cards, hand, discard} = state;
  const value = {
    cards,
    hand,
    discard,
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