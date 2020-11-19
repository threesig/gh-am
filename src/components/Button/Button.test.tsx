import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from './Button';
import * as mock from './mock';
import 'jest-styled-components';

test('<Button />', () => {
  const {getByTestId, debug} = render(
    <Button callback={mock.testClick}>{mock.buttonText}</Button>
  );
  const button = getByTestId('button');
  expect(button).toHaveStyleRule('font-family', '\'Pirata One\',cursive');

  fireEvent.click(button);
  expect(mock.testClick).toHaveBeenCalledTimes(1);

});
