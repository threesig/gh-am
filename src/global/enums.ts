export enum Stack {
  DECK,
  HAND,
  DISCARD
}


type DrawModType = {
  ADVANTAGE: number,
  NONE: number,
  DISADVANTAGE: number,
}
export const DrawMod:DrawModType = {
  ADVANTAGE: 1,
  NONE: 0,
  DISADVANTAGE: -1
}