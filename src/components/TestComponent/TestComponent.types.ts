import React from 'react';

export type TestComponentProps = {
  /**
   * Theme colors for our EEHC product
   */
  theme: 'primary' | 'secondary';
  children?: React.ReactNode;
};
