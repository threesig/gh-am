import styled from 'styled-components';
import {paletteCards} from '../../../theme';
export const Cells = styled.div`
  display: flex;
  padding: 10px;
`

interface ICell {
  first?:boolean;
}

export const Cell = styled.div<ICell>`
  flex: 1;
  display: flex;
  justify-content: ${props => props.first ? 'flex-start' : 'flex-end'};
`
interface IDisplay {
  damageMod:string;
}
export const Display = styled.div<IDisplay>`
  font-size: 4.4rem;
  color: ${props => paletteCards[props.damageMod]};
`