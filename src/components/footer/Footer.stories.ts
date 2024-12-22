import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";

import "@/app/global.css";

const meta = {
  title: "components/footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullScreen: Story = {
  args: {
    parameters: {
      layout: "fullscreen",
    },
  },
};
