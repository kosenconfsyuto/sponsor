"use client";

import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Titles } from "@/components/titles/Titles";

import "./page.css";

interface Rule {
  title: string;
  content: string;
}

export default function SuccessPage() {
  const rules: Rule[] = [
    { title: "販売事業者", content: "高専カンファレンス in 首都実行委員会" },
    { title: "運営責任者", content: "藤村 はる" },
    { title: "所在地", content: "お問い合わせください" },
    { title: "電話番号", content: "お問い合わせください" },
    { title: "メールアドレス", content: "contact@kosnconfsyuto.com" },
    { title: "お支払い方法", content: "クレジットカード、銀行振込" },
    { title: "商品の引き渡し時期", content: "お支払いが完了したことを確認したのち提供いたします" },
    { title: "返品・交換について", content: "商品の性質上、返品・交換はできません" }
  ];
  
  return (
    <>
      <Header />
      <main>
        <Titles title="特定商取引法に基づく表記" />
        <div className="rules">
          {rules.map((rule, index) => (
            <div key={index} className="rule">
              <div className="title">{rule.title}</div>
              <div className="content">{rule.content}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}