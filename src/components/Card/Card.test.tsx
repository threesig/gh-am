import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Card from './Card';
import * as Mock from './mock';
import 'jest-styled-components';


test('<Card />', () => {
  const {debug, queryByTestId, getByTestId} = render(<Card {...Mock.cardProps.standard} />);

  expect(queryByTestId('card')).toBeTruthy();
  expect(queryByTestId('cardFront')).toBeTruthy();
  expect(queryByTestId('cardBack')).toBeTruthy();

  const card = getByTestId('card');
  const cardBack = getByTestId('cardBack');

  // Card is not flipped
  expect(card)
    .toHaveStyleRule('transform', 'rotateY(0deg) translate(0.4rem,-1.2rem) scale(1)');

  // Card has correct back image
  expect(cardBack)
    .toHaveStyleRule('background-image', 'url(cardBack.jpg)');
});

test('<Card /> Flipped', () => {
  const {debug, getByTestId} = render(<Card {...Mock.cardProps.flipped} />);
  const card = getByTestId('card');

  // Card is flipped
  expect(card)
    .toHaveStyleRule('transform', 'rotateY(180deg) translate(-0.4rem,-1.2rem) scale(1)');

});
