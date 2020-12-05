export const cardData = {
  "id": "p0-0",
  "name": "am-p-01",
  "damageMod": 0,
  "effects": [],
  "description": "+0",
  "stack": 1,
  "idx": 0,
  "isFlipped": false,
  "value": 0,
  "shuffle": false,
  "temporary": false,
  "isHilited": true
};

const baseProps:any = {
  name: cardData.name,
  isFlipped: cardData.isFlipped,
  isHilited: cardData.isHilited,
};

export const cardProps:any = {
  standard: baseProps,
  flipped: {...baseProps, isFlipped: !cardData.isFlipped}
};
