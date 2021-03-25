import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '.';
import { ButtonProps } from './Button.types';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({}) as Story<ButtonProps>;
Default.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({}) as Story<ButtonProps>;
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};
