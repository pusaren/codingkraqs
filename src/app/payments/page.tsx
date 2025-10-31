"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const program = searchParams.get("program");
  const count = searchParams.get("count");

  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePayment = async () => {
    if (!method) {
      alert("Please select a payment method");
      return;
    }

    if (method === "Mpesa" && phone.trim().length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/payment/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone.replace(/^0/, "254"), // Format 07... -> 2547...
          amount: 100, // You can make this dynamic later
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Check your phone to complete the payment.");
        router.push(
          `/success?program=${encodeURIComponent(
            program || ""
          )}&method=${method}`
        );
      } else {
        alert("⚠️ Payment initiation failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error processing payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white flex flex-col items-center py-20 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-black text-center mb-6">
          Payment
        </h1>

        <p className="text-center text-black">
          You are enrolling in <span className="font-semibold">{program}</span>{" "}
          for <span className="font-semibold">{count}</span> participant(s).
        </p>

        <h3 className="text-lg font-semibold mb-3 text-black">
          Choose Payment Method:
        </h3>

        <div className="space-y-3 text-black">
          {[
            "Mpesa",
            "Credit/Debit Card",
            "PayPal",
            "Stripe",
            "Airtel Money",
            "Bank Transfer",
          ].map((m) => (
            <div
              key={m}
              onClick={() => setMethod(m)}
              className={`p-3 border rounded-lg cursor-pointer transition ${
                method === m
                  ? "border-black bg-gray-100 shadow-sm"
                  : "border-gray-300 hover:border-blue"
              }`}
            >
              {m}
            </div>
          ))}
        </div>

        {/* Mpesa Phone Input */}
        {method === "Mpesa" && (
          <div className="mt-5 text-black">
            <label className="block mb-2 text-sm font-medium text-black">
              Enter Mpesa Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 0712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>
        )}

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full mt-6 bg-black text-white py-3 rounded-lg font-semibold hover:bg-orange-900 transition disabled:opacity-70"
        >
          {loading
            ? "Processing..."
            : method === "Mpesa"
            ? "Pay Now"
            : "Proceed to Pay"}
        </button>
      </div>
    </section>
  );
}
