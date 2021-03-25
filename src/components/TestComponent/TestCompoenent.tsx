import React from 'react';

import { TestComponentProps } from './TestComponent.types';
import styles from './TestComponent.module.scss';

// * Storybook can no't catch default export types
export const TestComponent: React.FC<TestComponentProps> = ({ theme, children }) => (
  <div
    data-testid="test-component"
    className={`${styles['test-component']} ${styles[`test-component-${theme}`]}`}
  >
    <h1 className={styles.heading}>Test Component 😢</h1>
    {children}
  </div>
);
