import type { Meta, StoryObj } from "@storybook/react";

import { File } from "./file";

import "@/app/global.css";

const meta = {
  title: "emailTemplates/components/file",
  component: File,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleUser: Story = {
  args: {
    thumbnailSrc: `${process.env.NEXT_PUBLIC_CDN_DOMAIN}/wjqn69tgacyumq66/thumbnail.jpg`,
    thumbnailWidth: 595,
    thumbnailHeight: 842,
    thumbnailAlt: "メンバー紹介pdf",
    href: `${process.env.NEXT_PUBLIC_CDN_DOMAIN}/wjqn69tgacyumq66/names.pdf`,
    description: "個人情報開示目録.pdf",
  },
};