import * as T from './declare/types';

const baseProps:T.CardProps = {
  "id": "p0-0",
  "name": "am-p-01",
  "effects": {
    "damageMod": 0
  },
  "description": "+0",
  "stack": 0,
  "idx": 20,
  "isFlipped": false,
  "value": 0,
  "shuffle": false,
  "temporary": false,
  "isHilited": false
};

export const cardProps:any = {
  standard: baseProps,
  flipped: {...baseProps, isFlipped: true}
};
