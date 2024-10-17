import type { Meta, StoryObj } from '@storybook/react';

import { WideContainer } from './WideContainer';

import "@/app/globals.css";

const meta = {
  title: 'components/wideContainer',
  component: WideContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WideContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sponsorship: Story = {
  args: {
    title: "協賛する",
    description: "口座振込のほか、クレジットカード払いにも対応しています。",
    href: "/sponsorship",
    hrefDescription: "協賛申込ページへ",
  },
};