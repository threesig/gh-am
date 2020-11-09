import * as Type from "./global/types";
import {AMCards} from "./data/attack-modifiers";
import {Stack} from "./global/enums";

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
  const myCards:Type.CardProps[] = [];

  let j:number = 0;
  for (const cardType in deckSpec) {
    const cardSpec = AMCards.filter((card:any) => card.type===cardType)[0];
    const cardCount = deckSpec[cardType];
    const {name, type, effects, description, shuffle, temporary} = cardSpec;

    for (let i = 0; i < cardCount; i++) {
      myCards.push({
        id: `${type}-${i}`,
        name,
        effects,
        description,
        stack: Stack.READY,
        idx:j++,
        isFlipped:false,
        shuffle: shuffle||false,
        temporary: temporary||false,
      } as Type.CardProps);
    }
  }

  return myCards;
}