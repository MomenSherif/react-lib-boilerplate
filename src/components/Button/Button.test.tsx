import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('<Button />', () => {
  it('Should handle onClick as props', () => {
    const mockedFn = jest.fn();
    render(
      <Button type="button" variant="primary" onClick={mockedFn}>
        Click Me
      </Button>,
    );
    const button = screen.getByRole('button', { name: /click me/i });
    userEvent.click(button);
    expect(mockedFn).toBeCalledTimes(1);
  });
});
