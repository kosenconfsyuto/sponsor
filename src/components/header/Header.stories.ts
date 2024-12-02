import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

import "@/app/global.css";

const meta = {
  title: "components/header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullScreen: Story = {
  args: {
    parameters: {
      layout: "fullscreen",
    },
  },
};
