import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from './Button';

const onClick = jest.fn();

test('<Button />', () => {
  const {getByTestId} = render(
    <Button callback={onClick}>Test Button</Button>
  );
  const button = getByTestId('button');

  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
