import React from "react";
import {render} from '@testing-library/react';
import ControlPanel from './ControlPanel';


test('<ControlPanel />', () => {
  const {debug, getByTestId} = render(<ControlPanel />);
  // const panel = getByTestId('controlPanel');
  const panelItem_draw = getByTestId('panelItem-draw');
  const panelItem_shuffle = getByTestId('panelItem-shuffle');
  const panelItem_advantage = getByTestId('panelItem-advantage');
  const panelItem_disadvantage = getByTestId('panelItem-disadvantage');

  // Ensure a Button exists in each Panel Item
  expect(panelItem_draw.querySelector('[data-testid="button"]')).toBeTruthy();
  expect(panelItem_shuffle.querySelector('[data-testid="button"]')).toBeTruthy();
  expect(panelItem_draw.querySelector('[data-testid="button"]')).toBeTruthy();
  expect(panelItem_draw.querySelector('[data-testid="button"]')).toBeTruthy();

  // debug();
});
