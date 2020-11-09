import * as Type from "../global/types";
import {DrawMod, Stack} from "../global/enums";
import * as util from "../util";


const refreshCards = (cards:Type.CardProps[], stacks:string[][]) => {
    // eslint-disable-next-line array-callback-return
    stacks.map((stack, stackIdx) => {
        stack.map((cardId:string, cardIdx:number) => {
            const thisCard = cards.filter((card:Type.CardProps) => card.id===cardId)[0];

            thisCard.stack = stackIdx;
            thisCard.idx = cardIdx;
            thisCard.isFlipped = (stackIdx!==Stack.READY);
        });
    })

    return cards;
}

export const initializeDeckState = (state:Type.DeckState) => {

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


export const DeckReducer = (state:Type.DeckState, action:any) => {
    let myCards = [...state.cards];

    let myStacks:string[][] = [...state.stacks];
    let myReadyStack = [...myStacks[Stack.READY]];
    let myHandStack = [...myStacks[Stack.HAND]];
    let myDiscardStack = [...myStacks[Stack.DISCARD]];
    let {shuffleRequired:myShuffleRequired} = state;

    switch (action.type) {

        case 'DRAW':
            let {drawMod:myDrawMod} = state;
            const newHandStack:string[] = [];
            

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


            myShuffleRequired = myCards.filter((card:Type.CardProps) => newHandStack.includes(card.id) && card.shuffle===true ).length>0;

            myCards = refreshCards(myCards, myStacks);

            return {
                ...state,
                cards:myCards,
                stacks:myStacks,
                drawMod: myDrawMod,
                shuffleRequired: myShuffleRequired
            }
        case 'SHUFFLE':

            const newReadyStack:string[] = util.shuffle(myCards.map((card:Type.CardProps) => card.id));
            const newStacks:string[][] = [newReadyStack, [], []];

            myCards = refreshCards(myCards, newStacks);

            return {
                ...state,
                cards: myCards,
                stacks: newStacks,
                shuffleRequired: false
            }
        default:
            console.error(`ACTION TYPE "${action.type}" is not recognized`);
            return state;
    }
};