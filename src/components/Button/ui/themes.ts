import {lighten, darken, rgba} from 'polished';

const baseColor = {
  default: `gray`,
  draw: `green`,
  shuffle: `yellow`,
  advantage: `blue`,
  disadvantage: `brown`,
}

const getBackgroundColor = (baseColor:string) => lighten(.4, baseColor);
const getTextColor = (baseColor:string) => darken(.15, baseColor);

export default {
  'default' : {
    backgroundColor: [{volume: 0, value: getBackgroundColor(baseColor.default)}],
    color: [{volume: 0, value: getTextColor(baseColor.default)}],
    boxShadow: [
      {volume: 0, value: `none`},
      {volume: 1, value: `0 0 20px ${baseColor.default}`},
    ],
  },
  'draw' : {
    backgroundColor: [{volume: 0, value: getBackgroundColor(baseColor.draw)}],
    color: [{volume: 0, value: getTextColor(baseColor.draw)}],
    boxShadow: [
      {volume: 0, value: `none`},
      {volume: 1, value: `0 0 20px ${baseColor.draw}`},
    ],
  },
  'shuffle' : {
    backgroundColor: [{volume: 0, value: getBackgroundColor(baseColor.shuffle)}],
    color: [{volume: 0, value: getTextColor(baseColor.shuffle)}],
    boxShadow: [
      {volume: 0, value: `none`},
      {volume: 1, value: `0 0 20px ${'orange'}`},
      {volume: 2, value: `0 0 20px ${getBackgroundColor('orange')}`},
    ],
  },
  'advantage' : {
    backgroundColor: [{volume: 0, value: getBackgroundColor(baseColor.advantage)}],
    color: [{volume: 0, value: getTextColor(baseColor.advantage)}],
    boxShadow: [
      {volume: 0, value: `none`},
      {volume: 1, value: `0 0 20px ${baseColor.advantage}`},
    ],
  },
  'disadvantage' : {
    backgroundColor: [{volume: 0, value: getBackgroundColor(baseColor.disadvantage)}],
    color: [{volume: 0, value: getTextColor(baseColor.disadvantage)}],
    boxShadow: [
      {volume: 0, value: `none`},
      {volume: 1, value: `0 0 20px ${baseColor.disadvantage}`},
    ],
  },
};