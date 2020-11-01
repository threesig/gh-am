import React, { createContext, useReducer } from 'react';
import {AMCards} from '../data/attack-modifiers.js';
import * as util from '../util';
import {Stack} from '../global/enums';
import {CardProps} from '../global/types';



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
  const {name, type, effects, description, shuffle, temporary} = cardSpec;
  
  for (let i = 0; i < cardCount; i++) {
    cards.push({
      id: `${type}-${i}`,
      name,
      effects,
      description,
      stack: Stack.DECK, 
      idx:j++,
      isFlipped:false, 
      shuffle: shuffle?shuffle:false,
      temporary: temporary?temporary:false,
    } as CardProps);
  }
}


type StateType = {
  cards: CardProps[];
  deck: string[];
  hand: string[];
  discard: string[];
  drawMod: number;
  shuffleRequired: boolean;
}
// type ActionType = {
//   type: string,
//   props?: object
// }


const refreshCards = (cards:CardProps[], deck:string[], hand:string[], discard:string[]) => {
  deck.map((cardId:string, i:number) => {
    const thisCard = cards.filter((card:CardProps) => card.id===cardId)[0];
    thisCard.stack = Stack.DECK;
    thisCard.idx = i;
    thisCard.isFlipped = false;
  });
  hand.map((cardId:string, i:number) => {
    const thisCard = cards.filter((card:CardProps) => card.id===cardId)[0];
    thisCard.stack = Stack.HAND;
    thisCard.idx = i;
    thisCard.isFlipped = true;
  });
  discard.map((cardId:string, i:number) => {
    const thisCard = cards.filter((card:CardProps) => card.id===cardId)[0];
    thisCard.stack = Stack.DISCARD;
    thisCard.idx = i;
    thisCard.isFlipped = true;
  });
  return cards;
}



const initialState:StateType = {
  cards,
  deck: util.shuffle(cards.map((card:CardProps) => card.id)),
  hand: [],
  discard: [],
  drawMod: 1,
  shuffleRequired: false
};


const initializeCards = (state:StateType) => {
  let myCards = [...state.cards];
  let myDeck = [...state.deck];
  let myHand = [...state.hand];
  let myDiscard = [...state.discard];

  myCards = refreshCards(myCards, myDeck, myHand, myDiscard);
  return {
    ...state,
    cards:myCards,
    deck:myDeck,
    discard:myDiscard
  }
};






const reducer = (state:StateType, action:any) => {
  let myCards = [...state.cards];
  let myDeck = [...state.deck];
  let myHand = [...state.hand];
  let myDiscard = [...state.discard];
    
  switch (action.type) {
    
    case 'DRAW':
      let {drawMod:myDrawMod} = state;
      const newHand = [];
      if(myDeck.length) {
        
        // Place current Hand into the Discard
        myDiscard = [...myDiscard, ...myHand]
        

        // Start New Hand
        newHand.push(myDeck.pop() as string);

        // If Advantage or Disadvantage
        if(state.drawMod!=0) {
          newHand.push(myDeck.pop() as string);
          myDrawMod = 0;
        }


        // handle Advantage/Disadvantage here

        

        myCards = refreshCards(myCards, myDeck, newHand, myDiscard);
      }

      return {
        ...state,
        cards:myCards,
        deck:myDeck,
        hand:newHand,
        discard:myDiscard,
        drawMod: myDrawMod
      }
    case 'SHUFFLE':
      
      const newDeck = util.shuffle([...myDeck, ...myHand, ...myDiscard]);
      myCards = refreshCards(myCards, newDeck, [], []);
      return {
        ...state,
        cards: myCards,
        deck: newDeck,
        hand: [],
        discard: []
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

  const {cards, deck, discard} = state;
  const value = {
    cards,
    deck,
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