import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {ThemeProvider} from 'styled-components';
import Button from './Button';

import * as I from './declare/interfaces';
import * as mock from './mock';
import buttonThemes from './ui/themes';

export default {
  title: 'Example/Basic Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<I.Button> = (args) => (
  <ThemeProvider theme={buttonThemes}>
    <Button {...args} />
  </ThemeProvider>
);

export const Generic = Template.bind({});
Generic.args = {
  children: 'Generic Button'
};

export const Green = Template.bind({});
Green.args = {
  children: 'Green Button',
  colorScheme: 'draw'
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: 'Yellow Button',
  colorScheme: 'shuffle'
};

export const Blue = Template.bind({});
Blue.args = {
  children: 'Blue Button',
  colorScheme: 'advantage'
};

export const Brown = Template.bind({});
Brown.args = {
  children: 'Brown Button',
  colorScheme: 'disadvantage'
};

