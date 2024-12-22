import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "./section";

import "@/app/global.css";

const meta = {
  title: "emailTemplates/components/section",
  component: Section,
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "タイトル",
    description: "ここに説明が入ります",
    children: "Children",
  },
};