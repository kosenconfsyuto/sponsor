"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Titles } from "@/components/titles/Titles";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

import "./page.css";
import { inputFields, initialInputFields, inputErrors } from "./types";

function PaymentPage() {
  const [inputFields, setInputFields] = useState<inputFields>(initialInputFields);
  const [inputErrors, setInputErrors] = useState<inputErrors[]>([]);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isCheckedCheck, setIsCheckedCheck] = useState<boolean>(false);
  const [checkedCheckError, setCheckedCheckError] = useState<string>("");

  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const addError = async(field: keyof inputFields, message: string, objKey: string) => {
    setInputErrors((prevErrors) => {
      const newErrors = prevErrors.filter(error => !(error.field === field && error.objKey === objKey));
      return [...newErrors, { field, message, objKey }];
    });
  };

  const removeError = (field: keyof inputFields, objKey: string) => {
    setInputErrors((prevErrors) => prevErrors.filter((error) => ((error.field !== field) || (error.objKey !== objKey))));
  };

  const checkError = (field: keyof inputFields, value: string) => {
    if (field === "email" && !value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      addError("email", "メールアドレスの形式が正しくありません。", "invalidEmail");
    } else if (field === "email") {
      removeError("email", "invalidEmail");
    }

    if (field === "amount" && inputFields.sponsorType === "person" && Number(value) % 1000 !== 0) {
      addError("amount", "個人協賛の金額は1000円単位で入力してください。", "notThousand");
    } else if (field === "amount") {
      removeError("amount", "notThousand");
    }

    if (field === "amount" && inputFields.sponsorType === "company" && Number(value) % 10000 !== 0) {
      addError("amount", "団体協賛の金額は10000円単位で入力してください。", "notTenThousand");
    } else if (field === "amount") {
      removeError("amount", "notTenThousand");
    }

    if (field === "amount" && Number(value) > 1000000) {
      addError("amount", "1000000円以上の協賛については、個別にお問い合わせください。", "overMillion");
    } else if (field === "amount") {
      removeError("amount", "overMillion");
    }
  };

  const handleChange = (field: keyof inputFields, value: string) => {
    checkError(field, value);
    setInputFields({ ...inputFields, [field]: value });
  };

  const handleSubmit = async () => {
    setIsSending(true);
    const requiredFields = ["sponsorType", "name", "address", "nickname", "email", "amount", "paymentMethod"];
    const newErrors: inputErrors[] = [];
    requiredFields.forEach((field) => {
      if (inputFields[field as keyof inputFields] === "") {
        newErrors.push({ field: field as keyof inputFields, message: "必須項目です。", objKey: "required" });
      }
    });
    newErrors.forEach((error) => {
      addError(error.field, error.message, error.objKey);
    });

    if (newErrors.length > 0) {
      setIsSending(false);
      return;
    }

    if (!isCheckedCheck) {
      setCheckedCheckError("内容の確認が必要です。");
      setIsSending(false);
      return;
    } else {
      setCheckedCheckError("");
    }

    if (!executeRecaptcha) {
      alert("reCAPTCHAの読み込みに失敗しました。ページを再読み込みしてください。");
      setIsSending(false);
      return;
    }

    // reCAPTCHA トークンを取得
    const recaptchaToken = await executeRecaptcha("contactFormSubmit");

    const res = await fetch("/api/payment/checkout/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...inputFields, recaptchaToken }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Success:", data);
      if (inputFields.paymentMethod === "bank") {
        router.push("/payment/bank");
      } else {
        router.push(data.checkoutUrl);
      }
    } else {
      setIsSending(false);
    }
  };

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
                  <StepComponent key={index} label={step} isActive={index === 0 ? 1 : 0} />
                ));
              })()}
            </div>
          </div>
          <div className="form">
            <div className="item" id="sponsorType">
              <span className="item__label">協賛の種別</span>
              {(() => {
                const options = [{ "displayName": "個人協賛", "id": "person" }, { "displayName": "団体協賛", "id": "company" }];
                return options.map((option) => (
                  <div key={option.id} className="inputs">
                    <input
                      name={option.id}
                      type="radio"
                      id={option.id}
                      onChange={() => handleChange("sponsorType", option.id)}
                      checked={inputFields.sponsorType === option.id}
                    />
                    <label htmlFor={option.id}>{option.displayName}</label>
                  </div>
                ));
              })()}
              {inputErrors.map((error) => (
                error.field === "sponsorType" ? (
                  <span key={error.objKey} className="item__error">{error.message}</span>
                ) : null
              ))}
            </div>
            <div className="item" id="name">
              <span className="item__label">お名前</span>
              <input
                type="text"
                id="name"
                placeholder="ex) 日本 太郎"
                onChange={(e) => handleChange("name", e.target.value)}
                value={inputFields.name}
                required
              />
              {inputErrors.map((error) => (
                error.field === "name" ? (
                  <span key={error.objKey} className="item__error">{error.message}</span>
                ) : null
              ))}
            </div>
            <div className="item" id="address">
              <span className="item__label">住所</span>
              <input
                type="text"
                id="address"
                placeholder="ex) 東京都千代田区千代田1-1-1"
                onChange={(e) => handleChange("address", e.target.value)}
                value={inputFields.address}
                required
              />
              {inputErrors.map((error) => (
                error.field === "address" ? (
                  <span key={error.objKey} className="item__error">{error.message}</span>
                ) : null
              ))}
            </div>
            <div className="item" id="nickname">
              <span className="item__label">ニックネーム</span>
              <input
                type="text"
                id="nickname"
                placeholder="ex) ニックネームさん"
                onChange={(e) => handleChange("nickname", e.target.value)}
                value={inputFields.nickname}
                required
              />
              {inputErrors.map((error) => (
                error.field === "nickname" ? (
                  <span key={error.objKey} className="item__error">{error.message}</span>
                ) : null
              ))}
            </div>
            <div className="item" id="email">
              <span className="item__label">メールアドレス</span>
              <input
                type="email"
                id="email"
                placeholder="ex) user@example.com"
                onChange={(e) => handleChange("email", e.target.value)}
                value={inputFields.email}
                required
              />
              {inputErrors.map((error) => (
                error.field === "email" ? (
                  <span key={error.objKey} className="item__error">{error.message}</span>
                ) : null
              ))}
            </div>
            <div className="item" id="amount">
              <span className="item__label">金額</span>
              <div className="field__par">
                <input
                  type="number"
                  id="amount"
                  placeholder="ex) 10000"
                  onChange={(e) => handleChange("amount", e.target.value)}
                  value={inputFields.amount}
                  className="w-fit"
                  required
                />
                円
              </div>
              <div className="addChips">
                {(() => {
                  const options = [1000, 5000, 10000, 50000, 100000];
                  return options.map((option) => (
                    <div
                      key={option}
                      className="addChip"
                      onClick={() =>
                        handleChange("amount", (Number(inputFields.amount) + option).toString())
                      }
                    >
                      +{option}
                    </div>
                  ));
                })()}
              </div>
              {inputErrors.map((error) => (
                error.field === "amount" ? (
                  <span key={error.objKey} className="item__error">{error.message}</span>
                ) : null
              ))}
            </div>
            <div className="item" id="paymentMethod">
              <span className="item__label">お支払い方法</span>
              {(() => {
                const options = [{ "displayName": "クレジットカード", "id": "credit" }, { "displayName": "銀行振込", "id": "bank" }];
                return options.map((option) => (
                  <div key={option.id} className="inputs">
                    <input
                      name={option.id}
                      type="radio"
                      id={option.id}
                      onChange={() => handleChange("paymentMethod", option.id)}
                      checked={inputFields.paymentMethod === option.id}
                    >
                    </input>
                    <label htmlFor={option.id}>{option.displayName}</label>
                  </div>
                ));
              })()}
              {inputErrors.map((error) => (
                error.field === "paymentMethod" ? (
                  <span key={error.objKey} className="item__error">{error.message}</span>
                ) : null
              ))}
            </div>
            <div className="item" id="check">
              <span className="item__label">内容の確認</span>
              <div className="inputs">
                <CheckBox
                  isChecked={isCheckedCheck}
                  label="入力内容に間違いがないことを確認しました"
                  onClick={() => {
                    setIsCheckedCheck(!isCheckedCheck);
                    setCheckedCheckError("");
                  }}
                />
              </div>
              {checkedCheckError ? <span className="item__error">{checkedCheckError}</span> : <></>}
            </div>
            <SendButton
              isLoading={isSending}
              isDisabled={false}
              onClick={() => handleSubmit()}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function GoogleRecaptchaPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}>
      <PaymentPage />
    </GoogleReCaptchaProvider>
  );
}

