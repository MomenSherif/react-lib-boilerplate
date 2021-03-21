import React from 'react';
import { Story, Meta } from '@storybook/react';

import TestComponent from './TestCompoenent';
import { TestComponentProps } from './TestComponent.types';

export default {
  title: 'TestComponent',
  component: TestComponent,
} as Meta;

const Template: Story<TestComponentProps> = (args) => (
  <TestComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  theme: 'primary',
};
