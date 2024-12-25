import type { Meta, StoryObj } from "@storybook/react";

import { Item } from "./item";

import "@/app/global.css";

const meta = {
  title: "components/comparativeTable/item",
  component: Item,
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "ここにテキストが入ります"
  },
};

export const LowerPlan: Story = {
  args: {
    children: "下位プランの全特典"
  },
};