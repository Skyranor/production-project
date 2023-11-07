import { StoryFn } from '@storybook/react';
import { Theme } from 'theme/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
