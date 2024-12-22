import { NextRequest, NextResponse } from "next/server";
import pool from "@/utils/db";
import { RowDataPacket } from "mysql2/promise";
import { notifyToDiscord } from "@/utils/notifyToDiscord";
import { CreditEmailTemplate } from "@/components/emailTemplates/apply/credit/credit";
import resend from "@/utils/resend";

const webhookUrl = process.env.DISCORD_WEBHOOK_ACTION;

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const paymentId = url.searchParams.get("paymentId") as string;

    if (!webhookUrl) {
      await notifyToDiscord("Discord Webhook URLが設定されていません", "error");
      throw new Error("Discord Webhook URLが設定されていません");
    };

    const [statusRow] = await pool.execute<RowDataPacket[]>(
      "SELECT status FROM clients WHERE payment_id = ?",
      [paymentId]
    );

    if (statusRow[0].status === "success") {
      return NextResponse.json({ error: "既に処理が完了しています" }, { status: 400 });
    }

    await pool.execute(
      "UPDATE clients SET status = 'success' WHERE payment_id = ?",
      [paymentId]
    );

    const [rows] = await pool.execute<RowDataPacket[]>(
      "SELECT * FROM clients WHERE payment_id = ?",
      [paymentId]
    );

    const payload = {
      embeds: [
        {
          title: `スポンサーサイト - ${process.env.ENVIRONMENT_DESCRIPTION}: 新しいお支払い`,
          fields: [
            { name: "スポンサーの種類", value: rows[0].sponsor_type },
            { name: "お名前", value: rows[0].name },
            { name: "住所", value: rows[0].address },
            { name: "ニックネーム", value: rows[0].nickname },
            { name: "メールアドレス", value: rows[0].email },
            { name: "支払い金額", value: rows[0].amount },
            { name: "支払い方法", value: rows[0].payment_method },
            { name: "支払いID", value: rows[0].payment_id },
            { name: "ステータス", value: "支払い完了" },
            { name: "stripe_session_id", value: rows[0].stripe_session_id },
            { name: "作成日時", value: rows[0].created_at },
          ],
          color: 5620992,
        },
      ],
    };

    // Discord webhookへの送信
    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!discordResponse.ok) {
      throw new Error(`Discordへのデータ送信エラー: ${discordResponse.statusText}`);
    }

    // メール送信
    try {
      const { data, error } = await resend.emails.send({
        from: '高専カンファレンスin首都 <no-replay@kosenconfsyuto.com>',
        to: [rows[0].email],
        subject: '協賛いただきありがとうございます',
        react: CreditEmailTemplate({
          sponsorType: rows[0].sponsor_type,
          name: rows[0].name,
          nickname: rows[0].nickname,
          date: new Date(rows[0].created_at),
          amount: rows[0].amount,
          paymentId: rows[0].payment_id,
        }),
      });

      if (error) {
        console.error(`Resendのエラー: ${error}`);
        throw new Error(`Resendのエラー: ${error}`);
      }
    } catch (error) {
      await notifyToDiscord(`ユーザーへのメール送信エラー: ${error}`, "error");
      throw new Error(`ユーザーへのメール送信エラー: ${error}`);
    }

    return NextResponse.json(
      {
        message: "Success",
        sponsorType: rows[0].sponsor_type,
        name: rows[0].name,
        address: rows[0].address,
        nickname: rows[0].nickname,
        email: rows[0].email,
        amount: rows[0].amount,
        paymentMethod: rows[0].payment_method,
        paymentId: rows[0].payment_id,
        status: rows[0].status,
        createdAt: rows[0].created_at
      },
      {
        status: 200
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}