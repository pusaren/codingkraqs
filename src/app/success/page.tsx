"use client";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const program = searchParams.get("program");
  const method = searchParams.get("method");
  const amount = searchParams.get("amount") || "100";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-700 mb-2">
          You have successfully enrolled in <strong>{program}</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Payment Method: <strong>{method}</strong>
        </p>
        <p className="text-gray-700">
          Amount Paid: <strong>KES {amount}</strong>
        </p>
      </div>
    </section>
  );
}
