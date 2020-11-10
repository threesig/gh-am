import {DrawMod, Stack} from "../global/enums";
import * as T from "../global/types";
import * as util from "../util";


const refreshCards = (cards:T.CardProps[], stacks:string[][]) => {
  // eslint-disable-next-line array-callback-return
  stacks.map((stack, stackIdx) => {
    // eslint-disable-next-line array-callback-return
    stack.map((cardId, cardIdx) => {
      const thisCard = cards.filter((card:T.CardProps) => card.id===cardId)[0];

      thisCard.stack = stackIdx;
      thisCard.idx = cardIdx;
      thisCard.isFlipped = (stackIdx!==Stack.READY);
      thisCard.isHilited = (stackIdx===Stack.HAND);
    });
  })

  return cards;
}


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
    shuffleRequired: false
  };
}




export const prepareDeckState = (state:T.DeckState) => {

  let myCards = [...state.cards];
  let myStacks = [...state.stacks];
  myStacks[Stack.READY] = [...util.shuffle(myStacks[Stack.READY])];

  myCards = refreshCards(myCards, myStacks);
  return {
    ...state,
    cards:myCards,
    stacks:myStacks,
  }
};


export const DeckReducer = (state:T.DeckState, action:any) => {
  let myCards = [...state.cards];

  let myStacks:string[][] = [...state.stacks];
  let myReadyStack = [...myStacks[Stack.READY]];
  let myHandStack = [...myStacks[Stack.HAND]];
  let myDiscardStack = [...myStacks[Stack.DISCARD]];
  let myConsumedStack = [...myStacks[Stack.CONSUMED]];

  switch (action.type) {

    case 'DRAW':
      let {drawMod:myDrawMod, shuffleRequired:myShuffleRequired} = state;


      /** Perform Discard Logic **/

      // Set aside Temporary cards to place in `Consumed` stack.
      const forConsumed = myCards.filter((card:T.CardProps) => myHandStack.includes(card.id) && card.temporary).map((card:T.CardProps) => card.id);
      myConsumedStack = [...myConsumedStack, ...forConsumed];

      // Place remaining cards in `Discard` stack.
      const forDiscard = myHandStack.filter((cardId:string) => !forConsumed.includes(cardId));
      myDiscardStack = [...myDiscardStack, ...forDiscard];



      /** Perform Draw Logic **/

      // Start New Hand.  Draw 1 card.
      const newHandStack:string[] = [];
      newHandStack.push(myReadyStack.pop() as string);


      // If Advantage or Disadvantage
      if(state.drawMod!==DrawMod.NONE) {
        newHandStack.push(myReadyStack.pop() as string);
        myDrawMod = DrawMod.NONE;
      }


      // TODO: Add Rolling Modifier Logic


      /** Check if newly drawn card(s) require a shuffle **/
      myShuffleRequired = myCards.filter((card:T.CardProps) => newHandStack.includes(card.id) && card.shuffle===true ).length>0;


      /** Define current card stacks  **/
      myStacks = [myReadyStack, newHandStack, myDiscardStack, myConsumedStack];

      // Refresh CardState
      myCards = refreshCards(myCards, myStacks);

      return {
        ...state,
        cards:myCards,
        stacks:myStacks,
        drawMod: myDrawMod,
        shuffleRequired: myShuffleRequired
      }
    case 'SHUFFLE':

      const newReadyStack:string[] = util.shuffle([...myReadyStack, ...myHandStack, ...myDiscardStack]);
      const newStacks:string[][] = [newReadyStack, [], [], myConsumedStack];

      myCards = refreshCards(myCards, newStacks);

      return {
        ...state,
        cards: myCards,
        stacks: newStacks,
        drawMod: DrawMod.NONE,
        shuffleRequired: false
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