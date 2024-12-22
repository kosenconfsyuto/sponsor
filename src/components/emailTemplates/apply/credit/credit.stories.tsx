import type { Meta, StoryObj } from "@storybook/react";

import { CreditEmailTemplate } from "./credit";

import "@/app/global.css";

const meta = {
  title: "emailTemplates/apply/credit",
  component: CreditEmailTemplate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CreditEmailTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleUser: Story = {
  args: {
    sponsorType: "company",
    name: "John Doe",
    nickname: "JD",
    date: new Date(),
    amount: 100000,
    paymentId: 123456,
  },
};