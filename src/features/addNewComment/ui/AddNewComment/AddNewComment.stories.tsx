import type { Meta, StoryObj } from '@storybook/react';

import AddNewComment from './AddNewComment';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta = {
  title: 'features/AddNewComment',
  component: AddNewComment,
  decorators: [
    StoreDecorator({
      addNewComment: {
        text: 'text',
      },
    }),
  ],
  parameters: {},

  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddNewComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    onSendComment: () => {},
  },
};
