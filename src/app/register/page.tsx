"use client";

import { auth, db } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: username });

      // ✅ Save username–email mapping to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username: username,
        email: email,
        phone: phone,
      });

      alert("Registration successful! Please login.");
      window.location.href = "/login";
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center pt-28 pb-10 px-4 bg-white">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-orange-500">
            Create Your Account
          </h1>
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-black">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
