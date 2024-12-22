import { NextRequest, NextResponse } from "next/server";
import pool from "@/utils/db";
import { RowDataPacket } from "mysql2/promise";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const paymentId = url.searchParams.get("paymentId") as string;

    const [statusRow] = await pool.execute<RowDataPacket[]>(
      "SELECT status FROM clients WHERE payment_id = ?",
      [paymentId]
    );

    if (statusRow[0].status === "success") {
      return NextResponse.json({ error: "既に処理が完了しています" }, { status: 400 });
    }

    await pool.execute(
      "UPDATE clients SET status = 'failed' WHERE payment_id = ?",
      [paymentId]
    );

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/`);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}