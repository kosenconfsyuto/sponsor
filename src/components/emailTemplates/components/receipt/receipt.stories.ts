import type { Meta, StoryObj } from "@storybook/react";

import { Receipt } from "./receipt";

import "@/app/global.css";

const meta = {
  title: "emailTemplates/components/receipt",
  component: Receipt,
} satisfies Meta<typeof Receipt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    fields: [
      { label: "協賛の種類", description: "団体協賛"},
      { label: "お名前", description: "お名前 様" },
      { label: "ニックネーム", description: "ニックネーム 様" },
      { label: "日付", description: "YYYY年MM月dd日" },
      { label: "お支払い金額", description: "100 円" },
      { label: "Payment ID", description: "XXXXXXXXXX" },
    ],
    caption: "※決済代行サービスを使用しているため、クレジットカードでのお支払いの場合、クレジットカード情報はサーバー上に保持されません。",
  },
};