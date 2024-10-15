import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "トップページ | スポンサーサイト | 高専カンファレンス in 首都",
  description: "高専カンファレンス in 首都のスポンサーサイトです。",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
};

export default function Home() {
  return (
    <>
      <header></header>
    </>
  );
}
