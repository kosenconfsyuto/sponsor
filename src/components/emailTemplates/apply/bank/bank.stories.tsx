import type { Meta, StoryObj } from "@storybook/react";

import { BankEmailTemplate } from "./bank";

import "@/app/global.css";

const meta = {
  title: "emailTemplates/apply/bank",
  component: BankEmailTemplate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BankEmailTemplate>;

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