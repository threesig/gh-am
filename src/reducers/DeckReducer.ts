import {DrawMod, Stack} from "../global/enums";
import * as T from "../global/types";
import * as util from "../util";

export const initialDeckState = (cards:T.CardProps[]) => {
  return {
    cards,
    stacks: [
      cards.map((card:T.CardProps) => card.id), // Ready Stack
      [], // Hand Stack
      [], // Discard Stack
      [], // Consumed Stack
    ],
    drawMod: DrawMod.NONE,
    shuffleUrgency: 0
  };
}




export const prepareDeckState = (state:T.DeckState) => {

  let myCards = [...state.cards];
  let myStacks = [...state.stacks];
  myStacks[Stack.READY] = [...util.shuffle(myStacks[Stack.READY])];

  myCards = util.performRefreshLogic(myCards, myStacks);
  return {
    ...state,
    cards:myCards,
    stacks:myStacks,
  }
};


export const DeckReducer = (state:T.DeckState, action:any) => {

  let myCards = [...state.cards];
  let myStacks = util.performDiscardLogic(state.cards, state.stacks);


  const getCardValue = (cardId:string) => myCards.filter((card)=> card.id===cardId)[0].value;



  switch (action.type) {

    case 'DRAW':
      // if no Ready cards, abandon ship
      if (!state.stacks[Stack.READY].length) return state;
      const myReadyStack = [...myStacks[Stack.READY]];
      let {drawMod:myDrawMod, shuffleUrgency:myShuffleUrgency} = state;


      // TODO: Add Rolling Modifier Logic
      //  - Each single "Draw" could potentially be many cards if Rolling Modifiers are involved.
      //  - Each "Draw" needs to be an array.


      // Start New Hand.  Draw 1 card.
      const newHandStack:string[] = [];
      newHandStack.push(myReadyStack.pop() as string);


      // If Advantage or Disadvantage, Draw another card
      if(state.drawMod!==DrawMod.NONE) {


        newHandStack.push(myReadyStack.pop() as string);
        myDrawMod = DrawMod.NONE;
      }





      /** Check if newly drawn card(s) require a shuffle **/



      myShuffleUrgency += (myShuffleUrgency > 0)
        ? 1
        : myCards.filter((card:T.CardProps) => newHandStack.includes(card.id) && card.shuffle===true ).length>0 ? 1 : 0;





      /** Define current card stacks  **/
      myStacks[Stack.READY] = myReadyStack;
      myStacks[Stack.HAND] = newHandStack;


      // Refresh CardState
      myCards = util.performRefreshLogic(myCards, myStacks);

      return {
        ...state,
        cards:myCards,
        stacks:myStacks,
        drawMod: myDrawMod,
        shuffleUrgency: myShuffleUrgency
      }
    case 'SHUFFLE':
      const newReadyStack:string[] = util.shuffle([
        ...myStacks[Stack.READY],
        ...myStacks[Stack.HAND],
        ...myStacks[Stack.DISCARD]
      ]);


      myStacks[Stack.READY] = newReadyStack;
      myStacks[Stack.HAND] = [];
      myStacks[Stack.DISCARD] = [];

      myCards = util.performRefreshLogic(myCards, myStacks);

      return {
        ...state,
        cards: myCards,
        stacks: myStacks,
        drawMod: DrawMod.NONE,
        shuffleUrgency: 0
      }
    case 'SET_DRAW_MOD':
      return {
        ...state,
        drawMod: action.value
      }
    default:
      console.error(`ACTION TYPE "${action.type}" is not recognized`);
      return state;
  }
};