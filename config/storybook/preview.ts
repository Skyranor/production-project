import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'theme/ThemeContext';
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.DARK), RouteDecorator],
};

export default preview;
