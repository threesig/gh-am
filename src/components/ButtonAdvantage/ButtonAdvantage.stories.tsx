import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonAdvantage from './ButtonAdvantage';

export default {
  title: 'Example/Specific Button/Strengthen',
  component: ButtonAdvantage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <ButtonAdvantage {...args} />;

export const Standard = Template.bind({});