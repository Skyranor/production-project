import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  parameters: {},

  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: 1,
        text: 'Hot',
        user: {
          id: 1,
          avatar: 'https://i.pravatar.cc/300',
          userName: 'GirlXXX',
        },
      },
      {
        id: 2,
        text: 'Not hot',
        user: {
          id: 2,
          avatar: 'https://i.pravatar.cc/299',
          userName: 'XXXGirlXXX',
        },
      },
    ],
  },
};
