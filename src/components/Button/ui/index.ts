import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';
import * as I from '../../../global/interfaces';


const cssSetVolume = (volume:number) => volume > 0 && css`
  background-color: yellow;
  box-shadow: 0 0 1rem yellow;
  color: ${darken(0.35, '#ffff00')};
`;


export const Button = styled.button<I.ButtonUI>`
  ${props => cssSetVolume(props.volume)};
  border-radius: 0.138888889em;
  transition: all .2s;
  font-family: 'Pirata One', cursive;
  font-size: 3.6rem;
  width: 24rem;
  height: 8rem;
`;