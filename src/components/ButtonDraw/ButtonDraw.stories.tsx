import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonDraw from './ButtonDraw';

export default {
  title: 'Example/Specific Button',
  component: ButtonDraw,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <ButtonDraw {...args} />;

export const Draw = Template.bind({});