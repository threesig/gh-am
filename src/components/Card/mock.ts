import * as T from './declare/types';

const baseProps:any = {
  name: "am-p-01",
  isFlipped: false,
  isHilited: false,
  x: 0,
  y: 0,
  z: 0,
  scale: 1
};

export const cardProps:any = {
  standard: baseProps,
  flipped: {...baseProps, isFlipped: true}
};
