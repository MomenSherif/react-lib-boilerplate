import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TestComponent } from './TestCompoenent';
import { TestComponentProps } from './TestComponent.types';

export default {
  title: 'TestComponent',
  component: TestComponent,
} as Meta;

const Template: Story<TestComponentProps> = (args) => (
  <TestComponent {...args} />
);

export const Default = Template.bind({}); // as Story<TestComponentProps> casting as bind lose type def!
Default.args = {
  children: 'Default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Mama',
};
