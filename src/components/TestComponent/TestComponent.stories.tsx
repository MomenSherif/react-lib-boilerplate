import React from 'react';
import { Story, Meta } from '@storybook/react';

import TestComponent from '.';
import { TestComponentProps } from './TestComponent.types';

export default {
  title: 'TestComponent',
  component: TestComponent,
} as Meta;

const Template: Story<TestComponentProps> = (args) => <TestComponent {...args} />;

export const Default = Template.bind({}) as Story<TestComponentProps>;
Default.args = {
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Mama',
};
