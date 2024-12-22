import type { Meta, StoryObj } from "@storybook/react";

import { Titles } from "./Titles";

import "@/app/global.css";

const meta = {
  title: "components/titles",
  component: Titles,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Titles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "協賛の申し込み",
    description: "入力項目をよくご確認の上、お申込みください。",
  },
};