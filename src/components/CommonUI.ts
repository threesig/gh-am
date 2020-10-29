import styled from 'styled-components';

export const Content = styled.div`
  > * {
    margin-top: 1em;
    &:first-child {
      margin-top: 0;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export const Section = styled.section`
  padding: 20px;
`