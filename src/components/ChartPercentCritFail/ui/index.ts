import styled from 'styled-components';
import {paletteCards} from '../../../theme';
export const Cells = styled.div`
  display: table;
  margin: 0 auto;
`

interface ICell {
  first?:boolean;
}

export const Cell = styled.div<ICell>`
  display: table-cell;
  padding: 10px 20px;
`
interface IDisplay {
  damageMod:string;
}
export const Display = styled.div<IDisplay>`
  font-size: 4.4rem;
  color: ${props => paletteCards[props.damageMod]};
`