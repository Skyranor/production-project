import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  parameters: {},

  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    isLoading: false,

    comment: {
      text: 'Bla-bla',
      id: 2,
      user: {
        userName: 'XXXGirlXXX',
        avatar: 'https://i.pravatar.cc/298',
        id: 2,
      },
    },
  },
};
