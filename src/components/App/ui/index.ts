import styled, {keyframes} from 'styled-components';
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

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${kfAppLogoSpin} infinite 20s linear;
`;

export const Link = styled.a`
  color: #61dafb;
`;