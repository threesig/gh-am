import React from "react";
import {render} from '@testing-library/react';
import Providers from '../../contexts/Providers';
import App from './App';



test('<App />', () => {
  const {debug, getByTestId, queryByTestId} = render(<Providers><App /></Providers>);
  const app = getByTestId('app');

  expect(queryByTestId('controlPanel')).toBeTruthy();
  expect(queryByTestId('deck')).toBeTruthy();
});
