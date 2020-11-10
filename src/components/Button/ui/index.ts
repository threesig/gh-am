import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';
import * as I from '../../../global/interfaces';


const cssMaybeHilite = (hilited:boolean) => hilited && css`
  background-color: yellow;
  box-shadow: 0 0 10px yellow;
  color: ${darken(0.35, '#ffff00')};
`;


export const Button = styled.button<I.ButtonPropsUI>`
  ${props => cssMaybeHilite(props.hilited)};
  border-radius: 0.138888889em;
  transition: all .2s;
  font-family: 'Pirata One', cursive;
  font-size: 36px;
  width: 6em;
  height: 2em;
`;