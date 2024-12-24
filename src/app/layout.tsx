import type { Metadata } from "next";
import "./global.css";
import { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "スポンサーサイト | 高専カンファレンス in 首都",
  description: "高専カンファレンス in 首都のスポンサーサイトです。",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID || ""} />
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
