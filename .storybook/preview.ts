import { Parameters } from '@storybook/react';
import '../src/styles.scss';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'padded',
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
