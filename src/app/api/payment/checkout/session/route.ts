// POSTリクエストを受け取り、フォームから受け取った情報を反映させてURLを生成してください。
// 支払方法がクレジットカードの場合は、stripeのセッションを生成してください。

import { NextRequest, NextResponse } from 'next/server';
import { fields } from './types';
import pool from '@/utils/db';
import { randomBytes } from 'crypto';
import { stripe } from '@/utils/stripe';
import { notifyActionToDiscord, notifyToDiscord } from '@/utils/notifyToDiscord';
import { BankEmailTemplate } from '@/components/emailTemplates/apply/bank/bank';
import resend from '@/utils/resend';

const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req: NextRequest) {
  if (!recaptchaSecretKey) throw new Error("reCAPTCHA Secret Keyが設定されていません");

  try {
    const body = await req.json();

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid or missing request body' },
        { status: 400 }
      );
    }

    const missingFields = Object.keys(body as fields).filter(
      (field) => !(field in body) || body[field] === undefined || body[field] === null
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // reCAPTCHAトークンの検証
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${recaptchaSecretKey}&response=${body.recaptchaToken}`,
    });
    const recaptchaData = await recaptchaResponse.json();

    const MINIMUM_SCORE = 0.5;
    if (!recaptchaData.success || recaptchaData.score < MINIMUM_SCORE) {
      console.error("reCAPTCHA verification failed or low score:", recaptchaData);
      return NextResponse.json({ message: "reCAPTCHA verification failed" }, { status: 400 });
    }

    // 数字が被る可能性があるが、無視できるほど小さいと評価した。（被った場合、DB追加クエリ実行時にエラーを返す）
    let paymentId: number;
    /*do {
      paymentId = parseInt(randomBytes(5).toString('hex'), 16);
    } while (paymentId.toString().length !== 12); */
    paymentId = parseInt(randomBytes(6).toString('hex'), 16);

    console.log("paymentId: ", paymentId);

    try {
      await pool.execute(
        'INSERT INTO clients (payment_id, sponsor_type, name, address, nickname, email, amount, payment_method, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          paymentId,
          body.sponsorType,
          body.name,
          body.address,
          body.nickname,
          body.email,
          body.amount,
          body.paymentMethod,
          'pending',
        ]
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: 'Failed to process request' },
        { status: 500 }
      );
    }

    if (body.paymentMethod === 'bank') {
      let template = BankEmailTemplate({
        sponsorType: body.sponsorType,
        name: body.name,
        nickname: body.nickname,
        date: new Date(),
        amount: body.amount,
        paymentId,
      })
      // メール送信
      try {
        const { data, error } = await resend.emails.send({
          from: '高専カンファレンスin首都 <no-reply@kosenconfsyuto.com>',
          to: [body.email],
          subject: '口座情報をお知らせします',
          react: template,
        });

        if (error) {
          throw new Error(`Resendのエラー: ${error}`);
        }
      } catch (error) {
        await notifyToDiscord(`ユーザーへのメール送信エラー: ${error}`, "error");
        throw new Error(`ユーザーへのメール送信エラー: ${error}`);
      }
      // Discordへの通知
      await notifyActionToDiscord(paymentId, 'create');
      return NextResponse.json(
        {
          message: 'Request processed successfully',
          paymentId,
        },
        { status: 200 }
      );
    }

    let session;
    try {
      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "jpy",
              product_data: {
                name: "高専カンファレンス in 首都 協賛",
              },
              unit_amount: body.amount,
            },
            quantity: 1,
          },
        ],
        customer_email: body.email,
        mode: "payment",
        submit_type: "pay",
        success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/payment/success?paymentId=${paymentId}`,
        cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/payment/cancel?paymentId=${paymentId}`,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: 'Failed to process request' },
        { status: 500 }
      );
    }

    // sessionIdを保存
    try {
      await pool.execute(
        'UPDATE clients SET stripe_session_id = ? WHERE payment_id = ?',
        [session.id, paymentId]
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: 'Failed to process request' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Request processed successfully',
        checkoutUrl: session.url,
        paymentId,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}