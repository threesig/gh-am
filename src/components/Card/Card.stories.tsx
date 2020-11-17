import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Card from './Card';

import * as I from './declare/interfaces';
import * as Mock from './mock';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<I.Card> = (args) => (
  <div style={{height: '800px', position: 'relative'}}>
  <Card {...args} />
  </div>
);

export const Standard = Template.bind({});
Standard.args = Mock.cardProps;

export const Flipped = Template.bind({});
Flipped.args = {...Mock.cardProps, isFlipped: true};