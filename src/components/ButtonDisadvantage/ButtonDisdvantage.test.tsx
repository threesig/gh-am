import React from "react";
import {render} from '@testing-library/react';
import ButtonDisadvantage from './ButtonDisadvantage';


test('<ButtonDisadvantage />', () => {
  const {debug, getByTestId} = render(<ButtonDisadvantage />);
  const button = getByTestId('button');

  expect(button.textContent).toBe('Muddle');

  // debug();
});
