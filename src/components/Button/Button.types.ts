import React from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
} & React.HTMLProps<HTMLButtonElement>;
