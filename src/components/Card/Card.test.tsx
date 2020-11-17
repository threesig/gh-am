import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Card from './Card';
import * as Mock from './mock';

test('<Card />', () => {
  const {debug, queryByTestId} = render(<Card {...Mock.cardProps} />);

  expect(queryByTestId('card')).toBeTruthy();
  expect(queryByTestId('cardFront')).toBeTruthy();
  expect(queryByTestId('cardBack')).toBeTruthy();

});
