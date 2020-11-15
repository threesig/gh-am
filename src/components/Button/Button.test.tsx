import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from './Button';

const mockClick = jest.fn();

test('<Button />', () => {
  const {getByTestId} = render(
    <Button callback={mockClick}>Test Button</Button>
  );
  const button = getByTestId('button');

  fireEvent.click(button);
  expect(mockClick).toHaveBeenCalledTimes(1);
});
