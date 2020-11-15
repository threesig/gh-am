import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonDisadvantage from './ButtonDisadvantage';

export default {
  title: 'Example/Specific Button',
  component: ButtonDisadvantage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <ButtonDisadvantage {...args} />;

export const Muddle = Template.bind({});