// TODO: Stack is `Deck` specific.  Move to `declare` function in `Deck` component
export enum Stack {
  READY,
  HAND,
  DISCARD,
  CONSUMED
}
export enum DrawMod {
  ADVANTAGE = 1,
  NONE = 0,
  DISADVANTAGE = -1
}