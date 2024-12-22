import type { Meta, StoryObj } from "@storybook/react";

import { Logos } from "./logos";

import "@/app/global.css";

const meta = {
  title: "emailTemplates/components/logos",
  component: Logos,
} satisfies Meta<typeof Logos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isMin: false,
  },
};

export const Min: Story = {
  args: {
    isMin: true,
  },
};