"use client";

import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Titles } from "@/components/titles/Titles";

import "./page.css";

export default function SuccessPage() {

  return (
    <>
      <Header />
      <main>
        <Titles title="銀行振込" description="記載内容をよくご確認ください。" />
        <div className="forms">
          <div className="statusBar">
            <div className="steps">
              {(() => {
                const steps = ["必要事項の入力", "お支払い", "申し込み完了"];
                return steps.map((step, index) => (
                  <StepComponent key={index} label={step} isActive={index === 1 ? 1 : 0} />
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
            <h2 className="successText">お申し込みいただき、ありがとうございます。</h2>
            <p className="successText-sub">こちらの口座に指定金額をお振り込みください。完了しましたら、<a href="mailto:contact@kosenconfsyuto.com?subject=振り込みが完了しました">contact@kosenconfsyuto.com</a>までお知らせください。</p>
            <div className="bankTable">
              <div className="title">銀行名</div>
              <div className="content">三井住友銀行</div>
              <div className="title">支店名</div>
              <div className="content">自由が丘支店</div>
              <div className="title">口座番号</div>
              <div className="content">7451110</div>
              <div className="title">口座名義</div>
              <div className="content">コウセンカンファレンスインシユト</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
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
};