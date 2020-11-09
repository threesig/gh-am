import React, { createContext, useReducer } from 'react';
import {AMCards} from '../data/attack-modifiers.js';
import * as util from '../util';
import {Stack, DrawMod} from '../global/enums';
import {CardProps, DeckStateType} from '../global/types';



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
      stack: Stack.READY, 
      idx:j++,
      isFlipped:false, 
      shuffle: shuffle?shuffle:false,
      temporary: temporary?temporary:false,
    } as CardProps);
  }
}


const refreshCards = (cards:CardProps[], stacks:string[][]) => {
  stacks.map((stack, stackIdx) => {
    stack.map((cardId:string, cardIdx:number) => {
      const thisCard = cards.filter((card:CardProps) => card.id===cardId)[0];

      console.log(cardId, thisCard);

      thisCard.stack = stackIdx;
      thisCard.idx = cardIdx;
      thisCard.isFlipped = (stackIdx!==Stack.READY);
    });
  })

  return cards;
}



const initialDeckState:DeckStateType = {
  cards,
  // deck: util.shuffle(cards.map((card:CardProps) => card.id)),
  stacks: [
    cards.map((card:CardProps) => card.id),
      [],
      []
  ],
  drawMod: DrawMod.ADVANTAGE,
  shuffleRequired: false
};


const initializeCards = (state:DeckStateType) => {

  let myCards = [...state.cards];
  let myStacks = [...state.stacks];

  myCards = refreshCards(myCards, myStacks);
  return {
    ...state,
    cards:myCards,
    stacks:myStacks,
  }
};






const reducer = (state:DeckStateType, action:any) => {
  let myCards = [...state.cards];

  let myStacks:string[][] = [...state.stacks];
  let myReadyStack = [...myStacks[Stack.READY]];
  let myHandStack = [...myStacks[Stack.HAND]];
  let myDiscardStack = [...myStacks[Stack.DISCARD]];


  switch (action.type) {
    
    case 'DRAW':
      let {drawMod:myDrawMod} = state;
      const newHandStack = [];




      if(myReadyStack.length) {
        
        // Place current Hand into the Discard
        myDiscardStack = [...myDiscardStack, ...myHandStack]
        

        // Start New Hand.  Draw 1 card.
        newHandStack.push(myReadyStack.pop() as string);



        // If Advantage or Disadvantage
        if(state.drawMod!==DrawMod.NONE) {
          newHandStack.push(myReadyStack.pop() as string);
          myDrawMod = 0;
        }


        // handle Advantage/Disadvantage here

        myStacks = [myReadyStack, newHandStack, myDiscardStack];

        myCards = refreshCards(myCards, myStacks);
      }

      return {
        ...state,
        cards:myCards,
        stacks:myStacks,
        drawMod: myDrawMod
      }
    case 'SHUFFLE':
      
      const newReadyStack:string[] = util.shuffle(myCards.map((card:CardProps) => card.id));
      const newStacks:string[][] = [newReadyStack, [], []];

      myCards = refreshCards(myCards, newStacks);

      return {
        ...state,
        cards: myCards,
        stacks: newStacks,
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
  const [state, dispatch] = useReducer(reducer, initialDeckState, initializeCards);

  const {cards, stacks} = state;
  const value = {
    cards,
    stacks,
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