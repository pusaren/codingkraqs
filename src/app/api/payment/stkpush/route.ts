import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { phone, amount } = req.body;

    // Validate inputs
    if (!phone || !amount) {
      return res.status(400).json({ message: "Phone and amount are required" });
    }

    // Validate env vars
    const {
      DARAJA_CONSUMER_KEY,
      DARAJA_CONSUMER_SECRET,
      DARAJA_PASSKEY,
      DARAJA_SHORTCODE,
      DARAJA_CALLBACK_URL,
    } = process.env;

    if (
      !DARAJA_CONSUMER_KEY ||
      !DARAJA_CONSUMER_SECRET ||
      !DARAJA_PASSKEY ||
      !DARAJA_SHORTCODE ||
      !DARAJA_CALLBACK_URL
    ) {
      throw new Error("Missing Daraja environment variables.");
    }

    // 1️⃣ Generate access token
    const tokenResponse = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        auth: {
          username: DARAJA_CONSUMER_KEY,
          password: DARAJA_CONSUMER_SECRET,
        },
      }
    );

    const access_token = tokenResponse.data.access_token;
    if (!access_token) throw new Error("Failed to generate access token");

    // 2️⃣ Generate password
    const timestamp = new Date()
      .toISOString()
      .replace(/[-:TZ.]/g, "")
      .slice(0, 14);

    const password = Buffer.from(
      DARAJA_SHORTCODE + DARAJA_PASSKEY + timestamp
    ).toString("base64");

    // 3️⃣ STK push request
    const stkResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: DARAJA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: DARAJA_SHORTCODE,
        PhoneNumber: phone,
        CallBackURL: DARAJA_CALLBACK_URL,
        AccountReference: "CodingKraqs",
        TransactionDesc: "Course Enrolment Payment",
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log("✅ Safaricom STK Response:", stkResponse.data);
    return res.status(200).json({ success: true, data: stkResponse.data });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Safaricom API Error:", error.response?.data || error.message);
      return res.status(500).json({
        success: false,
        message: "Payment initiation failed",
        error: error.response?.data || error.message,
      });
    } else {
      console.error("❌ Unknown Error:", error);
      return res.status(500).json({
        success: false,
        message: "Error processing payment",
      });
    }
  }
}
