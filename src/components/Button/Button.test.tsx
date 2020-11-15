import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from './Button';
import * as mock from './mock';

test('<Button />', () => {
  const {getByTestId, debug} = render(
    <Button callback={mock.testClick}>{mock.buttonText}</Button>
  );
  const button = getByTestId('button');

  fireEvent.click(button);
  expect(mock.testClick).toHaveBeenCalledTimes(1);
});
