import React from 'react';
import { render, screen } from '@testing-library/react';

import TestComponent from '.';

describe('<TestComponent />', () => {
  it('should have primary className with default props', () => {
    render(<TestComponent theme="primary" />);
    const testComponent = screen.getByTestId('test-component');
    expect(testComponent).toHaveClass('test-component-primary');
  });

  it('should have secondary className with theme set as secondary', () => {
    render(<TestComponent theme="secondary" />);
    const testComponent = screen.getByTestId('test-component');
    expect(testComponent).toHaveClass('test-component-secondary');
  });
});
