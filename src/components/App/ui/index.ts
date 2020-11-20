import styled, {keyframes} from 'styled-components';
import {getRems} from '../../../util';
import {CardList} from "../../Deck/ui";
import * as CommonUI from '../../CommonUI';

export const Container = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Content = styled(CommonUI.Content)``;

const kfAppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const tableHW = 720;
const tableGutter = 20;

export const Table = styled.div`
  background-color: cadetblue;
  height: ${getRems(tableHW)}rem;
  position: relative;
  width: ${getRems(tableHW)}rem;
  ${CardList} {
    position: absolute;
    bottom: ${getRems(tableGutter)}rem;
    left: ${getRems(tableGutter)}rem;
  }
`