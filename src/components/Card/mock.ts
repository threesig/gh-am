import * as T from './declare/types';

const baseProps:any = {
  name: "am-p-01",
  isFlipped: false,
  isHilited: false,
};

export const cardProps:any = {
  standard: baseProps,
  flipped: {...baseProps, isFlipped: true}
};
