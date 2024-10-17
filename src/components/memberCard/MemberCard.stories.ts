import type { Meta, StoryObj } from '@storybook/react';

import { MemberCard } from './MemberCard';

import "@/app/globals.css";

const meta = {
  title: 'components/memberCard',
  component: MemberCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MemberCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const User__3476_sora: Story = {
  args: {
    userId: "3476_sora",
    username: "想來",
    isLeader: true,
    tags: ["デザイン", "Twitter"],
  },
};