import React from 'react';

import { TestComponentProps } from './TestComponent.types';
import styles from './TestComponent.module.scss';

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`${styles['test-component']} ${
      styles[`test-component-${theme}`]
    }`}
  >
    <h1 className={styles.heading}>I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default TestComponent;
