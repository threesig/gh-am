import React from 'react';
import Providers from '../src/contexts/Providers';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// .storybook/preview.js


export const decorators = [(Story) => (
  <Providers>
    <div style={{ margin: '3em' }}><Story/></div>
  </Providers>
)];