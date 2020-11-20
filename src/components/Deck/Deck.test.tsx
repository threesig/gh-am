import React from "react";
import {render, cleanup} from '@testing-library/react';
import Deck from './Deck';
import * as M from './mock';
import 'jest-styled-components';

test('<Deck />', () => {
  const {debug, queryByTestId, getByTestId} = render(<Deck cards={M.testStacks.BASE} />);

  // Make sure everything is here
  expect(queryByTestId('deck')).toBeTruthy();
  expect(queryByTestId('cardItem')).toBeTruthy();
  expect(queryByTestId('cardScaler')).toBeTruthy();
  expect(queryByTestId('cardWrap')).toBeTruthy();
  expect(queryByTestId('cardFront')).toBeTruthy();
  expect(queryByTestId('cardBack')).toBeTruthy();

  const cardItem = getByTestId('cardItem');
  expect(cardItem).toHaveStyleRule('position', 'absolute');
  expect(cardItem).toHaveStyleRule('bottom', '0');

});

test('<Deck /> - Stack - READY', () => {
  const {debug, getByTestId} = render(<Deck cards={M.testStacks.READY} />);

  const cardItem = getByTestId('cardItem');
  const cardScaler = getByTestId('cardScaler');

  const card = getByTestId('cardWrap');

  expect(cardItem).toHaveStyleRule('transform', 'translate(0rem,0rem)');
  expect(cardItem).toHaveStyleRule('opacity', '1');
  expect(cardItem).toHaveStyleRule('z-index', '0');

  expect(cardScaler).toHaveStyleRule('transform', 'scale(1)');
  expect(card).toHaveStyleRule('transform', 'rotateY(0deg)');
});
test('<Deck /> - Stack - HAND', () => {
  const {debug, getByTestId} = render(<Deck cards={M.testStacks.HAND} />);

  const cardItem = getByTestId('cardItem');
  const cardScaler = getByTestId('cardScaler');
  const card = getByTestId('cardWrap');

  expect(cardItem).toHaveStyleRule('transform', 'translate(0rem,-29.921641791044784rem)');
  expect(cardItem).toHaveStyleRule('opacity', '1');
  expect(cardItem).toHaveStyleRule('z-index', '100');

  expect(cardScaler).toHaveStyleRule('transform', 'scale(1.1)');
  expect(card).toHaveStyleRule('transform', 'rotateY(180deg)');

});
test('<Deck /> - Stack - DISCARD', () => {
  const {debug, getByTestId} = render(<Deck cards={M.testStacks.DISCARD} />);

  const cardItem = getByTestId('cardItem');
  const cardScaler = getByTestId('cardScaler');
  const card = getByTestId('cardWrap');

  expect(cardItem).toHaveStyleRule('transform', 'translate(37.5rem,0rem)');
  expect(cardItem).toHaveStyleRule('opacity', '1');
  expect(cardItem).toHaveStyleRule('z-index', '200');

  expect(cardScaler).toHaveStyleRule('transform', 'scale(1)');
  expect(card).toHaveStyleRule('transform', 'rotateY(180deg)');

});
test('<Deck /> - Stack - CONSUMED', () => {
  const {debug, getByTestId} = render(<Deck cards={M.testStacks.CONSUMED} />);

  const cardItem = getByTestId('cardItem');
  const cardScaler = getByTestId('cardScaler');
  const card = getByTestId('cardWrap');

  expect(cardItem).toHaveStyleRule('transform', 'translate(0rem,-54.40298507462687rem)');
  expect(cardItem).toHaveStyleRule('opacity', '0');
  expect(cardItem).toHaveStyleRule('z-index', '300');

  expect(cardScaler).toHaveStyleRule('transform', 'scale(0.2)');
  expect(card).toHaveStyleRule('transform', 'rotateY(180deg)');
});