import "./stepComponent.css";

const StepComponent = ({ label, isActive }: { label: string; isActive: number }) => {
  return (
    <div className={`step ${isActive ? "step--active" : ""}`}>
      <span className="activeChip"></span>
      <span className="label">{label}</span>
    </div>
  );
};

import ArrowForwardIcon from "@/components/svg/arrow_forward_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import "./sendButton.css";

const SendButton = (props: { isLoading: boolean; isDisabled: boolean; onClick: () => void }) => {
  return (
    <button
      className={`sendButton ${props.isLoading && "sendButton--loading"} ${props.isDisabled && "sendButton--disabled"}`}
      disabled={props.isDisabled || props.isLoading}
      onClick={props.onClick}
    >
      <div className="texts">
        <span className="text">お支払い画面へ進む</span>
        {props.isLoading ? <div className="loading"><div className="loading__child" /></div> : null}
      </div>
      <div className="icon__par">
        <ArrowForwardIcon color="none" className="icon" />
      </div>
    </button>
  );
};

import CheckIcon from "@/components/svg/check_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import "./checkBox.css";

const CheckBox = (props: { isChecked: boolean; label: string; onClick: () => void }) => {
  return (
    <button onClick={props.onClick} className="checkBoxComp">
      <div className={`checkBox ${props.isChecked && "checkBox--checked"}`}>
        <CheckIcon color="none" className="icon" />
      </div>
      <span className="text">入力内容に間違いがないことを確認しました</span>
    </button>
  );
};