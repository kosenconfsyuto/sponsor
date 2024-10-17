import type { Meta, StoryObj } from '@storybook/react';

import { MetaCard } from './MetaCard';

import "@/app/globals.css";

const meta = {
  title: 'components/metaCard',
  component: MetaCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MetaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Date: Story = {
  args: {
    icon: "event",
    label: "開催日",
    description: "2025年3月16日",
  },
};