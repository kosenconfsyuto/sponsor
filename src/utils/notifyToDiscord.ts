export async function notifyToDiscord(request: string, type: "error") {
    try {
        let webhookUrl;
        if (type === "error") {
            webhookUrl = process.env.DISCORD_WEBHOOK_ERROR;
        }

        if (!webhookUrl) throw new Error("Discord Webhook URLが設定されていません");

        let typeJp;
        switch (type) {
            case "error":
                typeJp = "エラー";
                break;
        }

        const payload = {
            embeds: [
                {
                    title: `スポンサーサイト - ${process.env.ENVIRONMENT_DESCRIPTION}: ${typeJp}`,
                    description: request,
                    color: 5620992
                }
            ]
        };

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Discordへのデータ送信エラー: ${response.statusText}`);
        }

        return;
    } catch (error) {
        console.error(error);
        return;
    }
}

import { RowDataPacket } from "mysql2/promise";
import pool from "@/utils/db";

export async function notifyActionToDiscord(paymentId: number, action: "create" | "delete") {
    try {
        let webhookUrl;
        if (action === "create") {
            webhookUrl = process.env.DISCORD_WEBHOOK_ACTION;
        } else if (action === "delete") {
            webhookUrl = process.env.DISCORD_WEBHOOK_ACTION;
        }

        if (!webhookUrl) throw new Error("Discord Webhook URLが設定されていません");

        let actionJp;
        switch (action) {
            case "create":
                actionJp = "作成";
                break;
            case "delete":
                actionJp = "削除";
                break;
        }

        const [rows] = await pool.execute<RowDataPacket[]>(
            "SELECT * FROM clients WHERE payment_id = ?",
            [paymentId]
        );

        const payload = {
            embeds: [
                {
                    title: `スポンサーサイト - ${process.env.ENVIRONMENT_DESCRIPTION}: ${actionJp} - ${rows[0]?.name || "不明"}`,
                    description: rows[0]?.payment_method === "bank" ? "⚠️銀行口座の振込を確認してください" : undefined,
                    fields: [
                        { name: "スポンサーの種類", value: rows[0]?.sponsor_type || "未設定" },
                        { name: "お名前", value: rows[0]?.name || "未設定" },
                        { name: "住所", value: rows[0]?.address || "未設定" },
                        { name: "ニックネーム", value: rows[0]?.nickname || "未設定" },
                        { name: "メールアドレス", value: rows[0]?.email || "未設定" },
                        { name: "支払い金額", value: rows[0]?.amount?.toString() || "未設定" },
                        { name: "支払い方法", value: rows[0]?.payment_method || "未設定" },
                        { name: "支払いID", value: rows[0]?.payment_id || "未設定" },
                        { name: "ステータス", value: rows[0]?.status || "未設定" },
                        { name: "stripe_session_id", value: rows[0]?.stripe_session_id || "未設定" },
                        { name: "作成日時", value: rows[0]?.created_at || "未設定" },
                    ],
                    color: action === "delete" ? 16711680 : 1220570,
                },
            ],
        };

        console.log("payload: ", payload);

        const discordResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!discordResponse.ok) {
            console.error(discordResponse);
            throw new Error(`Discordへのデータ送信エラー: `+ discordResponse.statusText);
        }

        return;
    } catch (error) {
        console.error(error);
        return;
    }
}