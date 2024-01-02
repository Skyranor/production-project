import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Normal: Story = {
  args: {
    width: '100px',
    height: '200px',
  },
};
export const Circle: Story = {
  args: {
    border: '50%',
    width: '100px',
    height: '100px',
  },
};

export const NormalDark: Story = {
  args: {
    width: '100px',
    height: '200px',
  },
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
export const CircleDark: Story = {
  args: {
    border: '50%',
    width: '100px',
    height: '100px',
  },
};

CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalBlue: Story = {
  args: {
    width: '100px',
    height: '200px',
  },
};
NormalBlue.decorators = [ThemeDecorator(Theme.BLUE)];
export const CircleBlue: Story = {
  args: {
    border: '50%',
    width: '100px',
    height: '100px',
  },
};

CircleBlue.decorators = [ThemeDecorator(Theme.BLUE)];
