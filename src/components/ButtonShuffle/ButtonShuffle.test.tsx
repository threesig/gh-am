import React from "react";
import {render} from '@testing-library/react';
import ButtonShuffle from './ButtonShuffle';


test('<ButtonShuffle />', () => {
  const {debug, getByTestId} = render(<ButtonShuffle />);
  const button = getByTestId('button');

  expect(button.textContent).toBe('Shuffle');

  // debug();
});
