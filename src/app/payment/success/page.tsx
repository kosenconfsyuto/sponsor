"use client";

import { useState } from "react";

import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Titles } from "@/components/titles/Titles";
import { useSearchParams } from "next/navigation";

import { Fields, initialFields } from "./types";
import "./page.css";

function SuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId") as string;
  const [fields, setFields] = useState<Fields>(initialFields);
  const [isAlreadySent, setIsAlreadySent] = useState(false);

  const sendSuccess = async () => {
    if (!paymentId) return;
    if (isAlreadySent) return;
    setIsAlreadySent(true);
    const response = await fetch(`/api/payment/checkout/session/success?paymentId=${paymentId}`);
    if (response.ok) {
      const data: Fields = await response.json();
      setFields(data);
    } else {
      throw new Error("Failed to send success");
    }
  }

  sendSuccess();

  return (
    <>
      <Header />
      <main>
        <Titles title="協賛の申し込み" description="入力項目をよくご確認の上、お申込みください。" />
        <div className="forms">
          <div className="statusBar">
            <div className="steps">
              {(() => {
                const steps = ["必要事項の入力", "お支払い", "申し込み完了"];
                return steps.map((step, index) => (
                  <StepComponent key={index} label={step} isActive={index === 2 ? 1 : 0} />
                ));
              })()}
            </div>
          </div>
          <div className="form">
            <div className="checkMark__container">
              <svg className="checkMark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkMark-circle" cx="26" cy="26" r="24" fill="none" />
                <path className="checkMark-check" fill="none" d="M15 26l9 9 14-14" />
              </svg>
            </div>
            <h2 className="successText">支払いが完了しました。</h2>
            <p className="successText-sub">高専カンファレンス in 首都実行委員会よりメールをお送りします。今しばらくお待ちください。</p>
            <h3 className="successText">お支払い情報</h3>
            <div className="paymentInfos">
              <h4 className="description">スポンサータイプ</h4>
              <p className="value">{fields.sponsorType === "person" ? "個人" : ""}{fields.sponsorType === "company" ? "団体" : ""}</p>
              <h4 className="description">名前</h4>
              <p className="value">{fields.name}</p>
              <h4 className="description">住所</h4>
              <p className="value">{fields.address}</p>
              <h4 className="description">ニックネーム</h4>
              <p className="value">{fields.nickname}</p>
              <h4 className="description">メールアドレス</h4>
              <p className="value">{fields.email}</p>
              <h4 className="description">金額</h4>
              <p className="value">{fields.amount} 円</p>
              <h4 className="description">支払い方法</h4>
              <p className="value">{fields.paymentMethod === "credit" ? "クレジットカード" : ""}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
import { Suspense } from "react";

export default function SuspendedSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPage />
    </Suspense>
  );
}

import "./../stepComponent.css";

const StepComponent = ({ label, isActive }: { label: string; isActive: number }) => {
  return (
    <div className={`step ${isActive ? "step--active" : ""}`}>
      <span className="activeChip"></span>
      <span className="label">{label}</span>
    </div>
  );
}