import React from 'react';

import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

// * Storybook can not catch default export types
export const Button: React.FC<ButtonProps> = ({
  variant, children, className, ...rest
}) => (
  <button
    type="button"
    className={`${styles.button} ${`${styles[variant]}`} ${className}`}
    {...rest}
  >
    {children}
  </button>
);
