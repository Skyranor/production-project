import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: 1,
          userName: 'admin',
        },
      },
    }),
  ],
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};

Light.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {};

Blue.decorators = [ThemeDecorator(Theme.BLUE)];
