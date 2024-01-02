import type { Preview } from '@storybook/react';

import '../../src/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

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
  decorators: [ThemeDecorator(Theme.LIGHT), RouteDecorator],
};

export default preview;
