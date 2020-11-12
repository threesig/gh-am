import {lighten, darken, rgba} from 'polished';

const baseColor = {
  default: `#efefef`,
  draw: `green`,
  shuffle: `yellow`,
  advantage: `blue`,
  disadvantage: `brown`,
}

const getBackgroundColor = (baseColor:string) => lighten(0, baseColor);
const getTextColor = (baseColor:string) => darken(.4, baseColor);


const defaultBackgroundColor = baseColor.default;
const defaultTextColor = darken(.7, baseColor.default);

const defaultTheme = {
  backgroundColor: [{volume: 0, value: defaultBackgroundColor}],
  color: [{volume: 0, value: defaultTextColor}],
  boxShadow: [{volume: 0, value: `none`}],
}

// Set a base for all buttons
const buttonThemes = {
  default: defaultTheme,
  draw: defaultTheme,
  advantage: defaultTheme,
  disadvantage: defaultTheme,
  shuffle: defaultTheme,
}

let thisColor;



// Shuffle
thisColor = 'yellow';
buttonThemes.shuffle.backgroundColor.push({volume: 1, value: thisColor});
buttonThemes.shuffle.color.push({volume: 1, value: darken(.3, thisColor)});
buttonThemes.shuffle.boxShadow.push({volume: 1, value: `0 0 2rem ${thisColor}`});

// TODO: Process of adding new volume styles is very repetitive.  Find way to automate this.





export default buttonThemes;