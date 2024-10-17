import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

import "@/app/globals.css";

const meta = {
  title: 'components/footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const fullscreen: Story = {
  args: {
    parameters: {
      layout: 'fullscreen',
    },
  },
};
