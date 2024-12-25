import type { Meta, StoryObj } from "@storybook/react";

import { PriceCard } from "./priceCard";

import "@/app/global.css";

const meta = {
  title: "components/comparativeTable/priceCard",
  component: PriceCard,
} satisfies Meta<typeof PriceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Individual: Story = {
  args: {
    type: "個人協賛",
  },
};

export const Company: Story = {
  args: {
    type: "団体協賛"
  },
};