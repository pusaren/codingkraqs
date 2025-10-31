"use client";

import { auth, db } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 🔍 Step 1: Find user by username
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        throw new Error("Username not found. Please register first.");
      }

      const userData = snapshot.docs[0].data();
      const userEmail = userData.email;

      // 🔑 Step 2: Login with found email
      await signInWithEmailAndPassword(auth, userEmail, password);

      alert("Login successful!");
      window.location.href = "/enrol";
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center pt-28 pb-10 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-orange-500">
            Login to Your Account
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-black">
            Don’t have an account?{" "}
            <Link href="/register" className="text-orange-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
