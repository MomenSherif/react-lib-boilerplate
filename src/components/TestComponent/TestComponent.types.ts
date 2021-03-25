import React from 'react';

export type TestComponentProps = {
  /**
   * Theme colors
   */
  theme: 'primary' | 'secondary';
  children?: React.ReactNode;
};
