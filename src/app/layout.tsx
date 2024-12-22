import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./global.css";
import { ReactNode } from "react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
