import type { Meta, StoryObj } from "@storybook/react";

import { ListCard } from "./listCard";

import "@/app/global.css";

const meta = {
  title: "components/comparativeTable/listCard",
  component: ListCard,
} satisfies Meta<typeof ListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    unit: 1
  },
};

export const Basic: Story = {
  args: {
    unit: 5
  },
};

export const Premium: Story = {
  args: {
    unit: 10
  },
};

export const Platina: Story = {
  args: {
    unit: 15
  },
};