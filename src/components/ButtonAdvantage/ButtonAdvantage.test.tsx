import React from "react";
import {render} from '@testing-library/react';
import ButtonAdvantage from './ButtonAdvantage';


test('<ButtonAdvantage />', () => {
  const {debug, getByTestId} = render(<ButtonAdvantage />);
  const button = getByTestId('button');

  expect(button.textContent).toBe('Strengthen');

  // debug();
});
