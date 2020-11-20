import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Deck from './Deck';

import * as I from './declare/interfaces';
import * as M from './mock';

export default {
  title: 'Example/Deck',
  component: Deck,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<I.Deck> = (args) => (
  <Deck {...args} />
);

export const ReadyStack = Template.bind({});
ReadyStack.args = {cards: M.testStacks.READY};

export const HandStack = Template.bind({});
HandStack.args = {cards: M.testStacks.HAND};

export const DiscardStack = Template.bind({});
DiscardStack.args = {cards: M.testStacks.DISCARD};

export const ConsumedStack = Template.bind({});
ConsumedStack.args = {cards: M.testStacks.CONSUMED};

