import type { Meta, StoryObj } from "@storybook/react";

import { ArrowButton } from "./ArrowButton";

import "@/app/global.css";

const meta = {
  title: "components/arrowButton",
  component: ArrowButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Date: Story = {
  args: {
    href: "https://example.com",
    label: "協賛申込ページへ",
  },
};