/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// POSTリクエストを受け取り、フォームから受け取った情報を反映させてURLを生成してください。
// 支払方法がクレジットカードの場合は、stripeのセッションを生成してください。

import { NextRequest, NextResponse } from "next/server";

const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req: NextRequest) {
  if (!recaptchaSecretKey) throw new Error("reCAPTCHA Secret Keyが設定されていません");
  return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
}