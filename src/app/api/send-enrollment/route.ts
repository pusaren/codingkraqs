import { NextResponse } from "next/server";

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!;

export async function POST(req: Request) {
  try {
    const { name, email, program, message } = await req.json();

    // Send data directly to Formspree
    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        program,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.statusText}`);
    }

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending Formspree email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
