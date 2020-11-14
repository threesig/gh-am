import {useContext} from 'react';
import styled, {css, ThemeContext} from 'styled-components';
import {darken, lighten} from 'polished';

import * as I from '../../../global/interfaces';

type ButtonAttrs = {
  backgroundColor: string;
  color: string;
  boxShadow: string;
}

type ButtonAttributeValue = {
  volume: number;
  value: string;
}




const getStyleValues = (theme:any, volume:number) => {
  const ret:any = {};

  for (const attr in theme!) {
    const possibleAttrVals:ButtonAttributeValue[] = theme[attr];

    // @ts-ignore
    ret[attr] = possibleAttrVals.filter((valCandidate) => valCandidate.volume <= volume ).pop().value;
  }

  return ret;
}




const cssSetButtonState = (theme:any, volume:number) => {
  const {backgroundColor, color, boxShadow} = getStyleValues(theme, volume);

  return css`
    background-color: ${backgroundColor};  
    color: ${color};
    box-shadow: ${boxShadow};
  `
};


export const Button = styled.button<I.ButtonUI>`
  ${props => {
    return cssSetButtonState(props.theme[props.colorScheme], props.volume)
}};
  border-radius: 0.138888889em;
  transition: all .2s;
  font-family: 'Pirata One', cursive;
  font-size: 3.6rem;
  width: 24rem;
  height: 8rem;
`;