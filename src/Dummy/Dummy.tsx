import React from 'react';

import styles from './Dummy.module.scss';
import { TestComponentProps } from './TestComponent.types';

// * Storybook can no't catch default export types
export const Dummy: React.FC<TestComponentProps> = ({ children }) => (
  <div
    data-testid="dummy-component"
    className={`${styles['dummy-component']}}`}
  >
    <h1 className={styles.heading}>Dummy 😢</h1>
    {children}
  </div>
);
