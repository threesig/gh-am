import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonShuffle from './ButtonShuffle';

export default {
  title: 'Example/Specific Button/Shuffle',
  component: ButtonShuffle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <ButtonShuffle {...args} />;

export const Standard = Template.bind({});