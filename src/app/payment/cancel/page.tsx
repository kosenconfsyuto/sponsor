"use client";

import { useState } from "react";

import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Titles } from "@/components/titles/Titles";
import { useSearchParams } from "next/navigation";

import "./page.css";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId") as string;
  const [isAlreadySent, setIsAlreadySent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const sendSuccess = async () => {
    if (!paymentId) return;
    if (isAlreadySent) return;
    setIsAlreadySent(true);
    const response = await fetch(`/api/payment/checkout/session/cancel?paymentId=${paymentId}`);
    if (response.ok) {
      setLoading(false);
    } else {
      setError("キャンセル処理中にエラーが発生しました。");
    }
    return;
  }

  sendSuccess();

  if (loading) {
    return (
      <Suspense>
        <Header />
        <main>
          <Titles title="協賛の申し込み" description="入力項目をよくご確認の上、お申込みください。" />
          <div className="forms">
            <div className="statusBar">
              <div className="steps">
                {(() => {
                  const steps = ["必要事項の入力", "お支払い", "申し込み完了"];
                  return steps.map((step, index) => (
                    <StepComponent key={index} label={step} isActive={index === 4 ? 1 : 0} />
                  ));
                })()}
              </div>
            </div>
            <div className="form">
              <h2 className="successText">リクエストを処理中です...</h2>
              {error && <p className="errorText">{error}</p>}
            </div>
          </div>
        </main>
        <Footer />
      </Suspense>
    );
  }

  return (
    <Suspense>
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
            <h2 className="successText">リクエストは正しくキャンセルされました。</h2>
          </div>
        </div>
      </main>
      <Footer />
    </Suspense>
  );
}

import "./../stepComponent.css";
import { Suspense } from "react";

const StepComponent = ({ label, isActive }: { label: string; isActive: number }) => {
  return (
    <div className={`step ${isActive ? "step--active" : ""}`}>
      <span className="activeChip"></span>
      <span className="label">{label}</span>
    </div>
  );
}