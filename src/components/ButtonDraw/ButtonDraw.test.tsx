import React from "react";
import {render} from '@testing-library/react';
import ButtonDraw from './ButtonDraw';


test('<ButtonDraw />', () => {
  const {debug, getByTestId} = render(<ButtonDraw />);
  const button = getByTestId('button');

  expect(button.textContent).toBe('Draw!');

  // debug();
});
