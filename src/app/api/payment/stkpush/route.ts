import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // your logic for stkpush here...
    console.log("STK Push request received:", body);

    return NextResponse.json({ success: true, message: "STK Push initiated" });
  } catch (error) {
    console.error("Error in stkpush route:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
