import type { Meta, StoryObj } from "@storybook/react";

import Acceptance from "./acceptance";

import "@/app/global.css";

const meta = {
  title: "components/Acceptance",
  component: Acceptance,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Acceptance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
