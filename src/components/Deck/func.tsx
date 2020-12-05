import * as CardTypes from "../Card/declare/types";
import {Stack} from "./declare/enums";
import {AMCards} from "../../data/attack-modifiers";

export const shuffle = (arra1:any[]) => {
  let ctr = arra1.length, temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);

    // Decrease ctr by 1
    ctr--;

    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

export const buildCards = (deckSpec:any) => {
  const myCards:CardTypes.CardData[] = [];

  let j:number = 0;
  for (const cardType in deckSpec) {
    const cardSpec = AMCards.filter((card:any) => card.type===cardType)[0];
    const cardCount = deckSpec[cardType];
    const {name, type, damageMod, effects, description, shuffle, temporary} = cardSpec;

    for (let i = 0; i < cardCount; i++) {
      myCards.push({
        id: `${type}-${i}`,
        name,
        damageMod,
        effects,
        description,
        stack: Stack.READY,
        idx:j++,
        value: calculateCardValue(damageMod, effects),
        shuffle: shuffle||false,
        temporary: temporary||false,
      } as CardTypes.CardData);
    }
  }

  return myCards;
}
export const calculateCardValue = (damageMod:any, effects:CardTypes.CardEffect[]) => {
  const baseVal = damageMod === '2x'
    ? 100
    : damageMod === '-'
      ? -100
      : damageMod;

  const ignoredEffects = ['rolling'];
  const valuedEffects = effects.filter((effect) => !ignoredEffects.includes(effect.type));

  return baseVal + valuedEffects.length * 10;
}


export const performRefreshLogic = (cards:CardTypes.CardData[], stacks:string[][]) => {
  // eslint-disable-next-line array-callback-return
  stacks.map((stack, stackIdx) => {
    // eslint-disable-next-line array-callback-return
    stack.map((cardId, cardIdx) => {
      const thisCard = cards.filter((card) => card.id===cardId)[0];

      thisCard.stack = stackIdx;
      thisCard.idx = cardIdx;
      thisCard.isHilited = (stackIdx===Stack.HAND);
    });
  })

  return cards;
}
export const performDiscardLogic = (cards:CardTypes.CardData[], stacks:string[][]) => {
  /** Perform Discard Logic **/
  const myCards = [...cards];
  const myStacks = [...stacks];
  const myHandStack = myStacks[Stack.HAND];
  const myConsumedStack = myStacks[Stack.CONSUMED];
  const myDiscardStack = myStacks[Stack.DISCARD];

  // Set aside Temporary cards to place in `Consumed` stack.
  const forConsumed = myCards.filter((card) => myHandStack.includes(card.id) && card.temporary).map((card) => card.id);
  const newConsumedStack = [...myConsumedStack, ...forConsumed];

  // Place remaining cards in `Discard` stack.
  const forDiscard = myHandStack.filter((cardId) => !forConsumed.includes(cardId));
  const newDiscardStack = [...myDiscardStack, ...forDiscard];

  myStacks[Stack.DISCARD] = newDiscardStack;
  myStacks[Stack.CONSUMED] = newConsumedStack;
  myStacks[Stack.HAND] = [];

  return myStacks;
}


